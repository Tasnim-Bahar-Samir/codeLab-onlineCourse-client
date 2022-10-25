import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.webp'

const Header = () => {
  return (
    <div className="navbar bg-gray-200 px-8">
        <div className="flex-1">
            <Link to='/' className="normal-case text-3xl font-mono flex items-center">
                <img className='text-primary w-10 rounded-sm' src={logo} alt="" />
                <p>Code<span className=' text-orange-600'>Lab</span></p>
            </Link>
        </div>
        <div className="flex gap-4 lg:gap-6 pr-5 text-lg">
            <NavLink className='hover:text-orange-600' to='/courses'>Courses</NavLink>
            <NavLink className='hover:text-orange-600' to='/blog'>FAQ</NavLink>
            <NavLink className='hover:text-orange-600'  to='/courses'>Blog</NavLink>
            <NavLink className='px-4 py-1 rounded text-white bg-orange-600' to='/blog'>Login</NavLink>
        </div>
    </div>
  )
}

export default Header