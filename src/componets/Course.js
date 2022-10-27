import React from 'react'
import { useContext } from 'react';
import {AiOutlineDoubleRight} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { authContext } from '../Contexts/UserContext';
const Course = ({course}) => {
    const{darkMode} = useContext(authContext);
    
    const {img,id,name,duration,price} = course;
  return (
    <div className="card bg-base-100 shadow-xl hover:translate-y-[-5px] transition-all ease-in-out cursor-pointer">
        <figure className='bg-gray-200 p-4'><img className='md:h-52 h-40' src={img} alt="img" /></figure>
        <div className={`card-body ${darkMode && 'bg-gray-900'}`}>
            <h2 className="card-title">{name}</h2>
            <p>Duration: <span className='font-bold'>{duration}</span></p>
            <p>Price: <span className='text-orange-600'>${price}</span></p>
            <div className="card-actions justify-end">
                <Link to={`/course/${id}`}>
                    <button className="text-white py-2 px-4 rounded-xl active:scale-95 bg-orange-600 flex items-center">Details    <AiOutlineDoubleRight/></button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Course