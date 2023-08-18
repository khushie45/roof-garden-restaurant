import React from 'react'
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiGooglemaps } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <div className='m-14 sm:m-6 font-poppins'>
      <h1 className='text-5xl text-defaultColor hover:text-orange-500 sm:text-3xl'>Contact Us</h1>
      <div className='m-2 mt-6'>
        <p className='font-poppins text-2xl leading-10 text-defaultColor sm:text-lg'>Stay connected with us on various social media platforms to get the latest updates and news. You can also reach out to us via email at <strong>roofgardenindia@gmail.com</strong> or give us a call at <strong>+91-9106259416</strong> for any inquiries or assistance.</p>
        <br />

        <p className='font-poppins text-2xl leading-10 text-defaultColor sm:text-lg'><strong>Address:</strong> 3rd floor, A block, Shaan AV Fortune, near new Rajmarg Shaan Cinema, Gujarat 388001</p>
        <br />

        <div className='flex'>
          <a href="https://www.instagram.com/roofgardenindia/" target="_blank" className='mr-5 text-defaultColor hover:text-orange-500'><SiInstagram size={40} /></a>

          <a href="https://www.facebook.com/Roofgarden.inida" target="_blank" className='mr-5 text-defaultColor hover:text-orange-500'><SiFacebook size={40} /></a>

          <a href="https://www.google.com/maps/place/ROOF+GARDEN+RESTAURANT/@22.5437355,72.9343564,17z/data=!3m1!4b1!4m6!3m5!1s0x395e4dcddcd0d32f:0x76a1287131e9086f!8m2!3d22.5437306!4d72.9369313!16s%2Fg%2F11spd7jnb6?entry=ttu" target="_blank" className='mr-5 text-defaultColor hover:text-orange-500'><SiGooglemaps size={40} /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact