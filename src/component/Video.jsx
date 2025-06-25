import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import herovideo  from '/public/hero.mp4';


export const Video = () => {
  return (
    <div className='pt-[0.5px]'>
        <div className='relative w-full h-[88vh] overflow-hidden'>
            <video autoPlay loop muted className='absolute top-0 left-0 z-[-1] transform w-full h-[88vh] object-cover'>
                <source src={herovideo} type='video/mp4' />
            </video>
            <div className='mt-[350px] xl:w-[499px] bg-[#fff]/opacity-70  z-1 max-sm:ml-7 max-lg:ml-10  xl:ml-[50px] rounded-lg shadow-lg'>
                <h1 className='max-sm:text-[30px] max-lg:text-[30px] xl:text-[35px] text-[#037fbd] text-left font-bold '>HEALING STREAMS  <br /></h1>
                <span className='text-[#037fbd] font-bold text-left max-sm:text-[25px] max-lg:text-[25px] xl:text-[35px]'>LIVE HEALING SERVICES </span>
                <p className=' max-sm:w-[310px] max-lg:w-[300px] xl:text-[25px] text-[#fff] leading-7 py-2.5'>
                    Experience the miraculous as you connect to a rich
                     array of faith-filled programs.
                </p>
                <div className='flex gap-5 mt-5'>
                    <div className='flex items-center gap-2 px-4 py-2 bg-[#037fbd] text-[#fff] cursor-pointer'>
                        <p>Visit Website </p> 
                         <FaArrowDown /></div>
                    <div className=' flex items-center gap-2 px-4 py-2 border-1 text-[#fff] cursor-pointer hover:bg-[#fff] hover:text-[black]'>
                       <p>Watch Live TV </p> 
                       <FaArrowUpRightFromSquare />
                    </div>
                </div>
            </div>
        </div>
        {/* hero bottom */}
        <div className='bg-[#037fbd] text-center text-[#fff] py-[40px] '>
            <h1 className='text-[27px] font-bold'>SPONSOR THE HEALING STREAM LIVE SERVICES  TODAY !</h1>
            <p>JOIN US TO SATURATE THE WORLD WITH DIVINE HEALTH REALITIES.</p>
            <div className=' m-auto w-[154px] flex items-center gap-2 px-4 py-2 bg-[#dc3545] cursor-pointer my-3.5'>
                <p> Sponsor Now </p> 
                <FaArrowUpRightFromSquare />
            </div>
        </div>  
    </div>
  )
}

