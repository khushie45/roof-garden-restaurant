import React, { useState } from 'react'
import Logo from "../../public/logo.png"
import { HiMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'

function Navbar() {
 const [isOpen, setIsOpen] = useState(false)

 return (
   <nav className="flex items-center justify-between flex-wrap bg-white p-2 sticky top-0 shadow-lg text-defaultColor">
     <div className="flex items-center flex-shrink-0">
      <Link to="/">
        <img src={Logo} alt="logo" className='w-28 lg:w-40'/>
      </Link>
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
         <Link to="/Menu" className="hover:text-orange-500 hover:text-2xl block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8">
          Menu
         </Link>
         <Link to="/About" className="hover:text-orange-500 hover:text-2xl block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8">
          About Us
         </Link>
         <Link to="/Specialities" className="hover:text-orange-500 hover:text-2xl block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8">
          Our Specialities
         </Link>
         <Link to="/Contact" className="hover:text-orange-500 hover:text-2xl block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-8">
          Contact Us
         </Link>
       </div>
     </div>
   </nav>
 );
}
export default Navbar