import React from 'react';
import img from '../assets/a (123).jpg';

function Home() {
  return (
    <div id="home" className=" shadow bg-gradient-to-r from-sky-800 to-blue-800 text-white">
      <img src={img} alt="Banner" className='w-full h-full object-cover opacity-90' />
    </div>
  );
}

export default Home;