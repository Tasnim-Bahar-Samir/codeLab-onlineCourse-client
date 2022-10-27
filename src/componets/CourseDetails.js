import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar, FaCrown, FaFilePdf } from "react-icons/fa";
import Pdf from "react-to-pdf";
import { useContext } from "react";
import { authContext } from "../Contexts/UserContext";

const ref = React.createRef();

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const{darkMode} = useContext(authContext)
  const { img, description, rating, name, instructor, id } = courseDetails;
  return (
    <div className="mt-8 md:mx-32 mx-3 ">
      <div className="flex justify-between  p-2 shadow-md mb-4">
        <h1 className="text-3xl ">Course Details:</h1>
        <Pdf targetRef={ref} filename="courseData.pdf">
          {({ toPdf }) => (
            <button className="flex items-center underline" onClick={toPdf}>
              Download pdf
              <FaFilePdf />
            </button>
          )}
        </Pdf>
      </div>
      <div className={`bg-base-100 shadow-xl border-2 rounded-xl md:p-8 p-3 ${darkMode&& 'bg-gray-800'}`}>
        <div ref={ref}>
          <h2 className="text-3xl ">{name}</h2>
          <figure className="px-10 pt-10 ">
            <img src={img} alt="img" className="rounded-xl md:w-56 w-48" />
          </figure>
          <div>
            <p className="flex items-center gap-1">
              <FaStar className=" text-amber-400" /> {rating}
            </p>
            <p>{description}</p>
            <div className="my-5">
              <h3 className="text-3xl">Instructor Details:</h3>
              <div className="flex items-center gap-1 mt-3">
                <img
                  className="w-10 rounded-full"
                  src={instructor.img}
                  alt=""
                />
                <div>
                  <p className="font-semibold">Name:{instructor.name}</p>
                  <p>({instructor.education})</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-actions">
          <Link to={`/checkout/${id}`}>
            <button className="text-white mt-4 py-2 px-4 rounded-xl active:scale-95 bg-orange-600 flex items-center">
              Get Premium Access <FaCrown className="ml-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
