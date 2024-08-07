
import React from 'react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
          <p className="text-gray-600">johndoe@example.com</p>
        </div>
      </div>
      <div className="mt-8 space-y-4">
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            value="John Doe"
            readOnly
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            value="johndoe@example.com"
            readOnly
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone</label>
          <input
            type="text"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            value="+123456789"
            readOnly
          />
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <textarea
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            rows="3"
            readOnly
          >
            123 Main St, Springfield, USA
          </textarea>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
