import React from 'react'
import Link from 'next/link'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-white-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link className='relative macc w-24' href='#'>
              <span className='text-[#E2342D]'>Macc</span> Essentials
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2> */}
              <ul className="text-black-500 dark:text-black-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="navbar__link relative">Home</a>
                </li>
                <li>
                    <a href="#" className="navbar__link relative">Collection</a>
                </li>
                <li>
                    <a href="#" className="navbar__link relative">Products</a>
                </li>
              </ul>
            </div>
            <div>
              {/* <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2> */}
              <ul className="text-black-500 dark:text-black-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="navbar__link relative">About</a>
                </li>
                <li>
                    <a href="#" className="navbar__link relative">Contact</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="navbar__link relative">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              {/* <p className="mb-6 text-sm font-semibold text-black-900 uppercase dark:text">
                Be the first to know about our biggest and best sales. 
                We'll never send more than one email a month.
              </p> */}
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <div className='footer__icon_wrapper'>
                <BsFacebook />
              </div>
              <div className='footer__icon_wrapper'>
                <BsTwitter />
              </div>
              <div className='footer__icon_wrapper'>
                <BsInstagram />
              </div>
              <div className='footer__icon_wrapper'>
                <BsLinkedin />
              </div>
            </div>
          </div>
        </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:text-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>

  )
}

export default Footer;
