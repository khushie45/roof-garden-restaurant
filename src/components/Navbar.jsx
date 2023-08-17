import React, { useState } from 'react'
import Logo from "../../public/logo.png"
import { HiMenu } from 'react-icons/hi'

function Navbar() {
 const [isOpen, setIsOpen] = useState(false)

 return (
   <nav className="flex items-center justify-between flex-wrap bg-white p-2 sticky top-0">
     <div className="flex items-center flex-shrink-0 lg:mr-72">
      <img src={Logo} alt="logo" className='w-28 lg:w-40'/>
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="px-3"
       >
        <HiMenu size={25} />
       </button>
     </div>
     <div
       className={`w-full block lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="font-poppins text-xl lg:flex-grow lg:justify-end">
         <a href="Menu" className="hover:text-orange-500 hover:text-2xl block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8">
          Menu
         </a>
         <a href="About Us" className="hover:text-orange-500 hover:text-2xl block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8">
          About Us
         </a>
         <a href="Our Specialities" className="hover:text-orange-500 hover:text-2xl block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8">
          Our Specialities
         </a>
         <a href="Contact Us" className="hover:text-orange-500 hover:text-2xl block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8">
          Contact Us
         </a>
       </div>
     </div>
   </nav>
 );
}
export default Navbar