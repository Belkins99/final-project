// src/pages/Professionals.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const professionalsData = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialty: 'Psychologist',
    image: 'https://via.placeholder.com/150',
    description: 'Experienced in cognitive behavioral therapy.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    specialty: 'Therapist',
    image: 'https://via.placeholder.com/150',
    description: 'Specializes in anxiety and depression.'
  },
  // Add more professionals as needed
];

const Professionals = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Our Professionals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {professionalsData.map((professional) => (
          <div key={professional.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              className="w-24 h-24 rounded-full mx-auto object-cover"
              src={professional.image}
              alt={professional.name}
            />
            <h2 className="text-xl font-semibold text-center mt-4">{professional.name}</h2>
            <p className="text-center text-gray-500">{professional.specialty}</p>
            <p className="text-center mt-2">{professional.description}</p>
            <Link
              to={`/professional/${professional.id}`}
              className="mt-4 block bg-blue-600 text-white text-center py-2 rounded-lg"
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
