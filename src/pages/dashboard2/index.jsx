// src/App.js

import { Outlet } from 'react-router-dom';
import AdminSidebar from '../../components/sidebar';
import Head from '../../components/head';




const AdminDashboard = () => {

  const userName = "Mabel"; // This should be dynamically set after login
  const dataToSearch = ["New appointment request", "Session with John", "Client message"];
  
  return (
    <div>
    <div className='flex'>
        <AdminSidebar />
        <div className='w-full ml-16 md:ml-56'>
            <Head  userName={userName} dataToSearch={dataToSearch}/>
            <Outlet />
        </div>
    </div>
</div>
  );
};

export default AdminDashboard;