import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-red-50">
      Click
      <Link
        href="/documents/123"
        className="mx-1 underline underline-offset-2 text-blue-400 hover:text-blue-200 cursor-pointer"
      >
        here
      </Link>
      to go to document id
    </div>
  );
};

export default Home;
