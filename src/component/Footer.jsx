import React from 'react'
import { MdKeyboardArrowRight,MdOutlineEmail,MdFacebook  } from "react-icons/md";
import { FaFacebookF, FaInstagram ,FaTwitter} from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
        <div className='mt-10 xl:flex xl:gap-[100px] bg-[#212529]'>
            <div className='bg-[#212529] max-sm:py-14 max-lg:py-16 xl:py-[80px]  xl:px-[160px] max-lg:px-[80px] max-sm:px-5 max-sm:grid max-sm:grid-cols-2 flex max-sm:gap-10 max-lg:gap-[120px] xl:gap-[150px] flex-wrap '>
                <div className=' '> 
                     <h1 className='py-4 text-[#fff] '>NAVIGATION</h1>
                     <ul className='text-[12px] text-gray-500 flex flex-col gap-3 flex-wrap'>
                        <div className='flex items-center'><MdKeyboardArrowRight className='text-[#037fbd] text-[13px]'/><li> Home</li> </div>
                        <div className='flex items-center'><MdKeyboardArrowRight className='text-[#037fbd] text-[13px]'/><li> Program</li> </div>
                        <div className='flex items-center'><MdKeyboardArrowRight className='text-[#037fbd] text-[13px]'/><li> Partner</li> </div>
                        <div className='flex items-center'><MdKeyboardArrowRight className='text-[#037fbd] text-[13px]'/><li> LIVE TV</li> </div>
                        <div className='flex items-center'><MdKeyboardArrowRight className='text-[#037fbd] text-[13px]'/><li> Privacy Policy</li></div>
                     </ul>
                </div>

                <div className=''>
                      <h1 className='py-4 text-[#fff]'>PHONE LINES</h1>
                     <ul className='text-[12px] text-gray-500 flex flex-col gap-3 flex-wrap '>
                        <div className='flex items-center'><MdKeyboardArrowRight className='text-[#037fbd] text-[13px]'/><li>+254716524236</li></div>
                        <div className='flex items-center'><MdKeyboardArrowRight className='text-[#037fbd] text-[13px]'/><li>+254716524236</li></div>
                        <div className='flex items-center'><MdKeyboardArrowRight className='text-[#037fbd] text-[13px]'/><li>+254716524236</li></div>
                        <div className='flex items-center'><MdKeyboardArrowRight className='text-[#037fbd] text-[13px]'/><li>+254716524236</li></div>
                        <div className='flex items-center'><MdKeyboardArrowRight className='text-[#037fbd] text-[13px]'/><li>+254716524236</li></div>
                     </ul>
                </div>

                   <div className=''>
                      <h1 className='py-4 text-[#fff]'>PHONE LINES</h1>
                     <ul className='text-[12px] text-gray-500 flex flex-col gap-3 flex-wrap'>
                        <div className='flex items-center'><MdKeyboardArrowRight className='text-[#037fbd] text-[13px]'/><li>+254716524236</li></div>
                        <div className='flex items-center'><MdKeyboardArrowRight className='text-[#037fbd] text-[13px]'/><li>+254716524236</li></div>
                        <div className='flex items-center'><MdKeyboardArrowRight className='text-[#037fbd] text-[13px]'/><li>+254716524236</li></div>
                        <div className='flex items-center'><MdKeyboardArrowRight className='text-[#037fbd] text-[13px]'/><li>+254716524236</li></div>
                        <div className='flex items-center'><MdKeyboardArrowRight className='text-[#037fbd] text-[13px]'/><li>+254716524236</li></div>
                    </ul>   
                </div>
            </div>

            {/* contact us */}
            <div className='xl:pt-[90px] max-lg:px-[80px] max-sm:px-5'>
                <div className=''>
                    <h1 className='text-[#fff]'>CONTACT US</h1>
                    <p className='py-3 text-[#fff] xl:text-3xl font-bold'>+1 832 724 9390</p>
                    <div className='flex items-center gap-3 text-gray-500 text-[12px]'>
                        <MdOutlineEmail className='text-[#037fbd] text-[20px]'/>
                        <p className='text-[16px]'>info@healingstreams.tv</p>
                    </div>
                </div>

                {/*  footer icons */}
                <div className='flex gap-2 flex-wrap xl:py-10 max-lg:py-8 max-sm:py-5'>
                    <h1 className='xl:p-2 max-lg:p-2 max-sm:p-1 bg-amber-50 rounded-[50%] cursor-pointer hover:bg-[#037fbd] hover:text-[#fff]'><FaFacebookF className='size-3'/></h1>
                    <h1 className='xl:p-2 max-lg:p-2 max-sm:p-1 bg-amber-50 rounded-[50%] cursor-pointer hover:bg-[#037fbd] hover:text-[#fff]'><FaInstagram className='size-3'/></h1>
                    <h1 className='xl:p-2 max-lg:p-2 max-sm:p-1 bg-amber-50 rounded-[50%] cursor-pointer hover:bg-[#037fbd] hover:text-[#fff]'><FaTwitter className='size-3' /></h1>
                </div> 
            </div>
        </div>

        {/* copyright section */}
         <div className='bg-[#16181b] text-[#fff] xl:px-[160px] max-lg:px-[80px] max-sm:px-5 '>
            <div className='py-10'>
                <h1 className='text-[15px]'>HEALING STREAMS KENYA</h1>
                <p className=' py-7 text-gray-500 text-[13px] max-lg:text-center max-sm:text-center'>© Copyright 2025. All Rights Reserved.</p>
            </div>
         </div>
    </div>
  )
}
