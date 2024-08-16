import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import Professionals from '../pages/professionals';
import About from '../pages/About';
import Services from '../pages/Services';
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

        <div className="relative container mx-auto px-6 py-16 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">
              Restore your mental health
            </h1>
            <p className="text-white mt-4 text-[25px]">
              Join our public beta for early access to a healthier future. Your feedback shapes our platform.
            </p>
            <Link
              to="/register"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 mt-10"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      </section>

    
      <div id="about">
        <About />
      </div>

    
      <div id="services">
        <Services />
      </div>

      <section className="my-16 pt-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-teal-800">Meet Our Professionals</h2>
        <Professionals />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
