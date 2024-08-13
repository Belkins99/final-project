
import Header from '../../components/header';
import { Outlet } from 'react-router-dom';
import UserSidebar from '../../components/sidebar2';


const UserDashboard = () => {
  return (
    <div>
    <div className='flex'>
        <UserSidebar/>
        <div className='w-full ml-16 md:ml-56'>
            <Header />
            <Outlet />
        </div>
    </div>
</div>
  );
};

export default UserDashboard;