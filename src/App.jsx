// src/App.jsx
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/Auth/Login';
import RegisterPage from './pages/Auth/Register';
import HomePage from './pages/Home';
import Profile from './pages/dashboard/components/Profile';
import Resources from './pages/dashboard/components/Resources';
import Schedule from './pages/dashboard/components/Schedule';
import SupportGroups from './pages/dashboard/components/SupportGroups';
import Landing from './pages/landing';
import GroupDetail from './pages/dashboard/components/GroupDetail';
import ManageUsers from './pages/dashboard2/components/ManageUsers';
import ManageResources from './pages/dashboard2/components/ManageResources';
import ManageSupportGroups from './pages/dashboard2/components/ManageSupportGroup';
import ManageSchedule from './pages/dashboard2/components/ScheduleManagement';
import ManageReports from './pages/dashboard2/components/Reports';
import AdminDashboard from './pages/dashboard2';
import UserDashboard from './pages/dashboard';
import Settings from './pages/dashboard2/components/settings';
import ProfessionalDashboard from './pages/dashboard3';
import ProfessionalProfile from './pages/dashboard3/components/profProfile';
import ProfessionalResources from './pages/dashboard3/components/Resources';
import Appointments from './pages/dashboard3/components/Appointments';
import Clients from './pages/dashboard3/components/Clients';
import ProfessionalSettings from './pages/dashboard3/components/Settings';
import Professionals from './pages/professionals'; 
import ProfessionalProfilePage from './pages/professionalProfile'; 
import MyAppointments from './pages/dashboard/components/myappointments';

const router = createBrowserRouter([
  {
    path: "/user-dashboard",
    element: <UserDashboard />,
    children: [
      { path: "home", element: <Landing /> },
      { path: "profile", element: <Profile /> },  // Nested Profile
      { path: "resources", element: <Resources /> },
      { path: "schedule", element: <Schedule /> },
      { path: "supportgroup", element: <SupportGroups /> },
      { path: "groupdetail", element: <GroupDetail /> },
      {path: "myappointments", element:<MyAppointments /> }
    ]
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard/>,
    children: [
      { path: "manage-users", element: <ManageUsers/> },
      { path: "manage-resources", element: <ManageResources/> },
      { path: "manage-supportgroups", element: <ManageSupportGroups/> },
      { path: "schedule-management", element: <ManageSchedule/> },
      { path: "reports", element: <ManageReports/>},
      { path: "settings", element: <Settings/>}
    ]
  },
  {
    path: "/prof-dashboard",
    element: <ProfessionalDashboard/>,
    children: [
      { path: "prof-profile", element: <ProfessionalProfile/> },
      { path: "resources", element: <ProfessionalResources/>},
      { path: "appointments", element: <Appointments/>},
      { path: "clients", element: <Clients/> },
      { path: "settings", element: <ProfessionalSettings/>}
    ]
  },
  
  {
    path: "/professionals",
    element: <Professionals />, // Displays the list of professionals
  },
  {
    path: "/professional/:id", // Dynamic route for each professional's profile
    element: <ProfessionalProfilePage />, // Displays the profile of a selected professional
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
