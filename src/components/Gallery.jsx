import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img6 from '../assets/img6.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';

function Gallery() {
  return (
    <section id="services" className='bg-slate-700 text-white py-16 px-6'>
      <h1 className='text-4xl font-semibold underline text-center mb-10'>Image Gallery</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center'>
      <img src={img1} alt='Gallery1' className='rounded shadow-md opacity-50 hover:opacity-100  transition-all duration-300' />      
      <img src={img2} alt='Gallery2' className='rounded shadow-md opacity-50 hover:opacity-100  transition-transform duration-300 hover:scale-105 hover:shadow-lg' />
      <img src={img3} alt="Gallery3" className="rounded shadow-md opacity-50 hover:opacity-100  transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
      <img src={img6} alt="Gallery4" className="rounded shadow-md opacity-50 hover:opacity-100  transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
      <img src={img6} alt="Gallery5" className="rounded shadow-md opacity-50 hover:opacity-100  transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
      <img src={img6} alt="Gallery6" className="rounded shadow-md opacity-50 hover:opacity-100  transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
      <img src={img2} alt="Gallery7" className="rounded shadow-md opacity-50 hover:opacity-100  transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
      <img src={img8} alt="Gallery8" className="rounded shadow-md opacity-50 hover:opacity-100  transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
      <img src={img9} alt="Gallery9" className="rounded shadow-md opacity-50 hover:opacity-100  transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
      </div>
    </section>
  );
}

export default Gallery;