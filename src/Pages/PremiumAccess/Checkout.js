import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Checkout = () => {
    const data = useLoaderData()
  return (
    <div>
        <h2 className='text-center py-4 text-3xl'>{data.name}</h2>
    </div>
  )
}

export default Checkout