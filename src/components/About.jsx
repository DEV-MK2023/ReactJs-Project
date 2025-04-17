import React from 'react';
import img from '../assets/company.jpg';

function About() {
  return (
    <section id="about" className='bg-slate-700 text-white py-20 px-6 '>
      <h1 className='text-4xl font-semibold underline text-center mb-12'>About Us</h1>
      <div className='flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto'>
        <img src={img} alt="About" width={350} className='border-2 border-white' />
        <p className='text-justify'>We create meaningful web solutions with modern tools. From design to deployment, we ensure quality, responsiveness, and elegance in every project.</p>
      </div>                         
    </section>
  );
}

export default About;