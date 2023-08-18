import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Page1 from "../../public/Specialities/Page1.jpg"
import Page2 from "../../public/Specialities/Page2.jpg"
import Page3 from "../../public/Specialities/Page3.jpg"
import Page4 from "../../public/Specialities/Page4.jpg"
import Page5 from "../../public/Specialities/Page5.jpg"
import Page6 from "../../public/Specialities/Page6.jpg"
import Page7 from "../../public/Specialities/Page7.jpg"
import Page8 from "../../public/Specialities/Page8.jpg"
import Page9 from "../../public/Specialities/Page9.jpg"
import Page10 from "../../public/Specialities/Page10.jpg"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#773820" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#773820" }}
      onClick={onClick}
    />
  );
}


function Specialities() {
  var settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className='m-14 sm:m-6'>
      <h1 className='font-poppins text-5xl text-defaultColor hover:text-orange-500 sm:text-3xl'>Our Specialities</h1>
      <div className='m-2 mt-6'>
      <Slider {...settings}>
        <div>
          <img src={Page1} alt="image 1" className='w-96 p-2' />
        </div>
        <div>
          <img src={Page2} alt="image 2" className='w-96 p-2' />
        </div>
        <div>
          <img src={Page3} alt="image 3" className='w-96 p-2' />
        </div>
        <div>
          <img src={Page4} alt="image 4" className='w-96 p-2' />
        </div>
        <div>
          <img src={Page5} alt="image 5" className='w-96 p-2' />
        </div>
        <div>
          <img src={Page6} alt="image 6" className='w-96 p-2' />
        </div>
        <div>
          <img src={Page7} alt="image 7" className='w-96 p-2' />
        </div>
        <div>
          <img src={Page8} alt="image 8" className='w-96 p-2' />
        </div>
        <div>
          <img src={Page9} alt="image 9" className='w-96 p-2' />
        </div>
        <div>
          <img src={Page10} alt="image 10" className='w-96 p-2' />
        </div>
      </Slider>
      </div>
    </div>
  )
}

export default Specialities