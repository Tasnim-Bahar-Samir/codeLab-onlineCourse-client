import React from 'react'
import { createContext } from 'react'
import app from '../firebase/firebase.config';
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

const auth = getAuth(app);


export  const authContext = createContext();

const createUser = (email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
}

const userLogin = (email,password) =>{
  return signInWithEmailAndPassword(auth,email,password);
}

const UserContext = ({children}) => {
    const user = {name:'samir'}
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