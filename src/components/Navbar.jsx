import React from 'react'
import Logo from "../../public/logo.png"

function Navbar() {
  return (
    <div className="flex justify-between items-center m-1 bg-white">
        <img src={Logo} alt="logo" className='w-40'/>
        <nav className="flex justify-center space-x-2">
            <a href="/Menu" className="font-poppins px-3 py-2 text-xl hover:text-orange-500">What's On Menu</a>
            <a href="/About Us" className="font-poppins px-3 py-2 text-xl hover:text-orange-500">About Us</a>
            <a href="/Our Specialities" className="font-poppins px-3 py-2 text-xl hover:text-orange-500">Our Specialities</a>
            <a href="/Contact Us" className="font-poppins px-3 py-2 text-xl hover:text-orange-500">Contact Us</a>
        </nav>
    </div>
  )
}

export default Navbar