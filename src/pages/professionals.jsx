import React from 'react';
import { Link } from 'react-router-dom';
import doctorOne from '../assets/images/doctor.jpg';
import doctorTwo from '../assets/images/doctor1.jpg';
import doctorThree from '../assets/images/doctor2.jpg';
import doctorFour from '../assets/images/doctor3.jpg';

const professionalsData = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialty: 'Psychologist',
    image: doctorOne,
    description: 'Expert in cognitive behavioral therapy and emotional resilience.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    specialty: 'Marriage and Family Therapist',
    image: doctorTwo,
    description: 'Specializes in relationship counseling and family dynamics.',
  },
  {
    id: 3,
    name: 'Aaron Smith',
    specialty: 'Clinical Social Worker',
    image: doctorThree,
    description: 'Provides support for mental health issues, including anxiety and depression.',
  },
  {
    id: 4,
    name: 'Mabel Aikins',
    specialty: 'Addiction Counselor',
    image: doctorFour,
    description: 'Focuses on helping individuals overcome substance abuse and dependency.',
  },
];

const Professionals = () => {
  return (
    <div className="container mx-auto p-6 bg-slate-100">
      <h1 className="text-3xl font-bold mb-6 text-indigo-800">Our Professionals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {professionalsData.map((professional) => (
          <div
            key={professional.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-indigo-50 transition duration-300"
          >
            <img
              className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-indigo-800"
              src={professional.image}
              alt={professional.name}
            />
            <h2 className="text-xl font-semibold text-center mt-4 text-indigo-800">{professional.name}</h2>
            <p className="text-center text-indigo-600">{professional.specialty}</p>
            <p className="text-center mt-2 text-slate-700">{professional.description}</p>
            <Link
              to={`/professional/${professional.id}`}
              className="mt-4 block bg-indigo-700 text-white text-center py-2 rounded-lg hover:bg-indigo-900 transition duration-300"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professionals;
