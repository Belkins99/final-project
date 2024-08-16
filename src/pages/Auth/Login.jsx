import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom'; 
import bgImage from '../../assets/images/bg-image.jpeg'; 
import { useForm } from 'react-hook-form';
import { login } from '../../services/authService.js';


const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const handleLogin = async (data) => {
    try {
      const res = await login(
         data.email, 
         data.password
      );
      addToLocalStorage(res.data.accessToken, res.data.user); 
      navigate('/dashboard'); 
    } catch (error) {
      setError(error.message || "An unexpected error occurred");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-md p-8 bg-gray-400 bg-opacity-30 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Login</h2>
      
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4">
            <label className="block text-gray-800" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })} 
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 font-semibold" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
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
              onClick={() => navigate('/register')} 
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
