import React, { useState } from 'react';
import { login } from '../../services/authService.js';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import bgImage from '../../assets/images/bg-image.jpeg'; // Adjust path as needed

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem('token', data.token);
      navigate('/dashboard'); // Redirect to dashboard on successful login
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-md p-8 bg-gray-400 bg-opacity-30 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Login</h2>
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-800" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 font-semibold" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <span className="text-gray-700">Don't have an account?</span> 
            <span
              className="text-blue-600 font-semibold cursor-pointer ml-1"
              onClick={() => navigate('/register')} // Redirect to register page
            >
              Register
            </span>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <span className="text-gray-700">or</span>
            <button className="flex items-center ml-4 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100">
              <FcGoogle className="mr-2 text-2xl" /> 
              <span className="text-gray-700">Continue with Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
