// Authentication Hook
// Provides authentication functionality and state

import { useState, useContext, createContext } from 'react';
import { authService } from '../services/authService';

// Authentication context for global state
const AuthContext = createContext(null);

export const useAuth = () => {
  // Custom hook for authentication
  // Provides:
  // - login(credentials): Authenticate user
  // - logout(): Clear authentication
  // - signup(userData): Register new user
  // - user: Current authenticated user
  // - loading: Authentication request state
  // - error: Authentication errors
  
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  
  return context;
};

export const AuthProvider = ({ children }) => {
  // Provider component for authentication context
  // Wraps app to provide auth state globally
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    // Authenticate user with credentials
    setLoading(true);
    try {
      const userData = await authService.login(credentials);
      setUser(userData);
      return userData;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    // Clear user authentication
    await authService.logout();
    setUser(null);
  };

  const signup = async (userData) => {
    // Register new user
    setLoading(true);
    try {
      const newUser = await authService.signup(userData);
      setUser(newUser);
      return newUser;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    // AuthContext.Provider with value
    null
  );
};
