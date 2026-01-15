// Profile Service
// Handles all profile-related API calls

const API_URL = '/api/profile';

export const profileService = {
  // Get user profile by ID
  getProfile: async (userId) => {
    // GET /api/profile/:userId
    // Returns complete user profile data
    
    const response = await fetch(`${API_URL}/${userId}`);
    return await response.json();
  },

  // Update user profile
  updateProfile: async (userId, updates) => {
    // PUT /api/profile/:userId
    // Updates profile with provided data
    // Returns updated profile
    
    const response = await fetch(`${API_URL}/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    return await response.json();
  },

  // Upload avatar image
  uploadAvatar: async (userId, file) => {
    // POST /api/profile/:userId/avatar
    // Uploads avatar image file
    // Returns new avatar URL
    
    const formData = new FormData();
    formData.append('avatar', file);
    
    const response = await fetch(`${API_URL}/${userId}/avatar`, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    return data.avatarUrl;
  },
};
