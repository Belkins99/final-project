// src/pages/ProfessionalProfile.jsx
import React, { useState } from 'react';
import doctorOne from '../../../assets/images/doctor.jpg'

const ProfessionalProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+123456789',
    address: '123 Main St, Springfield, USA',
    specialty: 'Clinical Psychologist',
    bio: 'An experienced clinical psychologist specializing in cognitive behavioral therapy.',
  });

  const [clients, setClients] = useState([
    'Client A',
    'Client B',
    'Client C'
  ]);

  const [appointments, setAppointments] = useState([
    { date: '2024-08-14', time: '10:00 AM', client: 'Client A' },
    { date: '2024-08-15', time: '1:00 PM', client: 'Client B' },
    { date: '2024-08-16', time: '3:00 PM', client: 'Client C' },
  ]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src= {doctorOne}
          alt="Profile"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{profileData.fullName}</h2>
          <p className="text-gray-600">{profileData.specialty}</p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            value={profileData.fullName}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            value={profileData.email}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            value={profileData.phone}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <textarea
            name="address"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            rows="2"
            value={profileData.address}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="block text-gray-700">Specialty</label>
          <input
            type="text"
            name="specialty"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            value={profileData.specialty}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div>
          <label className="block text-gray-700">Bio</label>
          <textarea
            name="bio"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            rows="4"
            value={profileData.bio}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <button
          onClick={handleEditClick}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Clients</h3>
        <ul className="list-disc pl-6">
          {clients.map((client, index) => (
            <li key={index} className="text-gray-800">{client}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Upcoming Appointments</h3>
        <ul className="list-disc pl-6">
          {appointments.map((appointment, index) => (
            <li key={index} className="text-gray-800">
              {appointment.date} - {appointment.time} with {appointment.client}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
