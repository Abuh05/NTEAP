import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white ">
      {/* Background Image */}
<div
  className="absolute inset-0"
  style={{
    backgroundImage: `url('/bg-image.png'), url('/bg-image1.png')`, // Two background images layered
    backgroundSize: 'cover, cover', // Ensures both images cover the section
    backgroundPosition: 'center, center', // Centers both images
    backgroundRepeat: 'no-repeat, no-repeat', // Prevents image tiling
  }}
></div>

{/* Text Content */}
<div className="absolute top-1/3 right-40">
  <h1 className="text-[90px] mt-[-70px] font-extrabold font-raleway" style={{ color: '#28A745' }}>NTEAP</h1>
  <p className="mt-[-20px] text-xl font-bold text-gray-900 leading-tight text-justify font-rajdhani" style={{ color: '#28A745' }}>
    All-in-one Hub <br /> for every Academic Materials
  </p>
</div>


      {/* Scrolling Recent Uploads Section */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[80%] rounded-full bg-green-600 px-4 py-6 flex items-center space-x-4">
        <button className="bg-green-800 text-white px-6 py-4 rounded-full font-semibold text-sm">
          Recent Uploads
        </button>

        {/* Scrolling Text */}
        <div className="overflow-hidden flex-1">
          <div className="scrolling-text whitespace-nowrap text-white flex">
            <span className="inline-block mx-6 font-bold text-black">
              Adejeyi Nnamdi
            </span>
            <span>- Essential of Biology</span>

            <span className="inline-block mx-6 font-bold text-black">
              Adejeyi Nnamdi
            </span>
            <span>- Essential of Biology</span>

            <span className="inline-block mx-6 font-bold text-black">
              Adejeyi Nnamdi
            </span>
            <span>- Essential of Biology</span>
          </div>
        </div>
      </div>
    </section>
  );
}