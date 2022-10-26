import React from 'react'
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.webp'
import { authContext } from '../../Contexts/UserContext';
import './Header.css'
import {  FaToggleOff, FaToggleOn, FaUserAlt } from 'react-icons/fa';
import {  GiHamburgerMenu } from 'react-icons/gi';
import {  ImCross } from 'react-icons/im';
import { useState } from 'react';
const Header = () => {
    const {user,userSignOut,darkMode,setDarkMode} = useContext(authContext)
    const [open,setOpen] = useState(false)
  return (
    <div className=" flex items-center justify-between bg-gray-200 px-2 md:px-8 shadow-xl mb-2 md:py-5 py-2">
        <div className="">
            <Link to='/' className="normal-case text-xl md:text-3xl font-mono flex items-center">
                <img className='text-primary w-7 md:w-10 rounded-sm' src={logo} alt="" />
                <p>Code<span className=' text-orange-600'>Lab</span></p>
            </Link>
        </div>
        <div className="flex gap-4 lg:gap-6 pr-5 text-md">
            <div className={` z-10 w-full bg-gray-200 flex flex-col items-center md:flex-row gap-4 lg:gap-6 absolute md:static transition-all ease-in-out left-0 ${open?'top-12 ':'top-[-150px]'}`}>
            <NavLink className='hover:text-orange-600' to='/courses'>Courses</NavLink>
            <NavLink className='hover:text-orange-600' to='/faq'>FAQ</NavLink>
            <NavLink className='hover:text-orange-600'  to='/blog'>Blog</NavLink>
            <button onClick={()=>setDarkMode(!darkMode)} className='flex items-center gap-1'>Dark Mode{darkMode?<FaToggleOn className='text-xl'/>:<FaToggleOff className='text-xl'/>}</button>
            </div>
            {
                open?
                <ImCross onClick={()=>setOpen(!open)} className='h-4 w-4 md:hidden'/>
                :
                <GiHamburgerMenu onClick={()=>setOpen(!open)} className='h-6 w-6 md:hidden'/>
            }
            {
                user?.uid ?
                    <>
                       <div className="tooltip tooltip-bottom" data-tip={user.displayName?user.displayName:'User Name'}>
                        <Link >{user?.photoURL? 
                        <img className='w-6 rounded-full' src={user.photoURL} alt="" />
                        :
                        <FaUserAlt/>}</Link>
                       </div>
                        <button onClick={userSignOut} className='px-2 md:px-3 rounded-md border-2 border-orange-600'>Logout</button>
                    </>
                :
                    <Link className='px-2 md:px-4 py-1 rounded text-white bg-orange-600' to='/login'>Login</Link>
            }
            
        </div>
    </div>
  )
}

export default Header