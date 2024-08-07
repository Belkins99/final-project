// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage1 from '../assets/images/images.jpg';
import heroImage2 from '../assets/images/human.jpg';
import heroImage3 from '../assets/images/dug.jpg';
import Header from '../components/Header';
import Footer from '../components/footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 font-mono">Restore your mental health</h1>
            <p className="text-gray-600 mt-4 text-[20px]">Join our public beta for early access to a healthier future. Your feedback shapes our platform.</p>
            <Link to="/register" className=" inline-block bg-slate-950 text-white px-6 py-3 rounded-md hover:bg-teal-700 ml-20 mt-10">REGISTER NOW</Link>
          </div>
          <div className="space-y-4 grid grid-cols-2 gap-4">
            <img src={heroImage1} alt="Hero 1" className="rounded-lg shadow-md w-[100] h-full object-cover" />
            <img src={heroImage2} alt="Hero 2" className="rounded-lg shadow-md w-[100] h-full object-cover" />
            <img src={heroImage3} alt="Hero 3" className="rounded-lg shadow-md w-[100] h-full object-cover ml-16" />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;
