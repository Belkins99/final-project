
const API_BASE_URL = 'https://mentalhealth-api-vw65.onrender.com/api/v1/users';

export const register = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (response.ok) {
    throw new Error();
  }

  const data = await response.json();
  return data;
};

export const login = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data = await response.json();
  return data;
};

export const createSession = async () => {
  const response = await fetch(`${API_BASE_URL}/session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Session creation failed');
  }

  const data = await response.json();
  return data;
};
