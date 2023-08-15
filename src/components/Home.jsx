import React from 'react'
import Photo from '../../public/home.jpg'

function Home() {
  return (
    <div>
        <img src={Photo} alt="image" className='w-full object-contain'/>
    </div>
  )
}

export default Home