// Auth Hook - Feature-specific
// Authentication logic for the auth feature

import { useState } from 'react';
import { authService } from '../services/authService';

export const useAuth = () => {
  // Feature-specific authentication hook
  // Manages auth state and operations
  // Only used within auth feature
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const userData = await authService.login(credentials);
      setUser(userData);
      return userData;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    authService.logout();
  };

  return { user, login, logout, loading };
};
