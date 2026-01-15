// API Service
// Handles all HTTP requests to external APIs

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.example.com';

// Generic fetch wrapper with error handling
const fetchWrapper = async (url, options = {}) => {
  // Wraps fetch with common error handling
  // Includes authentication headers
  // Parses JSON responses
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// GET request
export const get = (endpoint) => {
  return fetchWrapper(`${API_BASE_URL}${endpoint}`);
};

// POST request
export const post = (endpoint, data) => {
  return fetchWrapper(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

// PUT request
export const put = (endpoint, data) => {
  return fetchWrapper(`${API_BASE_URL}${endpoint}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

// DELETE request
export const del = (endpoint) => {
  return fetchWrapper(`${API_BASE_URL}${endpoint}`, {
    method: 'DELETE',
  });
};
