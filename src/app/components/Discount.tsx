'use client'
import React from 'react'
import LottieAnimation from './LottieAnimation';

export default function Discount() {
  return (
    <section>
      <div className='container bg-orange-400 mx-auto pb-5'>
         <div className='flex flex-col justify-between md:flex-row '>
           {/* Left */}
           <div className='basis-[50%] bg-pink flex justify-center items-center'>
            <div className='bg-orange-600 h-[250px] rounded-md cursor-grab'>
            <LottieAnimation />
            </div>
           </div>{/* End Left */}
            {/* Right */}
            <div className='basis-[50%] py-3 px-6 flex flex-col items-start justify-center'>   
               <h1 className="text-5xl font-bold text-stone-100 mb-3 text-center">Up To 50% Discount</h1>
               <p className="text-stone-700 mb-3 text-[18px]">For a limited time only, enjoy incredible savings of up to 50% off on a wide selection of books. Whether youre into thrilling novels, self-help guides, or educational resources, now is the perfect time to add more books to your collection without breaking the bank!</p>
             
            <button className="bg-orange-600 text-stone-200 font-semibold shadow-xl px-4 py-2 rounded-sm hover:animate-bounce transition duration-500">
         Shop Now
         </button>

            </div>{/* End Right */}
         </div>
      </div>
    </section>
  )
}