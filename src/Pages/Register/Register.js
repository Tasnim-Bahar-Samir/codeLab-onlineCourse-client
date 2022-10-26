import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Contexts/UserContext';
import SignInPopup from '../../Shared/SignInPopup';


const Register = () => {
  const [error,setError] = useState('')
  const {createUser,updateUserProfile} = useContext(authContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const handleRegister = (e) =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email= form.email.value;
    const password = form.password.value;
    console.log(name,email,password,photo);

    if(password.length<6){
      return setError('Password should be more than 6 digits.')
    }
    createUser(email,password)
    .then(result => {
      const user = result.user;
      console.log(user)
      handleUpdateUser(name,photo)
      navigate(from,{replace:true})
      toast.success('User Registered Successfully')
    })
    .catch(e => console.error(e))
  }
  const handleUpdateUser =(name,photo) =>{
    const profile = {displayName:name,photoURL:photo}
    updateUserProfile(profile)
    .then(()=>{})
    .catch((e)=>console.error(e))
  }
  return (
    <div className="md:w-[500px]  mx-auto min-h-screen w-72">
      <div className="hero-content flex-col">
        <div className=" lg:text-left">
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <h3 className="text-2xl mb-2">Register</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="full name"
                className="input input-bordered focus:border-orange-600 focus:border-2 focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered focus:border-2  focus:border-orange-600 focus:outline-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered focus:border-2  focus:border-orange-600 focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered focus:border-2  focus:border-orange-600 focus:outline-none"
                required
              />
              <p className='text-red-600'>{error}</p>
            </div>
            <div className="form-control mt-6">
              <button className="w-full text-white py-2 rounded-xl active:scale-95 bg-orange-600">Register</button>
              <small className=" text-xs mt-2 ">Already have an account?<Link className="text-orange-600 text-sm" to='/login'>Login now. </Link></small>
            </div>
            <SignInPopup/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register