// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../assets/images/bg-image.jpeg';
import { useForm } from 'react-hook-form';
import { login } from '../../services/authService.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const handleLogin = async (data) => {
    setLoading(true);
    try {
      const res = await login(data.email, data.password);
      console.log('Response Data:', res);

      // Extract user role from response
      const role = res.user?.role; // Directly access user.role from response

      if (!role) throw new Error("User role is not available");

      toast.success('Login successful! Redirecting...');

      // Navigate to the appropriate dashboard based on role
      switch (role) {
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'user':
          navigate('/user-dashboard');
          break;
        case 'professional':
          navigate('/prof-dashboard');
          break;
        default:
          throw new Error("Unknown user role");
      }
    } catch (error) {
      console.error('Login Error:', error);
      toast.error(error.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    toast.info('Google login not implemented');
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center brightness-75"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <ToastContainer />
      <div className="w-full max-w-md p-8 bg-black bg-opacity-70 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4">
            <label className="block text-gray-200" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
              aria-label="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-200" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              aria-label="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <div className="mt-4 text-center">
            <span className="text-gray-200">Don't have an account?</span>
            <span
              className="text-blue-600 font-semibold cursor-pointer ml-1"
              onClick={() => navigate('/register')}
            >
              Register
            </span>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <span className="text-gray-200">or</span>
            <button
              className="flex items-center ml-4 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
              onClick={handleGoogleLogin}
              aria-label="Continue with Google"
            >
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
