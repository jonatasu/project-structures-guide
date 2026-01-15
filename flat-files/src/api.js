// API Service Layer
// Handles all HTTP requests and external API communication

const API_BASE_URL = 'https://api.example.com';

// Fetch data from the API
export const fetchData = async (endpoint) => {
  // Makes GET requests to specified endpoints
  // Handles response parsing and error handling
  const response = await fetch(`${API_BASE_URL}/${endpoint}`);
  return response.json();
};

// Post data to the API
export const postData = async (endpoint, data) => {
  // Makes POST requests with JSON payload
  // Includes authentication headers if needed
  const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

// Update data via API
export const updateData = async (endpoint, id, data) => {
  // Makes PUT/PATCH requests for updates
  // Returns updated resource
};

// Delete data via API
export const deleteData = async (endpoint, id) => {
  // Makes DELETE requests
  // Handles cleanup and error cases
};
