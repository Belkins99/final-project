// src/services/resourceService.js
import axios from 'axios';

const API_BASE_URL = 'https://mentalhealth-api-vw65.onrender.com/api/v1/resources'; // Update with your actual endpoint

// Fetch all resources
export const fetchResources = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data; // Assuming the API returns the data in the response body
  } catch (error) {
    console.error('Error fetching resources:', error);
    throw error; // Propagate the error to handle it in the component
  }
};
