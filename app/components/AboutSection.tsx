import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white via-green-100 to-green-200 flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-24">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-xl font-bold text-black font-raleway">About</h2>
          <h1 className="text-5xl font-extrabold text-green-600 mt-2 font-raleway">NTEAP</h1>

          {/* Button Group */}
          <div className="flex space-x-4 mt-4">
            <button className="px-4 py-2 bg-green-300 text-green-800 font-bold rounded-full font-raleway">
              Discover
            </button>
            <button className="px-4 py-2 bg-green-500 text-white font-bold rounded-full font-raleway">
              Read
            </button>
            <button className="px-4 py-2 bg-green-700 text-white font-bold rounded-full font-raleway">
              Excel
            </button>
          </div>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed font-rajdhani">
            NTEAP is the one-stop destination for students to access a vast collection of
            academic books across multiple disciplines. Whether you're studying science,
            arts, engineering, medicine, or business, we have the right resources to power
            your learning journey.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end px-12">
          <div className="w-72 h-72 rounded-full overflow-hidden shadow-lg">
            <img
              src="/lab-image.jpg" // Replace with your actual image URL
              alt="Library background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}