import React from 'react';

const Page = () => {
  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <div className="flex flex-col items-center text-white pt-14 px-6 animate__animated animate__fadeIn">
        <h1 className="font-extrabold text-4xl md:text-[48px] text-center mb-6 text-blue-500 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Data Fetching
        </h1>

        <p className="text-center md:text-[24px] text-[18px] opacity-80 mb-8 animate__animated animate__fadeIn animate__delay-2s">
          Select a method to explore data fetching using Next.js:
        </p>

        <ul className="list-disc ml-5 text-center text-[24px] space-y-4">
          <li className="transition-all duration-300 hover:scale-105 hover:text-blue-400">
            Client Side Data Fetching
          </li>
          <li className="transition-all duration-300 hover:scale-105 hover:text-blue-400">
            Server Side Data Fetching
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
