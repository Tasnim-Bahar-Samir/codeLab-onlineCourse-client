import React from "react";
import img from "../../assets/images/aboutImg.jpeg";

const About = () => {
  return (
    <div className="px-16">
      <h2 className="text-4xl font-bold text-center mt-16 mb-5">About</h2>
      <div className="flex justify-center items-center gap-5">
        <div className="w-1/2">
          <p className=" leading-7 text-lg">
          <strong>CodeLab</strong> is the most successful online learning platform in Bangladesh. Where you can learn and
          practice programming skills. Here you can learn programming languages
          and you can also enlarge your skills. We are providing some courses in minimal price. Our instructors are very friendly and brilliant. All of them are graduated from top universities of BD. We will provide you continious support to make your learning more productive.
          </p>
          <a href="#contact" className=" inline-block mt-5 px-5 py-2 rounded-sm bg-orange-600 text-white">Want to know more?</a>
        </div>
        <div className="md:w-1/2">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
