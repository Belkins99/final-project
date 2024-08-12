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
