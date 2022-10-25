import React from 'react'

const Course = ({course}) => {
  return (
    <div className="card bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
                <button className="text-white py-2 rounded-xl active:scale-95 bg-orange-600 ">Buy Now</button>
            </div>
        </div>
    </div>
  )
}

export default Course