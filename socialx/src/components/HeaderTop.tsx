import React from 'react'

const HeaderTop = () => {
  return (
          <div className='Header-Top'>
            <nav className="bg-white border-b border-gray-200 dark:bg-white-900">
              <div className="flex flex-wrap justify-end mx-auto max-w-screen-xl p-4">
                <div className="flex space-x-6 font-Montserrats rtl:space-x-reverse">
                    <a href="#" className="text-sm  text-black-500 dark:text-black hover:underline">Return</a>
                    <a href="#" className="text-sm  text-black-600 dark:text-black-500 hover:underline">Help</a>
                    <a href="#" className="text-sm  text-black-500 dark:text-black hover:underline">Register/Sign In</a>
                </div>
              </div>
            </nav>
          </div>


)
}

export default HeaderTop
