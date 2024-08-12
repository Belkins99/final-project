import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+123456789',
    address: '123 Main St, Springfield, USA'
  });

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
    <div id='2' className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">ANGEL OWUSU</h2>
          <p className="text-gray-600">angelowusu@example.com</p>
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
            rows="3"
            value={profileData.address}
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
    </div>
  );
};

export default Profile;
