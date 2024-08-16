import React, { useState } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: 'ANGEL OWUSU',
    email: 'angelowusu@example.com',
    phone: '+123456789',
    address: '123 Main St, Springfield, USA',
    profileImage: 'https://via.placeholder.com/150',
  });

  const [tempData, setTempData] = useState(profileData);

  const handleEditClick = () => {
    if (isEditing) {
      // Save logic (replace with actual save logic)
      setProfileData(tempData);
    }
    setIsEditing(!isEditing);
  };

  const handleCancelClick = () => {
    setTempData(profileData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempData((prevData) => ({
          ...prevData,
          profileImage: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id='2' className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src={tempData.profileImage}
          alt="Profile"
        />
        {isEditing && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2"
          />
        )}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{tempData.fullName}</h2>
          <p className="text-gray-600">{tempData.email}</p>
        </div>
      </div>
      <div className="mt-8 space-y-4">
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            value={tempData.fullName}
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
            value={tempData.email}
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
            value={tempData.phone}
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
            value={tempData.address}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div className="flex">
          <button
            onClick={handleEditClick}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
          {isEditing && (
            <button
              onClick={handleCancelClick}
              className="ml-4 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
