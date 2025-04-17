import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import { MdCopyright } from 'react-icons/md';

function Footer() {
  return (
    <footer className='bg-black md:rounded-tr-[5rem] md:rounded-bl-[5rem] text-white py-10 my-5'>
      <div className='flex md:flex-wrap flex-col md:flex-row items-center space-y-7 md:justify-evenly px-6'>
        <div className='w-80'>
          <h2 className='text-blue-600 text-3xl italic mb-2'>M. Muneeb Zafar</h2>
          <p className='text-sm'>We provide technical expertise and innovative projects tailored to client needs with professional quality and support.We provide technical expertise and innovative projects tailored to client.</p>
        </div>
        <div>
          <h2 className='text-blue-600 text-3xl italic mb-2'>PROJECTS</h2>
          <ul className='list-disc list-inside text-sm text-center md:text-left'>
           <li className='cursor-pointer hover:underline'>Home</li>
           <li className='cursor-pointer hover:underline'>About Us</li>
           <li className='cursor-pointer hover:underline'>Services</li>
           <li className='cursor-pointer hover:underline'>Our Team</li>
           <li className='cursor-pointer hover:underline'>Contact Us</li>
          </ul>
        </div>
        <div className='grid md:grid-cols-3 grid-cols-2  gap-2'>
          <img src={img1} alt='' className='w-32 border' />
          <img src={img2} alt='' className='w-32 border' />
          <img src={img3} alt='' className='w-32 border' />
          <img src={img3} alt='' className='w-32 border' />
          <img src={img2} alt='' className='w-32 border' />
          <img src={img1} alt='' className='w-32 border' />
        </div>
      </div>
      <div className='text-center mt-6 text-sm flex justify-center items-center gap-2'>
        <span>Copyright</span>
        <MdCopyright />
        <span>2025 All Rights Reserved. Design By <span className='text-blue-600 underline'>Trojan</span></span>
      </div>
    </footer>
  );
}

export default Footer;