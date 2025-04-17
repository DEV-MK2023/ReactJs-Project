import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
<div className='w-full shadow bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white sticky top-0 z-50 flex flex-wrap justify-between items-center px-6 py-4'>
    <h2 className='text-3xl font-extrabold tracking-wide'>Muneeb Tech..!</h2>
        <ul className='flex flex-wrap space-x-24 text-base font-medium'>
        <li><Link to='/' className="hover:text-blue-400 hover:bg-gray-800 hover:shadow-lg hover:scale-110 transition duration-300 ease-in-out px-2 py-1 rounded">Home</Link></li>
        <li><Link to='/about' className="hover:text-blue-400 hover:bg-gray-800 hover:shadow-lg hover:scale-110 transition duration-300 ease-in-out px-2 py-1 rounded">About</Link></li>
        <li><Link to='/gallery' className="hover:text-blue-400 hover:bg-gray-800 hover:shadow-lg hover:scale-110 transition duration-300 ease-in-out px-2 py-1 rounded">Gallery</Link></li>
        <li><Link to='/services' className="hover:text-blue-400 hover:bg-gray-800 hover:shadow-lg hover:scale-110 transition duration-300 ease-in-out px-2 py-1 rounded">Services</Link></li>
        <li><Link to='/team' className="hover:text-blue-400 hover:bg-gray-800 hover:shadow-lg hover:scale-110 transition duration-300 ease-in-out px-2 py-1 rounded">Team</Link></li>
        <li><Link to='/contact' className="hover:text-blue-400 hover:bg-gray-800 hover:shadow-lg hover:scale-110 transition duration-300 ease-in-out px-2 py-1 rounded">Contact</Link></li>
        </ul>
      </div>
  );
}

export default Navbar;



