import React from 'react'
import { useContext } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { authContext } from '../../Contexts/UserContext'

const Profile = () => {
    const {user,darkMode} = useContext(authContext)
  return (
    <div className={`bg-gray-200 p-5 shadow-xl rounded-lg w-64 mx-auto my-24 ${darkMode&&'bg-gray-900 text-white'}`}>
        <div>
            <img className='rounded-full w-16 mb-6 mx-auto' src={user?.photoURL?user.photoURL:<FaUserAlt/>} alt="" />
            <h4 className=' my-3'>Name: <span className='text-lg'>{user?.displayName?user.displayName:"Not Available"}</span></h4>
            <p>Email Address: <span className='text-lg'>{user.email?user.email:'Not Available'}</span></p>

        </div>
    </div>
  )
}

export default Profile