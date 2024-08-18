import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-black bg-opacity-50 text-white fixed w-full z-10 top-0 left-0">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold">
          SOLACE
        </Link>

        <div className="md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </div>

        <div
          className={`flex flex-col md:flex-row items-center md:space-x-6 ${
            isMenuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center mr-6 hover:text-blue-300"
            >
              Home
              <svg
                className="ml-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isDropdownOpen ? 'M19 9l-7 7-7-7' : 'M9 5l7 7-7 7'}
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20">
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-300 hover:text-white"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-300 hover:text-white"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-300 hover:text-white"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection('upcoming-events')}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-300 hover:text-white"
                >
                  Upcoming Events
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollToSection('resources')}
            className="mr-6 hover:text-blue-300"
          >
            Resources
          </button>

          <button
            onClick={() => scrollToSection('support-groups')}
            className="mr-6 hover:text-blue-300"
          >
            Support Groups
          </button>

          <button
            onClick={() => scrollToSection('newsletter')}
            className="mr-6 hover:text-blue-300"
          >
            Newsletter
          </button>

          <Link to="/login" className="border bg-blue-950 text-white p-2 hover:bg-blue-600">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
