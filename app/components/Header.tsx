"use client";

import React, { useState } from "react";
import {
  FiHome,
  FiUser,
  FiBook,
  FiDollarSign,
  FiMail,
  FiHelpCircle,
} from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full backdrop-blur-md shadow-sm z-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">NTEAP</div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow mx-8">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="What book are you looking for?"
              className="w-full p-3 pl-4 rounded-lg bg-white border border-gray-300 focus:outline-none"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-green-600 text-white rounded-r-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6 0 7.5 7.5 0 0010.6 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Sign-up / Sign-in Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
            Sign up
          </button>
          <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg">
            Sign in
          </button>
        </div>

        {/* Hamburger Icon - Visible on All Screens */}
        <div className="flex items-center">
          <button onClick={toggleMenu} className="ml-4 bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sliding Menu */}
<div
  className={`fixed top-0 right-0 bottom-0 h-full w-4/5 md:w-1/5 bg-green-600 text-white transform ${
    isMenuOpen ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-300 z-20 flex flex-col`}
>
  {/* Close Button */}
  <button onClick={toggleMenu} className="absolute top-4 right-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>

  {/* Navigation Links */}
  <nav className="space-y-6 mt-20 px-6 flex-grow bg-green-600">
    <a href="#" className="flex items-center space-x-2">
      <FiHome className="w-5 h-5" /> <span>Home</span>
    </a>
    <a href="#" className="flex items-center space-x-2">
      <FiUser className="w-5 h-5" /> <span>About Us</span>
    </a>
    <a href="#" className="flex items-center space-x-2">
      <FiBook className="w-5 h-5" /> <span>Browse Books</span>
    </a>
    <a href="#" className="flex items-center space-x-2">
      <FiDollarSign className="w-5 h-5" /> <span>Pricing</span>
    </a>
    <a href="#" className="flex items-center space-x-2">
      <FiMail className="w-5 h-5" /> <span>Contact Us</span>
    </a>
    <a href="#" className="flex items-center space-x-2">
      <FiHelpCircle className="w-5 h-5" /> <span>FAQs</span>
    </a>
  </nav>

  {/* Action Buttons */}
  <div className="px-6 py-6 bg-green-600">
    <button className="w-full px-4 py-2 bg-white text-green-600 rounded-lg">
      Sign up
    </button>
    <button className="w-full px-4 py-2 mt-2 border border-white text-white rounded-lg">
      Sign in
    </button>
  </div>
</div>
    </header>
  );
}