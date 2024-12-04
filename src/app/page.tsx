import Link from "next/link";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="/client-side"
          >
            <h3 className="text-2xl font-bold">Client Side →</h3>
            <div className="text-lg">
              Client-side form handling with React state
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="/server-side"
          >
            <h3 className="text-2xl font-bold">Server Side →</h3>
            <div className="text-lg">
              Server-side form handling with Server Actions
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="/static"
          >
            <h3 className="text-2xl font-bold">Static Page →</h3>
            <div className="text-lg">
              A static page with an image
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
