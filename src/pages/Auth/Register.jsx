import React, { useState } from 'react';
import { register as apiRegister } from '../../services/authService.js';
import { FaLock, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import bgImage from '../../assets/images/bg-image.jpeg'; // Adjust path as needed
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [error, setError] =useState()
  const [success, setSucess] = useState()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });


  const handleRegister = async (data) => {
    console.log(data);
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    try {
      
      const res= await apiRegister({
        firstName:data.firstName,
        lastName:data.lastName,
        email:data.email,
        password:data.password,
        role:data.role,
        phoneNumber:data.phoneNumber,
        location:data.location,
      
      });
      // setSuccess('Registration successful! Redirecting to login...');
      navigate('/login')
      console.log(res.message)

    } catch (error) {
      setError(error.message);
    }
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="w-full max-w-4xl p-8 bg-black bg-opacity-70 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Register</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {success && <p className="text-green-500 mb-4 text-center">{success}</p>}
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
              <option value="admin">Admin</option>
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
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Register
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
