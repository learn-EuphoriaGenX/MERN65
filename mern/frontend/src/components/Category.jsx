import React from 'react'
import left from '../assets/l-arrow.png';

import decor from '../assets/decor.png'
import mobile from '../assets/mobile.png'
import neck from '../assets/neck.png'
import sofa from '../assets/sofa.png'
import wash from '../assets/wash.png'
import watch from '../assets/watch.png'
import cream from '../assets/cream.png'


function Category() {

  let cat = [
    {
      name: "Mobile",
      image: mobile
    },
    {
      name: "Cosmetics",
      image: cream
    },
    {
      name: "Electronics",
      image: wash
    },
    {
      name: "Furniture",
      image: sofa
    },
    {
      name: "Watch",
      image: watch
    },
    {
      name: "Decor",
      image: decor
    },
    {
      name: "Accesories",
      image: neck
    },
  ]

  return (
    <div className='p-4'>
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <div className="border-b-2 border-cyan-500 font-semibold text-xl">
          Shop from <span className='font-bold text-blue-500'>Top Categories</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-cyan-500 font-medium">View All</span>
          <img src={left} alt="arrow" className="rotate-180 w-4 h-4" />
        </div>
      </div>

      <div className='flex items-center justify-center gap-20'>
        {
          cat.map((item, idx) => (
            <div key={idx} className='flex flex-col items-center gap-3'>
              <img src={item.image} alt="" className='w-32 h-32 object-contain bg-[#F5F5F5] rounded-full' />
              <span className='text-gray-900 font-bold'>{item.name}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category