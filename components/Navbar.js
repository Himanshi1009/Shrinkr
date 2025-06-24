import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-24 bg-gradient-to-r from-purple-700 to-indigo-600 text-white flex justify-between items-center px-6 shadow-md sticky top-0 z-50">
      
      {/* Logo */}
      <div className="text-4xl font-extrabold tracking-wide">
        <Link href="/">Shrinkr</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 items-center text-lg font-semibold">
        <li className="relative group">
          <Link href="/">
            <span className="hover:text-gray-200 transition-all">Home</span>
          </Link>
          <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
        </li>
        
        <li className="relative group">
          <Link href="/shorten">
            <span className="hover:text-gray-200 transition-all">Shorten</span>
          </Link>
          <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
        </li>

        {/* <li className="relative group">
          <Link href="/contact">
            <span className="hover:text-gray-200 transition-all">Contact Us</span>
          </Link>
          <div className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
        </li> */}

        {/* Try Now Button */}
        <li>
          <Link href="/shorten">
            <button className="bg-white text-purple-700 px-4 py-2 font-semibold rounded-lg shadow hover:bg-gray-100 transition-all">
              Try Now!
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

