import React from 'react'
import { createContext } from 'react'

export  const authContext = createContext();
const UserContext = ({children}) => {
    const user = {name:'samir'}
    const userInfo ={user}
  return (
    <authContext.Provider value={userInfo}>
      {
        children
      }
    </authContext.Provider>
  )
}

export default UserContext