// src/App.js

import { Outlet } from 'react-router-dom';
import AdminSidebar from '../../components/sidebar';
import Header from '../../components/header';

const AdminDashboard = () => {
  return (
    <div>
    <div className='flex'>
        <AdminSidebar />
        <div className='w-full ml-16 md:ml-56'>
            <Header/>
            <Outlet />
        </div>
    </div>
</div>
  );
};

export default AdminDashboard;