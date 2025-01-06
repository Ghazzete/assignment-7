import React from 'react';
import Link from 'next/link';

function Nav() {
  return (
    <nav className="bg-blue-600 p-4 text-[#fff] shadow-md md:text-[20px]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="md:text-2xl font-bold">Data Fetching</h1>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="relative inline-block text-white font-semibold text-lg group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full origin-left"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/client-side"
              className="relative inline-block text-white font-semibold text-lg group"
            >
              Client Data
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full origin-left"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/server-side"
              className="relative inline-block text-white font-semibold text-lg group"
            >
              Server Data
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full origin-left"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
