import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-10 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8">
        {/* Left Section - Copyright */}
        <div>
          <h3 className="text-3xl font-bold text-green-600">NTEAP</h3>
          <p className="mt-4 text-gray-600">Copyright © 2025 - <br/>All Rights Reserved</p>
        </div>

        {/* Middle Section - Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 border-b-2 border-green-600 inline-block mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-600">About Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-600">Browse Books</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-600">Pricing</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-600">Contact Us</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-green-600">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Right Section - Stay Updated */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 border-b-2 border-green-600 inline-block mb-4">
            Stay Updated
          </h4>
          <p className="text-gray-700">
            Subscribe to our newsletter for exclusive offers and academic insights.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button className="bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700">
              SUBSCRIBE
            </button>
          </div>

          <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-4">
            Connect with Us
          </h4>
          <div className="flex space-x-4 text-green-600">
            <FaFacebook className="cursor-pointer hover:text-green-800" size={24} />
            <FaTwitter className="cursor-pointer hover:text-green-800" size={24} />
            <FaInstagram className="cursor-pointer hover:text-green-800" size={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}