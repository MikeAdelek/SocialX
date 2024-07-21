import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
      <section className="bg-[#F8F8F8]">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-[#004197] sm:text-4xl">PROVIDING SERVICES <br/>AT YOUR DOOR</h2>
              <p className="mt-4 text-gray-600 text-lg text-justify">
                <span className='text-gray-400 font-bold text-lg'>MACC Essentials</span> 
                has an important role in making supplies and services available to customers and their patients during this critical time. 
                This includes services from various domains. Our aim is to aid you. 
                As much we can.
              </p>
              <div className="mt-8">
                <button className="bg-[#E2342D] w-52 h-10 text-white text-lg font-medium rounded-none">
                  Learn more 
                </button>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <Image src={'/cover_img.png'} alt='Hero' width={300} height={300} className='object-cover rounded-lg shadow-md' />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero