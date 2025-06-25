import React from 'react'
import { FaSearch } from "react-icons/fa"
import logoimage from '../assets/logo.png'
import { BiMenu } from "react-icons/bi";
import { MdOutlineClose } from 'react-icons/md';
import { useState } from 'react';


export const Header = () => {

    const [isOpen, setIsOpen] = useState(false); 

    // const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    // };
  return (
    <div className=' w-[100%]'>
        <header className=' flex justify-between items-center max-sm:px-4 max-lg:px-5 xl:px-[60px] max-sm:py-8 max-lg:py-10 xl:py-6 bg-[#212529] text-[#ffffff]'>
            <div className='flex items-center text-[15px]'>
                <img src={logoimage} className='size-6' alt="" />
                HEALING <span className='text-[gray]'>STREAMS</span>
            </div>
            <nav className='flex'>
                <div className='flex gap-5 list-none ml-[-170px] max-sm:hidden max-lg:hidden'>
                      <li>LIVE TV</li>
                      <li>Programs</li>
                      <li>TV Schedule</li>
                      <li>Subcribe Now</li>
                </div>
                <div className='flex items-center max-sm:gap-2 max-lg:gap-4'> 
                     <p className='text-[#037fbd]'><FaSearch className='mt-2 ml-[30px] w-4'/> </p>
                    <div
                    onClick={()=>setIsOpen(!isOpen)}
                     className='xl:hidden max-sm:block  px-3 py-2.5 bg-[#037fbd]'>
                        <BiMenu className=' text-[30px] text-[#fff] cursor-pointer max-sm:block  max-sm:size-5 rounded-[40px]' />
                    </div>
                </div> 
            </nav>
            <div className='max-sm:hidden max-lg:hidden'>
                <button className='px-10 py-4 bg-[#dc3545] text-[14px] cursor-pointer'>GIVE NOW</button>
            </div>
        </header>
        {isOpen && (
            <div className='absolute top-[100px] left-0 w-full bg-[#212529] text-[#ffffff] z-10 transition-all duration-100 ease-in-out'>
                <ul className='flex flex-col items-left py-4  px-5 '>
                    <li className='py-2 border-b-[0.5px] border-gray-500'>LIVE TV</li>
                    <li className='py-2 border-b-[0.5px] border-gray-500'>Programs</li>
                    <li className='py-2 border-b-[0.5px] border-gray-500'>TV Schedule</li>
                    <li className='py-2'>Subscribe Now</li>
                </ul>
            </div>
        )}
    </div>
  )
}
