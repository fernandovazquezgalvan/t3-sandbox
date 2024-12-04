import Link from "next/link";
import Image from "next/image";
import type { NextPage } from "next";

const StaticPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="absolute top-8 text-3xl font-bold">Static Page</div>
      
      <div className="flex flex-col items-center gap-8 max-w-4xl px-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] text-center">
          Welcome to Static Page
        </h1>
        
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1732494644033-fedc311f0442?q=80&w=1631"
            alt="Landscape photo"
            width={1631}
            height={917}
            className="object-cover"
            priority
            quality={85}
          />
        </div>
      </div>

      <div className="fixed bottom-8">
        <Link 
          href="/" 
          className="text-white hover:text-gray-300 underline transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default StaticPage; 