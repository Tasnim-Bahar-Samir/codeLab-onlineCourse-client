import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import React from 'react'
import { useContext } from 'react'
import { FaGithub } from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { useLocation, useNavigate } from 'react-router-dom'
import { authContext } from '../Contexts/UserContext'


const SignInPopup = () => {
    const location = useLocation()
    const from = location.state?.from.pathname || '/';
    const navigate = useNavigate()
    const {googleSignIn,gitHubSignIn} = useContext(authContext);
    const googleProvider = new GoogleAuthProvider()
    const GithubProvider = new GithubAuthProvider()
    const handleGoogleSignIn = ()=>{
        googleSignIn(googleProvider)
        .then(()=>{
            navigate(from, {replacea:true})
        })
        .catch(() => {})
    }
    const handlGithubSignIn = ()=>{
      gitHubSignIn(GithubProvider)
      .then(()=>{
        navigate(from, {replace:true})
      })
      .catch(()=>{})
    }
  return (
    <div className='mt-4'>
        <button onClick={handleGoogleSignIn} className='flex justify-center gap-4 items-center px-3 border-2 w-full py-2 border-orange-600 rounded-xl mb-1'><FcGoogle/> Login With Google</button>
        <button onClick={handlGithubSignIn}  className='flex justify-center gap-5 items-center px-3 border-2 w-full py-2 border-orange-600 rounded-xl mb-1'><FaGithub/> Login With Github</button>
    </div>
  )
}

export default SignInPopup