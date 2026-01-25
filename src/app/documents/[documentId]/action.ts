"use server";

import { ConvexHttpClient } from "convex/browser";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function getDocuments(ids: Id<"documents">[]) {
  return await convex.query(api.documents.getByIds, { ids });
}

export async function getUsers() {
  const { sessionClaims } = await auth();
  const clerk = await clerkClient();

  const orgId = (sessionClaims as { o?: { id?: string } })?.o?.id;

  // If no org, return just the current user
  if (!orgId) {
    const { userId } = await auth();
    if (!userId) return [];

    const user = await clerk.users.getUser(userId);

    return [
      {
        id: user.id,
        name: user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
        avatar: user.imageUrl,
        color: "",
      },
    ];
  }

  const response = await clerk.users.getUserList({
    organizationId: [orgId],
  });

  return response.data.map((user) => ({
    id: user.id,
    name: user.fullName ?? user.primaryEmailAddress?.emailAddress ?? "Anonymous",
    avatar: user.imageUrl,
    color: "",
  }));
}
