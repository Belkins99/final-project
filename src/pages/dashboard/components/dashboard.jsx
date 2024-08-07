// src/pages/dashboard/Dashboard.jsx
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SupportGroup from '../../../pages/dashboard/components/SupportGroups';
import Resources from '../../../pages/dashboard/components/Resources';
import Schedule from '../../../pages/dashboard/components/Schedule';
import GroupDetail from '../../../pages/dashboard/components/GroupDetail';
import Profile from '../../../pages/dashboard/components/Profile';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-1/5 bg-gray-800 text-white flex flex-col">
        <div className="p-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
          <nav className="flex-grow">
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard/profile" className="flex items-center p-2 hover:bg-gray-700 rounded">
                  <span className="material-icons-outlined">person</span>
                  <span className="ml-2">Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/supportgroup" className="flex items-center p-2 hover:bg-gray-700 rounded">
                  <span className="material-icons-outlined">group</span>
                  <span className="ml-2">Support Group</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/resources" className="flex items-center p-2 hover:bg-gray-700 rounded">
                  <span className="material-icons-outlined">book</span>
                  <span className="ml-2">Resources</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/schedule" className="flex items-center p-2 hover:bg-gray-700 rounded">
                  <span className="material-icons-outlined">schedule</span>
                  <span className="ml-2">Schedule</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/groupdetail" className="flex items-center p-2 hover:bg-gray-700 rounded">
                  <span className="material-icons-outlined">info</span>
                  <span className="ml-2">Group Detail</span>
                </Link>
              </li>
            </ul>
          </nav>
          <button onClick={() => alert('Logging out...')} className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded w-full">
            Logout
          </button>
        </div>
      </aside>
      <main className="w-4/5 p-4 overflow-auto">
        <Routes>
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/supportgroup" element={<SupportGroup />} />
          <Route path="/dashboard/resources" element={<Resources />} />
          <Route path="/dashboard/schedule" element={<Schedule />} />
          <Route path="/dashboard/groupdetail" element={<GroupDetail />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
