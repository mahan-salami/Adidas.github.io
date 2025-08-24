import React from 'react'
import P9 from '../assets/images/CR7v3-fotor-bg-remover-202508235517.png'
const Banner2 = () => {
  return (
    <>
        <div className="w-full flex justify-center items-center py-10  mt-40">
          <div className="bg-yellow-700 w-[90%] md:h-[250px] md:w-[90%] rounded-2xl flex flex-col md:flex-row items-center justify-between p-6 md:p-10 relative ">
            
            {/* متن سمت چپ */}
            <div className="text-white text-center md:text-left md:w-1/3">
              <p className="text-sm font-light">30% OFF</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">ALNASSR<br/>2025/2026 KIT</h1>
              <p className="text-sm mt-2">14 Jan to 28 Jan</p>
            </div>
    
            {/* ساعت (تصویر) */}
            <div className="flex justify-center md:w-1/3 my-6 md:my-0 lg:h-auto">
              <img 
                src={P9}
                alt="Smart Watch" 
                className="w-48 md:w-90 drop-shadow-xl mb-46"
              />
            </div>
    
            {/* متن سمت راست */}
            <div className="text-white text-center md:text-right md:w-1/3">
              <h2 className="text-lg">Buy Now</h2>
              <h1 className="text-3xl md:text-4xl font-bold">CR7 KIT</h1>
              <p className="text-sm mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              </p>
              <button className="drop-shadow-[0_1px_0_rgba(0,0,0,0.25) mt-4 bg-yellow-300 text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition hover:text-black delay-150 duration-300">
                Shop
              </button>
            </div>
          </div>
        </div>
    
    
    </>
  )
}

export default Banner2