import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { authContext } from "../../Contexts/UserContext";


const Login = () => {
  const [error,setError] = useState('')
  const {userLogin} = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from.pathname || '/';
    const handleLogin = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        userLogin(email,password)
        .then(result => {
          const user = result.user;
          console.log(user);
          navigate(from,{replace:true})
        })
        .catch(err => {
          console.error(err)
          setError("Invalid Email or Password!")
        })
    }
  return (
    <div className="md:w-[500px]  mx-auto min-h-screen w-72">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h3 className="text-2xl mb-2">Login</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered focus:border-orange-600 focus:border-2 focus:outline-none"
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
              {
                error&&<p className="text-red-700">{error}</p>
              }
              <label className="label">
                {/* <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a> */}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="w-full text-white py-2 rounded-xl active:scale-95 bg-orange-600">Login</button>
              <small className=" text-xs mt-2 ">New to this website?<Link className="text-orange-600 text-sm" to='/register'>Create an account.</Link></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
