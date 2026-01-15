// Auth Service - Feature-specific
// API calls specific to authentication

export const authService = {
  login: async (credentials) => {
    // POST /api/auth/login
    // Feature-specific authentication logic
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  },

  logout: async () => {
    // POST /api/auth/logout
    await fetch('/api/auth/logout', { method: 'POST' });
    localStorage.removeItem('token');
  },

  signup: async (userData) => {
    // POST /api/auth/signup
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return await response.json();
  },
};
