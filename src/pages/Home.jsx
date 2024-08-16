import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import Professionals from '../pages/professionals';
import Services from '../pages/Services';
import About from '../pages/About';
import hosOne from '../assets/videos/hos.mp4';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="relative h-screen">
        <video
          src={hosOne}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-teal-950 opacity-50"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center justify-center h-full">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Restore your mental health
            </h1>
            <p className="text-white mt-4 text-lg sm:text-xl md:text-2xl">
              Join our public beta for early access to a healthier future. Your feedback shapes our platform.
            </p>
            <Link
              to="/register"
              className="inline-block bg-teal-800 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-md hover:bg-teal-600 mt-8 sm:mt-10"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      </section>

      <About />

      <Services />

      <section className="my-16 pt-10 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-teal-800">Meet Our Professionals</h2>
        <Professionals />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
