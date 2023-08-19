import React from 'react'
import Photo from '../../public/home.jpg'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Review1 from '../../public/Reviews/1.jpg'
import Review2 from '../../public/Reviews/2.jpg'
import Review3 from '../../public/Reviews/3.jpg'
import Review4 from '../../public/Reviews/4.jpg'
import Review5 from '../../public/Reviews/5.jpg'
import ReactPlayer from 'react-player'
import V1 from '../../public/Videos/1.mp4'
import V2 from '../../public/Videos/2.mp4'
import V3 from '../../public/Videos/3.mp4'
import V4 from '../../public/Videos/4.mp4'
import V5 from '../../public/Videos/5.mp4'

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    // pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  return (
    <div>
        <img src={Photo} alt="image" className='w-full object-contain'/>
        <br />

        <div className='m-14 sm:m-6'>
          {/* <h1 className='font-poppins text-3xl ml-7 sm:ml-2 text-defaultColor hover:text-orange-500 sm:text-xl'>Reviews</h1> */}

        <div className='m-6 sm:mx-10 sm:my-4'>
          <Slider {...settings}>
            <div>
              <img src={Review1} alt="image 1" className='w-auto rounded-2xl p-2 sm:w-64' />
            </div>
            <div>
              <img src={Review2} alt="image 2" className='w-auto rounded-2xl p-2 sm:w-64' />
            </div>
            <div>
              <img src={Review3} alt="image 3" className='w-auto rounded-2xl p-2 sm:w-64' />
            </div>
            <div>
              <img src={Review4} alt="image 4" className='w-auto rounded-2xl p-2 sm:w-64' />
            </div>
            <div>
              <img src={Review5} alt="image 5" className='w-auto rounded-2xl p-2 sm:w-64' />
            </div>
          </Slider>
        </div>
        </div>
      <br />
      <div className="border-2 border-defaultColor"></div>
      
      <div className='flex flex-col items-center bg-defaultColor'>
        <div className='m-6 p-5 px-48 bg-white sm:px-5'>
          <ReactPlayer url={V1} controls width="100%"/>
        </div>
        <div className='p-5 px-48 bg-white sm:px-5'>
          <ReactPlayer url={V2} controls width="100%"/>
        </div>
        <div className='m-6 p-5 px-48 bg-white sm:px-5'>
          <ReactPlayer url={V3} controls width="100%"/>
        </div>
        <div className='p-5 px-48 bg-white sm:px-5'>
          <ReactPlayer url={V4} controls width="100%"/>
        </div>
        <div className='m-6 p-5 px-48 bg-white sm:px-5'>
          <ReactPlayer url={V5} controls width="100%"/>
        </div>
      </div>
    </div>
  )
}

export default Home