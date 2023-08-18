import React from 'react'
import { Carousel, IconButton } from "@material-tailwind/react"
import Page1 from "../../public/Menu/Page1.jpg"
import Page2 from "../../public/Menu/Page2.jpg"
import Page3 from "../../public/Menu/Page3.jpg"
import Page4 from "../../public/Menu/Page4.jpg"
import Page5 from "../../public/Menu/Page5.jpg"
import Page6 from "../../public/Menu/Page6.jpg"
import Page7 from "../../public/Menu/Page7.jpg"
import Page8 from "../../public/Menu/Page8.jpg"
import Page9 from "../../public/Menu/Page9.jpg"
import Page10 from "../../public/Menu/Page10.jpg"
import Page11 from "../../public/Menu/Page11.jpg"
import Page12 from "../../public/Menu/Page12.jpg"
import Page13 from "../../public/Menu/Page13.jpg"
import Page14 from "../../public/Menu/Page14.jpg"
import Page15 from "../../public/Menu/Page15.jpg"
import Page16 from "../../public/Menu/Page16.jpg"
import Page17 from "../../public/Menu/Page17.jpg"
import Page18 from "../../public/Menu/Page18.jpg"
import Page19 from "../../public/Menu/Page19.jpg"

function Menu() {
  return (
    <div className='m-14 sm:m-6'>
      <h1 className='font-poppins text-5xl text-defaultColor hover:text-orange-500 sm:text-3xl'>What's In Menu</h1>
      <br />
      <p className='font-poppins text-2xl leading-10 text-defaultColor sm:text-lg'>
      Experience a culinary journey like no other – explore the delectable offerings on our menu that bring together flavors from around the world. From mouthwatering entrees to tantalizing desserts, our carefully crafted dishes promise a symphony of taste and innovation. Embark on a gastronomic adventure and discover the artistry that awaits. Check out our menu and treat your senses to a feast of exquisite flavors and culinary delight.</p>

      <div className='flex items-center justify-center my-10'>
        <Carousel transition={{ duration: 2 }} className='w-1/2 z-40 sm:w-5/6'>
          <img src={Page1} alt="image 1" className="h-full w-full" />
          <img src={Page2} alt="image 2" className="h-full w-full" />
          <img src={Page3} alt="image 3" className="h-full w-full" />
          <img src={Page4} alt="image 4" className="h-full w-full" />
          <img src={Page5} alt="image 5" className="h-full w-full" />
          <img src={Page6} alt="image 6" className="h-full w-full" />
          <img src={Page7} alt="image 7" className="h-full w-full" />
          <img src={Page8} alt="image 8" className="h-full w-full" />
          <img src={Page9} alt="image 9" className="h-full w-full" />
          <img src={Page10} alt="image 10" className="h-full w-full" />
          <img src={Page11} alt="image 11" className="h-full w-full" />
          <img src={Page12} alt="image 12" className="h-full w-full" />
          <img src={Page13} alt="image 13" className="h-full w-full" />
          <img src={Page14} alt="image 14" className="h-full w-full" />
          <img src={Page15} alt="image 15" className="h-full w-full" />
          <img src={Page16} alt="image 16" className="h-full w-full" />
          <img src={Page17} alt="image 17" className="h-full w-full" />
          <img src={Page18} alt="image 18" className="h-full w-full" />
          <img src={Page19} alt="image 19" className="h-full w-full" />
          </Carousel>
      </div>

      {/* <div className='flex justify-center m-8 sm:m-4'>
        <object data={foodMenu} type="application/pdf" className='w-3/4 h-screen sm:w-auto'>
          {/* This is alternative text }
            <p className='font-poppins text-2xl leading-10 text-defaultColor sm:text-lg'>Oops! There is some error showing the menu. Don't worry! Here is the Menu Link: <a href="https://drive.google.com/file/d/1UDaMd4f2GSAY9620OCix6SzqCmWTSBs1/view?usp=sharing" target='_blank' className='text-orange-500'>Menu</a></p>
        </object>
      </div> */}
    </div>
	);
}

export default Menu



