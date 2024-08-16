import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaUserFriends, FaBook, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProfessionalSidebar = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/prof-dashboard/prof-profile", name: "Profile", icon: FaUser },
    { id: 2, path: "/prof-dashboard/appointments", name: "Appointments", icon: FaCalendarAlt },
    { id: 3, path: "/prof-dashboard/clients", name: "Clients", icon: FaUserFriends },
    { id: 4, path: "/prof-dashboard/resources", name: "Resources", icon: FaBook },
    { id: 5, path: "/prof-dashboard/settings", name: "Settings", icon: FaCog },
  ];

  return (
    <div className='w-16 md:w-52 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-blue-800'>
      <div className='mb-8'>
        <h1 className='hidden md:flex font-bold text-white'>PRO DASH</h1>
        <h1 className='flex md:hidden text-white'>P</h1>
      </div>

      <nav>
        <ul className='mt-6 space-y-6'>
          {SIDEBAR_LINKS.map((link, index) => (
            <li
              key={index}
              className={`font-medium rounded-md py-2 px-5 hover:bg-blue-600 hover:text-white ${activeLink === index ? "bg-blue-600 text-white" : "text-gray-400"}`}
            >
              <Link to={link.path} className='flex justify-center md:justify-start items-center md:space-x-5' onClick={() => handleLinkClick(index)}>
                <span>{React.createElement(link.icon)}</span>
                <span className='text-sm hidden md:flex'>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className='w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center'>
        <p className='flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full'>
          <span>?</span> <span className='hidden md:flex'>Need Help</span>
        </p>
      </div>
    </div>
  );
};

export default ProfessionalSidebar;
