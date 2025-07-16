import React from "react";
import Image from "next/image"; // If using Next.js, otherwise replace with <img />
import Link from "next/link"; // Optional if using client-side routing

const accommodations = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Apartments",
  "Cabins",
  "Villas",
];

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-gray-800">StayEasy</span>
        </div>

        {/* Search bar */}
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search accommodations..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex space-x-3">
          <button className="text-blue-600 font-medium hover:underline">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav className="mt-4 overflow-x-auto whitespace-nowrap px-2">
        <ul className="flex space-x-6 text-sm font-medium text-gray-600">
          {accommodations.map((type) => (
            <li key={type}>
              <a href="#" className="hover:text-blue-600">
                {type}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
