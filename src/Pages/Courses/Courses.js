import React from 'react'
import { useContext } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Course from '../../componets/Course'
import { authContext } from '../../Contexts/UserContext'

const Courses = () => {
  const{darkMode} = useContext(authContext)
  const courses = useLoaderData()
  return (
    <div className='courses-container grid grid-flow-col lg:pr-10 pr-5 gap-4 relative'>
      <div className={`title col-span-4 py-2 shadow-2xl md:pl-10 pl-5 sticky top-0 pt-10 h-screen bg-gray-200 ${darkMode && ' bg-gray-900 text-white'}`}>
        <h2 className='text-2xl font-bold mb-10'>All Courses: {courses.length}</h2>
        {
          courses.map(course =><Link to={`/course/${course.id}`} key={course.id}><p className=' mb-9 cursor-pointer hover:text-orange-600 font-semibold'>{course.name}</p></Link>)
        }
      </div>
      <div className='courses col-span-8 mt-16'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
          {
            courses.map(course => <Course key={course.id} course={course}></Course>)
          }
        </div>
      </div>
    </div>
  )
}

export default Courses