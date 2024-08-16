import axios from 'axios';
import { apiClient } from './config';

const API_BASE_URL = 'https://mentalhealth-api-vw65.onrender.com/api/v1/users';

// Register function to handle user registration
export const register = async (userData) => {
  const response = await apiClient.post(`${API_BASE_URL}/auth/register`, userData);
  return response.data;
};

// Login function to handle user login
export const login = async (email, password) => {
  const response = await apiClient.post(`${API_BASE_URL}/auth/token`, { email, password });
  return response.data;
};

