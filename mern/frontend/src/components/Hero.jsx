import React from 'react'
import left from '../assets/l-arrow.png'
import watch from '../assets/watch.png' // same product image you showed

function Hero() {
  return (
    <div className="relative w-[1200px] my-10 h-[330px] bg-[#212844] mx-auto rounded-2xl flex items-center justify-between overflow-hidden">

      {/* Left Arrow */}
      <button className="absolute left-[-25px] z-20 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:scale-105 transition">
        <img src={left} alt="Previous" className="w-10" />
      </button>

      {/* Text Section */}
      <div className="flex flex-col justify-center z-10 pl-16 text-white">
        <div className=" px-3 py-1 text-2xl mb-2">
          Best Deal Online on smart watches
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
          SMART WEARABLE.
        </h1>
        <p className="text-lg font-medium mt-2">UP to 80% OFF</p>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2 mt-10">
          <span className="w-6 h-[6px] bg-white rounded-full"></span>
          {[...Array(6)].map((_, i) => (
            <span key={i} className="w-[6px] h-[6px] bg-white/40 rounded-full"></span>
          ))}
        </div>
      </div>

      {/* Watch Image */}
      <div className="pr-16">
        <img
          src={watch}
          alt="Smart Watch"
          className="w-[300px] object-contain"
        />
      </div>

      {/* Right Arrow */}
      <button className="absolute right-[-25px] top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:scale-105 transition">
        <img src={left} alt="Next" className="w-10 rotate-180" />
      </button>
    </div>
  )
}

export default Hero
