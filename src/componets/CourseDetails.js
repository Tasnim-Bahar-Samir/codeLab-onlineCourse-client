import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import {FaStar,FaCrown} from 'react-icons/fa'

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const {img,description,rating,name,instructor,id} = courseDetails;
  return (
    <div className='mt-8 border mx-32 rounded-xl'>
        <div className=" bg-base-100 shadow-xl">
            <h2 className='text-3xl p-10'>{name}</h2>
            <figure className="px-10 pt-10 ">
                <img src={img} alt="Shoes" className="rounded-xl md:w-72" />
            </figure>
            <div className="card-body ">
                <p className='flex items-center gap-1'><FaStar className=' text-amber-400'/> {rating}</p>
                <p>{description}</p>
                <div className='my-5'>
                    <h3 className='text-3xl'>Instructor Details:</h3>
                    <div className='flex items-center gap-1 mt-3'>
                        <img className='w-10 rounded-full' src={instructor.img} alt="" />
                        <div>
                            <p className='font-semibold'>Name:{instructor.name}</p>
                            <p>({instructor.education})</p>
                        </div>
                    </div>
                </div>
                <div className="card-actions">
                    <Link to={`/premium/${id}`}>
                        <button className="text-white mt-4 py-2 px-4 rounded-xl active:scale-95 bg-orange-600 flex items-center">Get Premium Access  <FaCrown className='ml-1'/></button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseDetails