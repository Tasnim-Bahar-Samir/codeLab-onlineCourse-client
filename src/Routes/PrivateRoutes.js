import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Contexts/UserContext'

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user,loader} = useContext(authContext);
    if(loader){
        return <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
    }

    if(user?.uid){
        return children;
    }
  return <Navigate to='/login' state={{from:location}} replace></Navigate>
}

export default PrivateRoutes