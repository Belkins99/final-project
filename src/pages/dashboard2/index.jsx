// src/App.js
import Header from '../../components/header';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../../components/sidebar';

const AdminDashboard = () => {
  return (
    <div>
    <div className='flex'>
        <AdminSidebar />
        <div className='w-full ml-16 md:ml-56'>
            <Header />
            <Outlet />
        </div>
    </div>
</div>
  );
};

export default AdminDashboard;