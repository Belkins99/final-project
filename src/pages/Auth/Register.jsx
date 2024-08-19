import React, { useState } from 'react';
import { register as apiRegister } from '../../services/authService.js';
import { FaLock, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import bgImage from '../../assets/images/bg-image.jpeg'; // Adjust path as needed
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const handleRegister = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const res = await apiRegister({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        role: data.role,
        phoneNumber: data.phoneNumber,
        location: data.location,
      });
      toast.success('Registration successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 1000); // Redirect after 2 seconds to allow the user to see the success message
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <ToastContainer />
      <div className="w-full max-w-4xl p-8 bg-black bg-opacity-70 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Register</h2>
        <form onSubmit={handleSubmit(handleRegister)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative mb-4">
            <input
              id="firstName"
              type="text"
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="First Name"
              {...register("firstName", { required: "FirstName is required" })}
            />
            <FaUser className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="relative mb-4">
            <input
              id="lastName"
              type="text"
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="Last Name"
              {...register("lastName", { required: "LastName is required" })}
            />
            <FaUser className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="relative mb-4">
            <input
              id="email"
              type="email"
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            <MdEmail className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="relative mb-4">
            <input
              id="password"
              type="password"
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            <FaLock className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="relative mb-4">
            <input
              id="confirmPassword"
              type="password"
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="Confirm Password"
              {...register("confirmPassword", { required: "Confirm Password is required" })}
            />
            <FaLock className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="relative mb-4">
            <input
              id="phoneNumber"
              type="text"
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="Phone Number"
              {...register("phoneNumber", { required: "Phone Number is required" })}
            />
            <CiLocationOn className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="relative mb-4">
            <input
              id="location"
              type="text"
              className="w-full px-10 py-2 border border-gray-300 rounded-md"
              placeholder="Location"
              {...register("location", { required: "Location is required" })}
            />
            <CiLocationOn className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <div className="mb-4">
            <label className="block text-white" htmlFor="role">Role</label>
            <select
              id="role"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              {...register("role", { required: "Role is required" })}
            >
              <option value="user">User</option>
              <option value="professional">Professional</option>
            </select>
          </div>
          <div className="mb-4 flex items-center">
            <input
              id="termsAndConditions"
              type="checkbox"
              className="mr-2"
              {...register("termsAndConditions", { required: "Terms And Conditions is required" })}
            />
            <label htmlFor="termsAndConditions" className="text-white">I agree to the terms and conditions</label>
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registering...' : 'Register'}
          </button>
          <div className="text-center mt-4 ml-28">
            <span className='text-gray-200'>Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
