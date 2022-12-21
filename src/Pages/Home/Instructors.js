import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  console.log(instructors);
  return (
    <div className="mx-16">
      <h2 className="text-4xl font-bold text-center mt-14 mb-5">Our Instructors</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7">
        {instructors.map((instructor) => (
          <div key={instructor._id} className="card bg-base-100 shadow-xl">
            <figure className="px-5 pt-10">
              <img
                src={instructor.img}
                alt="instructor"
                className="rounded-full w-44 h-44"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{instructor.name}</h2>
              <p>({instructor.education})</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
