import React, { useEffect } from 'react'
import { createContext } from 'react'
import app from '../firebase/firebase.config';
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { useState } from 'react';


const auth = getAuth(app)
export const authContext = createContext();

const UserContext = ({children}) => {
  const[user,setUser] = useState(null)

  const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  
  const userLogin = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
    })
  
    return () => {
      unsubscribe();
    }
  }, [])
  

    const userInfo ={user,createUser,userLogin}
  return (
    <authContext.Provider value={userInfo}>
      {
        children
      }
    </authContext.Provider>
  )
}

export default UserContext