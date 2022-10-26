import React from 'react'
import './Home.css'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full min-h-screen banner relative backdrop-blur-sm overflow-hidden'>
      <div className=' text-white absolute left-24 bottom-52'>
        <h1 className='text-5xl'>Build Your Coding skill</h1>
        <p className='mt-3'>Welcome to CodeLab.<br></br> If you want to learn web technologies than you can consider our courses. <br /> We are mainly focusing to web languages.Because the demand of this field is increasing day by day.</p>
        <Link to='/courses'>
          <button className='flex items-center gap-1 px-4 bg-orange-700 py-2 rounded-md mt-4'>Our Courses <FaArrowRight/></button>
        </Link>
      </div>
    </div>
  )
}

export default Home