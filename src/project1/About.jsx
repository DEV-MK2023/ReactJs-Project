

import React from 'react';
import { HiComputerDesktop } from "react-icons/hi2";
import { FaTrophy } from "react-icons/fa6";
import { VscEdit } from "react-icons/vsc";

function About() {
  return (
    <section id="about" className="bg-black text-white py-20 px-6 md:rounded-tr-[5rem] md:rounded-bl-[5rem] mt-3">
      <h1 className="text-4xl font-semibold text-blue-700 text-center mb-20 pt-10">ABOUT US</h1>
      <div className="flex flex-col md:flex-row flex-wrap gap-10 items-center justify-center max-w-6xl mx-auto">
        <div className="w-full md:w-[25%] flex flex-col justify-center text-center items-center space-y-6">
          <HiComputerDesktop className="text-5xl text-blue-400" />
          <h1 className="text-xl font-semibold">Easy To Use</h1>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius commodi adipisci quas. Eligendi quis aperiam pariatur.
          </p>
        </div>

        <div className="w-full md:w-[25%] flex flex-col justify-center text-center items-center space-y-6">
          <FaTrophy className="text-5xl text-yellow-400" />
          <h1 className="text-xl font-semibold">Awesome Design</h1>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius commodi adipisci quas. Eligendi quis aperiam pariatur.
          </p>
        </div>

        <div className="w-full md:w-[25%] flex flex-col justify-center text-center items-center space-y-6">
          <VscEdit className="text-5xl text-green-400" />
          <h1 className="text-xl font-semibold">Unique Features</h1>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eius commodi adipisci quas. Eligendi quis aperiam pariatur.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;