// src/App.jsx
import React from 'react';
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
    <div className='flex'>
        <Sidebar />
        <div className='w-full ml-16 md:ml-56'>
            <Header />
            <Outlet />
        </div>
    </div>
</div>
  );
};

export default Dashboard;