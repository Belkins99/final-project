import React from 'react';
import { useParams } from 'react-router-dom';
import doctorOne from '../assets/images/doctor.jpg'
import doctorTwo from '../assets/images/doctor1.jpg'
import doctorThree from '../assets/images/doctor2.jpg'
import doctorFour from '../assets/images/doctor3.jpg'

const professionalsData = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialty: 'Psychologist',
    image: doctorOne,
    bio: 'Dr. John Doe is a licensed psychologist with over 15 years of experience in cognitive behavioral therapy...',
    certifications: ['PhD in Psychology', 'Licensed Psychologist'],
    contact: 'johndoe@example.com',
    availableTimes: ['Mon-Fri: 9am-5pm', 'Sat: 10am-2pm']
  },
  {
    id: 2,
    name: 'Jane Smith',
    specialty: 'Therapist',
    image: doctorTwo,
    bio: 'Jane Smith is a therapist specializing in anxiety and depression...',
    certifications: ['Masters in Counseling', 'Licensed Therapist'],
    contact: 'janesmith@example.com',
    availableTimes: ['Mon-Fri: 8am-4pm']
  },
  {
    id: 3,
    name: 'Aaron Smith',
    specialty: 'Clinical Social Worker',
    image: doctorThree, 
    bio: 'Provides support for mental health issues, including anxiety and depression.',
    certifications: ['Masters in Social Work', 'Licensed Clinical Social Worker'],
    contact: 'aaronsmith@example.com',
    availableTimes: ['Mon-Fri: 9am-6pm']
  },
  {
    id: 4,
    name: 'Mabel Aikins',
    specialty: 'Addiction Counselor',
    image: doctorFour,
    bio: 'Focuses on helping individuals overcome substance abuse and dependency.',
    certifications: ['Certified Addiction Counselor', 'Licensed Counselor'],
    contact: 'mabelaikins@example.com',
    availableTimes: ['Mon-Fri: 10am-4pm']
  },
];

const ProfessionalProfilePage = () => {
  const { id } = useParams();
  const professional = professionalsData.find((prof) => prof.id === parseInt(id));

  if (!professional) {
    return <p>Professional not found.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center space-x-6">
        <img
          className="w-32 h-32 rounded-full object-cover"
          src={professional.image}
          alt={professional.name}
        />
        <div>
          <h1 className="text-3xl font-bold">{professional.name}</h1>
          <p className="text-xl text-gray-600">{professional.specialty}</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Biography</h2>
        <p className="mt-2">{professional.bio}</p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <ul className="list-disc list-inside mt-2">
          {professional.certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2">{professional.contact}</p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Available Times</h2>
        <ul className="list-disc list-inside mt-2">
          {professional.availableTimes.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default ProfessionalProfilePage;
