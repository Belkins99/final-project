// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-slate-950 p-4 text-white">
      <nav className="flex justify-between">
        <h1 className="text-2xl font-bold">Mental Health App</h1>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/resources" className="mr-4">Resources</Link>
          <Link to="/support-groups" className="mr-4">Support Groups</Link>
          <Link to="/schedule" className="mr-4">Schedule</Link>
          <Link to="/login" className="mr-4 border rounded-full bg-white text-black p-2">Login</Link>
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
