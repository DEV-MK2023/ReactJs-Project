import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import { MdCopyright } from 'react-icons/md';

function Footer() {
  return (
    <footer className='bg-black text-white py-10'>
      <div className='flex flex-wrap justify-evenly px-6'>
        <div className='w-80'>
          <h2 className='text-blue-600 text-3xl italic mb-2'>TROJAN TECHNICAL</h2>
          <p className='text-sm'>We provide technical expertise and innovative projects tailored to client needs with professional quality and support.</p>
        </div>
        <div>
          <h2 className='text-blue-600 text-3xl italic mb-2'>PROJECTS</h2>
          <ul className='list-disc list-inside text-sm'>
            <li>Software Development</li>
            <li>Web Development</li>
            <li>Transport Company</li>
            <li>Shopping Mall</li>
            <li>7 Star Hotel</li>
          </ul>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <img src={img1} alt='' className='w-24 border' />
          <img src={img2} alt='' className='w-24 border' />
          <img src={img3} alt='' className='w-24 border' />
          <img src={img3} alt='' className='w-24 border' />
        </div>
      </div>
      <div className='text-center mt-6 text-sm flex justify-center items-center gap-2'>
        <span>Copyright</span>
        <MdCopyright />
        <span>2022 All Rights Reserved. Design By <span className='text-blue-600 underline'>Trojan</span></span>
      </div>
    </footer>
  );
}

export default Footer;