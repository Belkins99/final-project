// src/components/UserSidebar.jsx
import React, { useState } from 'react';
import { GrDashboard, GrResources, GrSchedule } from 'react-icons/gr';
import { HiSupport } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { FaUserMd } from 'react-icons/fa'; // Add this line to import a doctor icon

const UserSidebar = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/user-dashboard", name: "Dashboard", icon: GrDashboard },
    { id: 2, path: "/user-dashboard/profile", name: "Profile", icon: CgProfile },
    { id: 3, path: "/user-dashboard/supportgroup", name: "Support Groups", icon: HiSupport },
    { id: 4, path: "/user-dashboard/schedule", name: "Schedule", icon: GrSchedule },
    { id: 5, path: "/user-dashboard/resources", name: "Resources", icon: GrResources },
    { id: 6, path: "/professionals", name: "Professionals", icon: FaUserMd }, 
  ];

  return (
    <div className='w-16 md:w-52 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white'>
      <div className='mb-8'>
        <h1 className='hidden md:flex font-bold'>SOLACE</h1>
        <h1 className='flex md:hidden'>logo2</h1>
      </div>

      <nav>
        <ul className='mt-6 space-y-6'>
          {SIDEBAR_LINKS.map((link, index) => (
            <li
              key={index}
              className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${activeLink === index ? "bg-indigo-100 text-indigo-500" : ""}`}
            >
              <Link
                to={link.path}
                className='flex justify-center md:justify-start items-center md:space-x-5'
                onClick={() => handleLinkClick(index)}
              >
                <span>{React.createElement(link.icon)}</span>
                <span className='text-sm text-gray-500 hidden md:flex'>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className='w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center'>
        <p className='flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full'>
          <span>?</span> <span className='hidden md:flex'>Need Help</span>
        </p>
      </div>
    </div>
  );
};

export default UserSidebar;
