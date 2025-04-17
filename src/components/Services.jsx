import React from "react";
import { ImCross } from "react-icons/im";
import { BiCheckCircle } from "react-icons/bi";

function Services() {
  return (
    <section className="bg-slate-700 text-white py-16 px-6" id="services">
      <h1 className="text-4xl font-semibold underline text-center mb-10">
        Our Services
      </h1>
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="w-80 bg-gradient-to-br from-gray-900 via-blue-700 to-black text-gray-200 border-4 border-blue-500 p-6">
          <h4 className="bg-gradient-to-r from-cyan-400 to-blue-500 text-center rounded-sm font-semibold text-xl text-white">
            Free
          </h4>
          <h4 className="text-center text-3xl mt-4 text-blue-400">Price</h4>
          <p className="text-center text-xl mt-2 underline text-cyan-300">
            $ 0.00/Month
          </p>
          <p className="mt-4 text-justify text-gray-300">
            Basic plan with limited access and essential tools for personal.
          </p>
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-cyan-300">
              <span>Get Information</span> <BiCheckCircle />
            </div>
            <div className="flex justify-between text-red-500">
              <span>Services</span> <ImCross />
            </div>
            <div className="flex justify-between text-red-500">
              <span>Packages</span> <ImCross />
            </div>
          </div>
        </div>

        <div className="w-80 bg-gradient-to-br from-gray-800 via-blue-900 to-black text-gray-200 border-4 border-blue-500 p-6">
          <h4 className="bg-gradient-to-r from-teal-400 to-blue-500 text-center rounded-sm font-semibold text-xl text-white">
            Standard
          </h4>
          <h4 className="text-center text-3xl mt-4 text-blue-400">Price</h4>
          <p className="text-center text-xl mt-2 underline text-teal-300">
            $ 9.99/Month
          </p>
          <p className="mt-4 text-justify text-gray-300">
            Most popular plan for freelancers offering a full suite of tools.
          </p>
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-teal-300">
              <span>Get Information</span> <BiCheckCircle />
            </div>
            <div className="flex justify-between text-teal-300">
              <span>Services</span> <BiCheckCircle />
            </div>
            <div className="flex justify-between text-teal-300">
              <span>Packages</span> <BiCheckCircle />
            </div>
          </div>
        </div>

        <div className="w-80 bg-gradient-to-br from-gray-900 via-indigo-700 to-black text-gray-200 border-4 border-indigo-500 p-6">
          <h4 className="bg-gradient-to-r from-purple-500 to-indigo-500 text-center rounded-sm font-semibold text-xl text-white">
            Pro
          </h4>
          <h4 className="text-center text-3xl mt-4 text-indigo-400">Price</h4>
          <p className="text-center text-xl mt-2 underline text-purple-300">
            $ 19.99/Month
          </p>
          <p className="mt-4 text-justify text-gray-300">
            Advanced tools and custom options for companies and teams.
          </p>
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-purple-300">
              <span>Get Information</span> <BiCheckCircle />
            </div>
            <div className="flex justify-between text-purple-300">
              <span>Services</span> <BiCheckCircle />
            </div>
            <div className="flex justify-between text-red-500">
              <span>Packages</span> <ImCross />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
