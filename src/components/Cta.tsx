import { ImagePlus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

function Cta() {
  return (
    <div className="container mx-auto py-20">
      <div className='flex justify-between bg-[#1f1f1f] rounded-sm'>
        <div className=" flex flex-col gap-5 justify-center items-start text-white py-10 pl-10">
          <h3 className='font-semibold text-[28px] md:text-[32px]'>Create stunning videos with AI</h3>
          <p className='max-w-xl mt-25 mb-30 text-center text-[16px] md:text-[18px] leading-normal md:text-left'>Generate videos from a prompt or an image. All without leaving Freepik or using external software!</p>
          <Button size="lg" className="bg-[#ff6a3d] text-white text-base hover:bg-[#ff6a3d]/90 transition-all duration-300 transform hover:scale-105">
            <ImagePlus /> Edit photo for free
          </Button>
        </div>
        <div>
          <Image src="https://fps.cdnpk.net/home/banner-video/gamright.webp?w=886&h=410" width={900} height={900} alt="image" />
        </div>
      </div>
    </div>
  )
}

export default Cta