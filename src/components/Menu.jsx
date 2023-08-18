import React from 'react'
import foodMenu from "../../public/menu.pdf"

function Menu() {
  return (
    <div className='m-14 sm:m-6'>
      <h1 className='font-poppins text-5xl text-defaultColor hover:text-orange-500 sm:text-3xl'>What's In Menu</h1>
      <br />
      <p className='font-poppins text-2xl leading-10 text-defaultColor sm:text-lg'>
      Experience a culinary journey like no other – explore the delectable offerings on our menu that bring together flavors from around the world. From mouthwatering entrees to tantalizing desserts, our carefully crafted dishes promise a symphony of taste and innovation. Embark on a gastronomic adventure and discover the artistry that awaits. Check out our menu and treat your senses to a feast of exquisite flavors and culinary delight.</p>

      <div className='flex justify-center m-8 sm:m-4'>
        <object data={foodMenu} type="application/pdf" className='w-3/4 h-screen sm:w-auto'>
          {/* This is alternative text */}
            <p className='font-poppins text-2xl leading-10 text-defaultColor sm:text-lg'>Oops! There is some error showing the menu. Don't worry! Here is the Menu Link: <a href="https://drive.google.com/file/d/1UDaMd4f2GSAY9620OCix6SzqCmWTSBs1/view?usp=sharing" target='_blank' className='text-orange-500'>Menu</a></p>
        </object>
      </div>
    </div>
	);
}

export default Menu



