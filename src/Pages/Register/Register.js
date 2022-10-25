import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Contexts/UserContext';

const Register = () => {
  const {createUser} = useContext(authContext)
  const handleRegister = (e) =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email= form.email.value;
    const password = form.password.value;
    console.log(name,email,password,photo);

    createUser(email,password)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(e => console.error(e))
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
                required
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
            </div>
            <div className="form-control mt-6">
              <button className="w-full text-white py-2 rounded-xl active:scale-95 bg-orange-600">Register</button>
              <small className=" text-xs mt-2 ">Already have an account?<Link className="text-orange-600" to='/login'>Login now. </Link></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register