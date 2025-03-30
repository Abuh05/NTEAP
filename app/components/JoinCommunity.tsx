import React from "react";

export default function JoinCommunity() {
  return (
    <div className="relative py-16 px-8">
      {/* Card Container */}
      <div className="relative mt-[-120px] bg-white rounded-2xl shadow-lg max-w-4xl mx-auto overflow-hidden">
        <div className="grid grid-cols-2">
          {/* Text Section */}
          <div className="p-10">
            <h2 className="text-4xl font-extrabold text-green-900">
              Join the <span className="text-green-500">NTEAP</span> Community Today!
            </h2>
            <p className="mt-4 text-gray-700">
              Start your journey to academic excellence by signing up now. Get instant
              access to a world of knowledge at your fingertips!
            </p>
            <button className="mt-6 px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
              Sign up for free!
            </button>
          </div>

          {/* Image Section */}
          <div
            className="relative"
            style={{
              backgroundImage: "url('/bg-image3.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}