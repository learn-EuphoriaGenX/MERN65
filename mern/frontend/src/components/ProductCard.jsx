import React from 'react'

function ProductCard({ off, thumbnail, name, price, disPrice, save }) {
  return (
    <div className="relative w-[230px] bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center cursor-pointer">
      
      {/* Discount Badge */}
      {off && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-[2px] rounded">
          {off} OFF
        </span>
      )}

      {/* Product Image */}
      <div className="w-full h-[180px] flex items-center justify-center">
        <img
          src={thumbnail}
          alt={name}
          className="max-h-[160px] object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Name */}
      <h3 className="mt-3 text-sm font-semibold text-gray-800 text-center line-clamp-2">
        {name.split(" ").slice(0, 2).join(" ")}...
      </h3>

      {/* Pricing Section */}
      <div className="mt-2 text-center">
        <p className="text-lg font-bold text-blue-600">₹{disPrice}</p>
        <div className="flex justify-center items-center gap-2 text-sm">
          <span className="text-gray-400 line-through">₹{price}</span>
          <span className="text-green-600 font-medium">Save ₹{save}</span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-semibold transition">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
