import React, { useState } from 'react';
import { register } from '../../services/authService.js';
import { FaLock, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import bgImage from '../../assets/images/bg-image.jpeg'; // Adjust path as needed

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [role, setRole] = useState('user');
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!termsAndConditions) {
      setError("You must agree to the terms and conditions");
      return;
    }
    try {
      await register({
        firstName,
        lastName,
        email,
        password,
        role,
        phoneNumber,
        location,
        termsAndConditions,
      });
      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => {
        history.push('/login'); // Redirect to login page after successful registration
      }, 3000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="w-full max-w-4xl p-8 bg-white bg-opacity-70 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-900">Register</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {success && <p className="text-green-500 mb-4 text-center">{success}</p>}
        <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative mb-4">
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="First Name"
              required
            />
            <FaUser className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="relative mb-4">
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="Last Name"
              required
            />
            <FaUser className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="relative mb-4">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="Email"
              required
            />
            <MdEmail className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="relative mb-4">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="Password"
              required
            />
            <FaLock className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="relative mb-4">
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="Confirm Password"
              required
            />
            <FaLock className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="relative mb-4">
            <input
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="Phone Number"
            />
            <CiLocationOn className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="relative mb-4">
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="Location"
            />
            <CiLocationOn className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="user">User</option>
              <option value="professional">Professional</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="termsAndConditions"
              type="checkbox"
              checked={termsAndConditions}
              onChange={(e) => setTermsAndConditions(e.target.checked)}
              className="mr-2"
              required
            />
            <label htmlFor="termsAndConditions" className="text-gray-700">I agree to the terms and conditions</label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Register
          </button>
          <div className="text-center mt-4 ml-28">
            <span>Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
