import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { ConvexClientProvider } from "@/components/convex-client-provider";

const inter = Inter({
  subsets: ["latin"],
});






export const metadata: Metadata = {
  title: {
    default: "Google Docs Clone",
    template: "%s | Google Docs Clone",
  },
  description:
    "A real-time multi-user document editing application built with Next.js, Liveblocks, Convex, Clerk, and Tiptap.",
  keywords: [
    "google docs clone",
    "real-time collaboration",
    "next.js",
    "liveblocks",
    "convex",
    "tiptap",
    "collaborative editor",
  ],
  authors: [{ name: "Shahnwaz Khan" }],
  creator: "Shahnwaz Khan",
  metadataBase: new URL("https://google-docs-clone-umber-eight.vercel.app"),

  openGraph: {
    title: "Google Docs Clone",
    description:
      "Collaborate on documents in real time with live cursors, presence, and rich-text editing.",
    url: "https://google-docs-clone-umber-eight.vercel.app",
    siteName: "Google Docs Clone",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Google Docs Clone Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Google Docs Clone",
    description:
      "A real-time collaborative document editor built with Next.js and Liveblocks.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <ConvexClientProvider>
          <NuqsAdapter>
            <Toaster />
            {children}
          </NuqsAdapter>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
