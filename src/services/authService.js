// services/authService.js
import axios from 'axios';

const API_BASE_URL = 'https://mentalhealth-api-vw65.onrender.com/api/v1/users';

// Create an instance of axios with base configuration
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Register function to handle user registration
export const register = async (userData) => {
  const response = await apiClient.post('/auth/register', userData);
  return response.data;
};

// Login function to handle user login
export const login = async (email, password) => {
  const response = await apiClient.post('/auth/token', { email, password });
  return response.data;
};
