import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import Link from 'next/link' 

const Navbar = () => {
  return (
    <div className='Header-Main hidden lg:block'>
      <nav className="bg-white-50  border-b border-gray-200 dark:bg-white-700">
        <div className="max-w-screen-xl px-4 py-4 mx-auto">
          <div className="flex items-center justify-between mx-auto py-2">
            <BsSearch />
            <Link className='navbar__link relative' href='#'>
                Shop
            </Link>
            <Link className='navbar__link relative' href='#'>
              Essentials
            </Link>
            <Link className='navbar__link relative macc w-48' href='#'>
              <span className='text-[#E2342D]'>Macc</span> Essentials
            </Link>
            <Link className='navbar__link relative' href='#'>
              Best Sellers
            </Link>
            <Link className='navbar__link relative' href='#'>
              About Us
            </Link>

            <div className='hidden lg:flex gap-4 text-gray-500 text-[30px]'>
              <BiUser />
              <div className='relative'>
                <IoMdNotificationsOutline />
                <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-x-1'>0</div>
              </div>
              <div className='relative'>
                <HiOutlineShoppingBag />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
