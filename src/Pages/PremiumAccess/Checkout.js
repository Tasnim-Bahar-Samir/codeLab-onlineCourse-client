import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Checkout = () => {
  const courseData = useLoaderData();
  const [data,setData] = useState(courseData)
  
  
  
  return (
    <div className="bg-gray-200 p-5 shadow-md w-64 mx-auto my-24">
      {data.name ? 
        <div className="">
          <img className="w-20 mb-3" src={data.img} alt="" />
          <div>
            <h2 className="text-2xl">{data.name}</h2>
            <p>Price: <span className="text-xl">${data.price}</span></p>
            <p>Video Duration: <span className="text-md">{data.duration}</span></p>
          </div>
          <button onClick={()=>setData({})} className="p-2 mt-5 rounded-md bg-orange-600 text-white ">Purchase</button>
        </div>
        :
        <>
          <p>Congratulation! <br /> course access given to you.</p>
          <Link className="mt-5 underline text-lg" to='/courses'>Purchase more courses?</Link>
        </>
      }
      
    </div>
  );
};

export default Checkout;
