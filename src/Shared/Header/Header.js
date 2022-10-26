import React from 'react'
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.webp'
import { authContext } from '../../Contexts/UserContext';
import './Header.css'
import { FaToggleOff, FaToggleOn, FaUserAlt } from 'react-icons/fa';
const Header = () => {
    const {user,userSignOut,darkMode,setDarkMode} = useContext(authContext)
  return (
    <div className="navbar bg-gray-200 px-8 shadow-xl mb-2 py-5">
        <div className="flex-1">
            <Link to='/' className="normal-case text-3xl font-mono flex items-center">
                <img className='text-primary w-10 rounded-sm' src={logo} alt="" />
                <p>Code<span className=' text-orange-600'>Lab</span></p>
            </Link>
        </div>
        <div className="flex gap-4 lg:gap-6 pr-5 text-md">
            <NavLink className='hover:text-orange-600' to='/courses'>Courses</NavLink>
            <NavLink className='hover:text-orange-600' to='/faq'>FAQ</NavLink>
            <NavLink className='hover:text-orange-600'  to='/blog'>Blog</NavLink>
            {
                user?.uid ?
                    <>
                       <div className="tooltip tooltip-bottom" data-tip={user.displayName?user.displayName:'User Name'}>
                        <Link >{user?.photoURL? 
                        <img className='w-6 rounded-full' src={user.photoURL} alt="" />
                        :
                        <FaUserAlt/>}</Link>
                       </div>
                        <button onClick={userSignOut} className='px-3 rounded-md border-2 border-orange-600'>Logout</button>
                    </>
                :
                    <Link className='px-4 py-1 rounded text-white bg-orange-600' to='/login'>Login</Link>
            }
            <button onClick={()=>setDarkMode(!darkMode)} className='flex items-center gap-1'>Dark Mode{darkMode?<FaToggleOn className='text-xl'/>:<FaToggleOff className='text-xl'/>}</button>
            
        </div>
    </div>
  )
}

export default Header