// Authentication Service
// Handles all authentication-related API calls

const API_URL = '/api/auth';

export const authService = {
  // Login user with credentials
  login: async (credentials) => {
    // POST /api/auth/login
    // Sends email and password
    // Returns user data and auth token
    // Stores token in localStorage
    
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    
    if (!response.ok) {
      throw new Error('Login failed');
    }
    
    const data = await response.json();
    localStorage.setItem('authToken', data.token);
    return data.user;
  },

  // Logout current user
  logout: async () => {
    // POST /api/auth/logout
    // Clears authentication token
    // Removes token from localStorage
    
    localStorage.removeItem('authToken');
    await fetch(`${API_URL}/logout`, { method: 'POST' });
  },

  // Register new user
  signup: async (userData) => {
    // POST /api/auth/signup
    // Sends user registration data
    // Returns new user and auth token
    
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      throw new Error('Signup failed');
    }
    
    const data = await response.json();
    localStorage.setItem('authToken', data.token);
    return data.user;
  },

  // Get current authenticated user
  getCurrentUser: async () => {
    // GET /api/auth/me
    // Uses stored token to fetch current user
    // Returns user data or null if not authenticated
    
    const token = localStorage.getItem('authToken');
    if (!token) return null;
    
    const response = await fetch(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    
    if (!response.ok) return null;
    return await response.json();
  },
};
