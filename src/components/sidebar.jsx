import React, { useState } from 'react';
import { GrResources, GrSchedule, GrGroup } from 'react-icons/gr';
import { HiSupport } from 'react-icons/hi';
import { CgLogOut, CgProfile } from 'react-icons/cg';
import { LuBox } from 'react-icons/lu';
import { Link, useNavigate } from 'react-router-dom';
import { CiSettings } from 'react-icons/ci';

const AdminSidebar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('User logged out');
    // Redirect to the home page
    navigate('/');
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/dashboard", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/admin-dashboard/manage-users", name: "Manage Users", icon: CgProfile },
    { id: 3, path: "/admin-dashboard/manage-resources", name: "Manage Resources", icon: GrResources },
    { id: 4, path: "/admin-dashboard/manage-supportgroups", name: "Manage SupportGroup", icon: GrGroup },
    { id: 5, path: "/admin-dashboard/schedule-management", name: "Schedule Management", icon: GrSchedule },
    { id: 6, path: "/admin-dashboard/reports", name: "Reports", icon: HiSupport },
    { id: 7, path: "/admin-dashboard/settings", name: "Settings", icon: CiSettings }
  ];

  return (
    <div className='w-16 md:w-52 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white'>
      <div className='mb-8'>
        <h1 className='hidden md:flex font-bold'>SOLACE</h1>
        <h1 className='flex md:hidden'>logo2</h1>
      </div>

      <nav className='mb-16'> {/* Added margin-bottom here */}
        <ul className='mt-6 space-y-4'>
          {
            SIDEBAR_LINKS.map((link, index) => (
              <li key={index} className={`font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${activeLink === index ? "bg-indigo-100 text-indigo-500" : ""}`}>
                <Link to={link.path} className='flex justify-center md:justify-start items-center md:space-x-5' onClick={() => handleLinkClick(index)}>
                  <span>{React.createElement(link.icon)}</span>
                  <span className='text-sm text-gray-500 hidden md:flex'>{link.name}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>

      <div className='w-full absolute bottom-16 left-0 px-4 py-2'>
        <button
          onClick={handleLogout}
          className={`font-medium rounded-md py-2 px-5 flex justify-center items-center space-x-2 text-gray-500 hover:bg-gray-100 hover:text-indigo-500 ${activeLink === SIDEBAR_LINKS.length - 1 ? "bg-indigo-100 text-indigo-500" : ""}`}
        >
          <CgLogOut />
          <span className='text-sm hidden md:flex'>Logout</span>
        </button>
      </div>

      <div className='w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center'>
        <p className='flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full'>
          <span>?</span> <span className='hidden md:flex'>Need Help</span>
        </p>
      </div>
    </div>
  );
};

export default AdminSidebar;
