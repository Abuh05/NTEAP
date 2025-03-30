import React from "react";
import { FaSearch, FaBook, FaTruck, FaBoxes } from "react-icons/fa"; // Import icons

export default function WhyNTEAP() {
  return (
    <section className="bg-green-700 py-18 px-8 relative overflow-hidden">
      {/* Faint Background Blending Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-800 via-green-600 to-green-700 opacity-90"></div>

      <div className="relative text-center z-10">
        <h2 className="text-white text-5xl font-extrabold">Why <span className="text-[#B5F5CC]">NTEAP</span></h2>
        <div className="h-1 bg-[#B5F5CC] w-16 mx-auto mt-4"></div>
      </div>

      <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto z-10 mb-14">
        {/* Feature Cards */}
        <div className="bg-green-600 bg-opacity-90 rounded-lg p-6 text-center text-white shadow-2xl shadow-green-900">
          <FaBoxes className="text-4xl mx-auto mb-4" />
          <h3 className="font-bold text-xl">Unlimited Access</h3>
          <p className="mt-2 text-sm">
            Browse and read from a massive digital library with books covering all academic fields.
          </p>
        </div>

        <div className="bg-green-600 bg-opacity-90 rounded-lg p-6 text-center text-white shadow-2xl shadow-green-900">
          <FaSearch className="text-4xl mx-auto mb-4" />
          <h3 className="font-bold text-xl">Smart Search</h3>
          <p className="mt-2 text-sm">
            Find books with a fast and intuitive search feature tailored for academic research.
          </p>
        </div>

        <div className="bg-green-600 bg-opacity-90 rounded-lg p-6 text-center text-white shadow-2xl shadow-green-900">
          <FaBook className="text-4xl mx-auto mb-4" />
          <h3 className="font-bold text-xl">Expert-Curated Collections</h3>
          <p className="mt-2 text-sm">
            Explore book lists curated by academic professionals and top universities to guide your studies.
          </p>
        </div>

        <div className="bg-green-600 bg-opacity-90 rounded-lg p-6 text-center text-white shadow-2xl shadow-green-900">
          <FaTruck className="text-4xl mx-auto mb-4" />
          <h3 className="font-bold text-xl">Hassle-Free Purchase & Delivery</h3>
          <p className="mt-2 text-sm">
            Get printed copies of your favorite books delivered straight to your doorstep!
          </p>
        </div>
      </div>
    </section>
  );
}