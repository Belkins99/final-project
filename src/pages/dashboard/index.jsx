

import { Outlet } from 'react-router-dom';
import UserSidebar from '../../components/sidebar2';
import Header from '../../components/headerComponent';


const UserDashboard = () => {
  const userName = ""; // This should be dynamically set after login
  const dataToSearch = ["New appointment request", "Session with John", "Client message"];
  return (
    <div>
    <div className='flex'>
        <UserSidebar/>
        <div className='w-full ml-16 md:ml-56'>
            <Header  userName={userName} dataToSearch={dataToSearch}/>
            <Outlet />
        </div>
    </div>
</div>
  );
};

export default UserDashboard;