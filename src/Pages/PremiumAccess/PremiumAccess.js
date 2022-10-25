import React from 'react'
import { useLoaderData } from 'react-router-dom'

const PremiumAccess = () => {
    const data = useLoaderData()
  return (
    <div>
        <h2 className='text-center'>{data.name}</h2>
    </div>
  )
}

export default PremiumAccess