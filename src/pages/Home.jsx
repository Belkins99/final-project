import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import Professionals from '../pages/professionals';
import About from '../pages/About';
import Services from '../pages/Services';
import hosOne from '../assets/videos/hos.mp4';
import Testimonials from './testiomonials';
import BlogResources from './blog';
import ClientLogos from './clientLogos';
import UpcomingEvents from './upcomingEvent';
import CallToAction from './action';
import NewsletterSignup from './newsletter';
import FAQ from './faq';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen">
        <video
          src={hosOne}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900 opacity-50"></div>

        <div className="relative container mx-auto px-6 py-16 flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">
              Restore your mental health
            </h1>
            <p className="text-white mt-4 text-[25px]">
              Join our public beta for early access to a healthier future. <br /> Your feedback shapes our platform.
            </p>
            <Link
              to="/register"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 mt-10"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div id="about" className="my-16">
        <About />
      </div>

      {/* Services Section */}
      <div id="services" className="bg-indigo-50 py-16">
        <Services />
      </div>

      {/* Meet Our Professionals */}
      <section className="bg-indigo-200 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-950">Meet Our Professionals</h2>
        <Professionals />
      </section>

      {/* Testimonials Section */}
      <div id="testimonials" className="bg-indigo-300 py-16">
        <Testimonials />
      </div>

      {/* Resources Section */}
      <div id="resources" className="bg-indigo-200 py-16">
        <BlogResources />
      </div>

      {/* Client Logos */}
      <div className="bg-indigo-200 py-16">
        <ClientLogos />
      </div>

      {/* Upcoming Events */}
      <div id='upcoming-events' className="bg-white py-16">
        <UpcomingEvents />
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-400 py-16 text-white">
        <CallToAction />
      </div>

      {/* Newsletter Signup */}
      <div id='newsletter' className="bg-indigo-500 py-16 text-white">
        <NewsletterSignup />
      </div>

      {/* FAQ Section */}
      <div className="bg-indigo-50 py-16">
        <FAQ />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
