import React from 'react';
import imgElon from '../assets/Elon Musk Twitter CEO.jpg';
import vceo from '../assets/VCEO.JPG';
import managpic from '../assets/Managing Director.jpg';

function Team() {
  return (
    <section id="team" className='bg-slate-700 text-white py-16 px-6'>
      <h1 className='text-4xl font-semibold underline text-center mb-10'>Our Team</h1>
      <div className='flex flex-wrap gap-6 justify-center'>
        <div className='bg-black w-80 p-4 border transition-transform duration-300 hover:scale-105'>
          <img src={imgElon} alt="Elon Musk" className='w-full'/>
          <p className='text-center text-rose-500 mt-2'>Elon Musk</p>
          <p className='text-center'>CEO & Founder</p>
          <p className='text-center text-red-400'>Web Development & Programmer</p>
        </div>
        <div className='bg-black w-80 p-4 border transition-transform duration-300 hover:scale-105'>
          <img src={vceo} alt="VCEO" className='w-full'/>
          <p className='text-center text-rose-500 mt-2'>Hira Virk</p>
          <p className='text-center'>VCEO & Planner</p>
          <p className='text-center text-red-400'>IT Expert</p>
        </div>
        <div className='bg-black w-80 p-4 border transition-transform duration-300 hover:scale-105'>
          <img src={managpic} alt="Manager" className='w-full'/>
          <p className='text-center text-rose-500 mt-2'>Mahrukh Jutt</p>
          <p className='text-center'>Managing Director</p>
          <p className='text-center text-red-400'>Web Designer</p>
        </div>
      </div>
    </section>
  );
}

export default Team;