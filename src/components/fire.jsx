import React from 'react'
import pictrn from '../assets/pic13.webp';


export const Fire = () => {
  return (
    <>
    <div className='relative bottom-20 max-w-[1100px] mx-auto flex gap-10 border-2 border-[#513121] rounded-xl border-b-8'> 
    {/* Image Box */}
      <div className='border-r-2 border-[#512131]'>
        <img src={pictrn} className='h-[33rem]'/>
      </div>
      {/* Content Box */}
      <div className='text-[#513121]  pt-24 leading-7 pl-10'>
        <h3 className='text-5xl'>Rip - Pour - Fire it</h3>
        <h3 className='text-5xl pt-4'>up 🌶</h3>
        <p className='pt-4 '>Our meal starters are pantry shortcuts for a specific</p>
        <p>Asian dish. They combine all the sauces, aromatics,</p>
        <p>and seasonings you need.</p>
        <button className='border bg-[#910f37] text-white rounded-3xl px-6 py-3 mt-9'>Shop Starters</button>
      </div>
    </div>
    </>
  )
}
