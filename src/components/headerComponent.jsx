import React, { useState } from 'react';
import { GoBell } from 'react-icons/go';

const Header = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New appointment request' },
    { id: 2, message: 'New message from a client' },
    { id: 3, message: 'Reminder: Session with John at 3 PM' },
  ]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <h1 className="text-xs">Welcome Back!</h1>
        <p className="text-xl font-semibold">Mabel</p>
      </div>
      <div className="flex items-center space-x-5">
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="search..."
            className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <div className="flex items-center space-x-5 relative">
          <button
            className="relative text-2xl text-gray-600"
            onClick={toggleDropdown}
          >
            <GoBell size={32} />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-indigo-600 text-white font-semibold text-[10px] w-5 h-5 rounded-full border-2 border-white">
              {notifications.length}
            </span>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <ul>
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <li
                      key={notification.id}
                      className="px-4 py-2 hover:bg-gray-100 border-b last:border-0"
                    >
                      {notification.message}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">No notifications</li>
                )}
              </ul>
            </div>
          )}

          <img
            className="w-8 h-8 rounded-full border-4 border-indigo-400"
            src="" // You can add the user's avatar image URL here
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
