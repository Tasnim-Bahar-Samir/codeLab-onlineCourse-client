import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Course from '../../componets/Course'

const Courses = () => {
  const courses = useLoaderData()
  return (
    <div className='courses-container grid grid-flow-col lg:px-10 mt-16 gap-3'>
      <div className='title col-span-4'>
        <h2 className='text-2xl font-bold mb-4'>All Courses: {courses.length}</h2>
        {
          courses.map(course =><Link key={course.id}><p className='mb-3 cursor-pointer underline hover:text-orange-600 font-semibold'>{course.name}</p></Link>)
        }
      </div>
      <div className='courses col-span-8'>
        <div className='grid grid-cols-2 gap-4'>
          {
            courses.map(course => <Course key={course.id} course={course}></Course>)
          }
        </div>
      </div>
    </div>
  )
}

export default Courses