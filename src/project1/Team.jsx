import React from 'react';
import img1 from "../assets/Brendan_Eich_Moz1.png"
import img2 from "../assets/Elon Musk Twitter CEO.jpg"
import img3 from "../assets/VCEO.jpg"
import { FaCamera } from "react-icons/fa";
import { TbBoxMultiple } from "react-icons/tb";
import { FaComments } from "react-icons/fa6";



function Team() {
    return (
        <section id="team" className="bg-black text-white py-8 px-6 md:rounded-tr-[5rem] md:rounded-bl-[5rem] mt-3">
  <h1 className="text-4xl font-semibold text-blue-700 text-center mb-20">Our Team</h1>
  
  <div className="flex flex-col md:flex-row flex-wrap gap-10 items-center justify-center max-w-6xl mx-auto">
    <div className="w-full md:w-[28%] flex flex-col justify-center text-center items-center space-y-6">
      <img className="w-40 h-40 hover:scale-110 transition duration-200 cursor-pointer rounded-full object-cover border-4 border-blue-500" src={img1} alt="Brendan Eich" />
      <h1 className="text-xl font-semibold underline">Brendan Eich</h1>
      <h2 className="text-blue-600">Managing Director</h2>
      <h3 className="text-yellow-600">Web Designer</h3>
      <div className="flex space-x-4">
        <FaCamera className="text-3xl hover:text-blue-400 cursor-pointer" />
        <TbBoxMultiple className="text-3xl hover:text-blue-400 cursor-pointer" />
        <FaComments className="text-3xl hover:text-blue-400 cursor-pointer" />
      </div>
    </div>

    <div className="w-full md:w-[28%] flex flex-col justify-center text-center items-center space-y-6">
      <img className="w-40 h-40 hover:scale-110 transition duration-200 cursor-pointer rounded-full object-cover border-4 border-blue-500" src={img2} alt="Elon Musk" />
      <h1 className="text-xl font-semibold underline">Elon Musk</h1>
      <h2 className="text-blue-600">CEO AND FOUNDER</h2>
      <h3 className="text-yellow-600">Web Developer and Programmer</h3>
      <div className="flex space-x-4">
        <FaCamera className="text-3xl hover:text-blue-400 cursor-pointer" />
        <TbBoxMultiple className="text-3xl hover:text-blue-400 cursor-pointer" />
        <FaComments className="text-3xl hover:text-blue-400 cursor-pointer" />
      </div>
    </div>

    <div className="w-full md:w-[28%] flex flex-col justify-center text-center items-center space-y-6">
      <img className="w-40 h-40 hover:scale-110 transition duration-200 cursor-pointer rounded-full object-cover border-4 border-blue-500" src={img3} alt="Ramzay Alya" />
      <h1 className="text-xl font-semibold underline">Ramzay Alya</h1>
      <h2 className="text-blue-600">VCEO and Planner</h2>
      <h3 className="text-yellow-600">IT Expert</h3>
      <div className="flex space-x-4">
        <FaCamera className="text-3xl hover:text-blue-400 cursor-pointer" />
        <TbBoxMultiple className="text-3xl hover:text-blue-400 cursor-pointer" />
        <FaComments className="text-3xl hover:text-blue-400 cursor-pointer" />
      </div>
    </div>
  </div>
</section>
    );
}

export default Team;

