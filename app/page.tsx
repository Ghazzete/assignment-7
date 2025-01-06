"use client";
import Link from "next/link";

const Page = () => {

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 h-screen p-4">
      <div className="flex flex-col items-center text-black pt-14 px-6">
        <h1 className="font-extrabold text-4xl md:text-[48px] text-center mb-6 text-blue-600 title">
          Welcome to Data Fetching
        </h1>

        <p className="text-center md:text-[24px] text-[18px] opacity-80 mb-8 subtitle">
          Select a method to explore data fetching using Next.js:
        </p>

        <ul className="list-disc ml-5 text-center text-[24px] space-y-4">
          <li
            className="transition-all duration-300 hover:scale-105 hover:text-gray-200 cursor-pointer list-item"
            onClick={() => alert("Client Side Data Fetching")}
          >
            Client Side Data Fetching
          </li>

          <li
            className="transition-all duration-300 hover:scale-105 hover:text-gray-200 cursor-pointer list-item"
            onClick={() => alert("Server Side Data Fetching")}
          >
            Server Side Data Fetching
          </li>
        </ul>

        <div className="mt-8 space-x-4">
  <Link href="/client-side">
  <button className="bg-clip-border relative bg-black px-6 py-2 text-white rounded-lg font-semibold text-lg overflow-hidden group">
    <span className="absolute inset-0 bg-gradient-to-tl from-blue-600 via-indigo-500 to-purple-600 transform group-hover:scale-y-100 scale-y-0 transition-transform duration-500 origin-bottom z-0"></span>
    <span className="relative z-10">Client-Side</span> {/* Ensure text is on top */}
  </button>
  </Link>

          <Link href="/server-side">
          <button className="relative bg-black px-6 py-2 text-white rounded-lg font-semibold text-lg overflow-hidden group">
    <span className="absolute inset-0 bg-gradient-to-tl from-blue-600 via-indigo-500 to-purple-600 transform group-hover:scale-y-100 scale-y-0 transition-transform duration-500 origin-bottom z-0"></span>
    <span className="relative z-10">Server-Side</span>
  </button>
  </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
