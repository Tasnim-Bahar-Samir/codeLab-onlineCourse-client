import React, { useEffect } from 'react'
import { createContext } from 'react'
import app from '../firebase/firebase.config';
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup} from 'firebase/auth'
import { useState } from 'react';


const auth = getAuth(app)
export const authContext = createContext();


const UserContext = ({children}) => {
  const[user,setUser] = useState(null)
  const [loader,setLoader] = useState(true)

  const createUser = (email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  
  const userLogin = (email,password) =>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password);
  }

  const googleSignIn = (provider) =>{
    return signInWithPopup(auth,provider)
  }

  const gitHubSignIn = (provider)=>{
    return signInWithPopup(auth,provider)
  }

  const userSignOut = ()=>{
    setLoader(true)
    return signOut(auth)
  }


  const updateUserProfile = (profile)=>{
    return updateProfile(auth.currentUser,profile)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
      setLoader(false)
    })
  
    return () => {
      unsubscribe();
    }
  }, [])
  

    const userInfo ={user,createUser,userLogin,userSignOut,loader,updateUserProfile,googleSignIn,gitHubSignIn}
  return (
    <authContext.Provider value={userInfo}>
      {
        children
      }
    </authContext.Provider>
  )
}

export default UserContext