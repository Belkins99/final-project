// src/App.jsx
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/Auth/Login';
import RegisterPage from './pages/Auth/Register';
import HomePage from './pages/Home';
import Dashboard from './pages/dashboard';
import Profile from './pages/dashboard/components/Profile';
import Resources from './pages/dashboard/components/Resources';
import Schedule from './pages/dashboard/components/Schedule';
import SupportGroups from './pages/dashboard/components/SupportGroups';
import Landing from './pages/landing';
import GroupDetail from './pages/dashboard/components/GroupDetail';

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
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
