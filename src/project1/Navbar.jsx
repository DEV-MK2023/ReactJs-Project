import React, { useState } from 'react'; // Import useState for state management
import { Link } from 'react-router-dom';

function Navbar() {
  // State to track if the menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the state
  };

  return (
    <div className="w-full shadow bg-black text-yellow-600 sticky top-0 z-50 flex flex-wrap justify-between items-center px-6 py-4">
      <h2 className="text-3xl font-extrabold tracking-wide">M. Muneeb Zafar</h2>

      {/* Hamburger Button for Mobile */}
      <button
        className="md:hidden text-yellow-600 hover:text-white focus:outline-none"
        onClick={toggleMenu} // Attach the toggle function
      >
        ☰
      </button>

      {/* Desktop Navigation Links */}
      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col space-y-2 md:flex md:flex-row md:space-y-0 md:space-x-12 text-base font-medium bg-black md:bg-transparent p-4 md:p-0`}
      >
        <li>
          <a
            href='#home'
            className="hover:text-white hover:bg-yellow-600 hover:shadow-lg hover:scale-110 transition duration-300 ease-in-out px-2 py-1 rounded-full"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href='#about'
            className="hover:text-white hover:bg-yellow-600 hover:shadow-lg hover:scale-110 transition duration-300 ease-in-out px-2 py-1 rounded-full"
          >
            About
          </a>
        </li>
       <li>
          <a
            href='#services'
            className="hover:text-white hover:bg-yellow-600 hover:shadow-lg hover:scale-110 transition duration-300 ease-in-out px-2 py-1 rounded-full"
          >
            Services
          </a>
        </li>
       <li>
          <a
            href='#team'
            className="hover:text-white hover:bg-yellow-600 hover:shadow-lg hover:scale-110 transition duration-300 ease-in-out px-2 py-1 rounded-full"
          >
            Team
          </a>
        </li>
        <li>
          <a
            href='#contact'
            className="hover:text-white hover:bg-yellow-600 hover:shadow-lg hover:scale-110 transition duration-300 ease-in-out px-2 py-1 rounded-full"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
