import React, { useState, useEffect } from 'react';
import { GoBell } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Header = ({ userName, dataToSearch }) => {
  const [userId, setUserId] = useState(null); // Assuming you'll set this on login
  const [notifications, setNotifications] = useState([
    { id: 1, message: '' },
    { id: 2, message: '' },
    { id: 3, message: '' },
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (searchTerm) {
      const filtered = dataToSearch.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [searchTerm, dataToSearch]);

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <h1 className="text-xs">Welcome Back, user {userId}!</h1>
        <p className="text-xl font-semibold">{userName || 'User'}</p>
      </div>
      <div className="flex items-center space-x-5">
        <div className="hidden md:flex relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-blue-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {filteredData.length > 0 && (
            <div className="absolute top-12 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-full">
              <ul>
                {filteredData.map((item, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 border-b last:border-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-5 relative">
          <button
            className="relative text-2xl text-gray-600"
            onClick={toggleDropdown}
          >
            <GoBell size={32} />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex justify-center items-center bg-blue-600 text-white font-semibold text-[10px] w-5 h-5 rounded-full border-2 border-white">
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

          <Link to="/user-dashboard/profile">
            <img
              className="w-8 h-8 rounded-full border-4 border-blue-400"
              src="" // Add the user's avatar image URL here
              alt="Profile"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
