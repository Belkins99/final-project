import React from 'react';
import heroImage1 from '../assets/images/images.jpg';
import heroImage2 from '../assets/images/dug.jpg';
import heroImage3 from '../assets/images/human.jpg';

const About = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-950">ABOUT US</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 text-[20px] pt-5 pb-5">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-slate-950">
            At SOLACE, our mission is to support mental health and well-being by connecting people with the resources and professionals they need.
          </p>
          <p className="mt-4 text-blue-700">
            Our platform offers a range of services, including access to mental health professionals, support groups, and resources tailored to meet your needs.
          </p>
          <p className="mt-4 text-slate-950">
            Join us in our journey to make mental health care accessible, effective, and compassionate. Together, we can build a community where everyone feels supported and empowered to thrive.
          </p>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <img src={heroImage1} alt="Hero 1" className="rounded-lg shadow-md w-full h-48 object-cover" />
          <img src={heroImage2} alt="Hero 2" className="rounded-lg shadow-md w-full h-48 object-cover" />
          <img src={heroImage3} alt="Hero 3" className="rounded-lg shadow-md w-full h-48 object-cover ml-20" />
        </div>
      </div>
    </div>
  );
};

export default About;
