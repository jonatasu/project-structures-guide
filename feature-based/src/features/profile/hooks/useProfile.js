// Profile Hook
// Manages user profile data and updates

import { useState, useEffect } from 'react';
import { profileService } from '../services/profileService';

export const useProfile = (userId) => {
  // Custom hook for user profile management
  // Provides:
  // - profile: User profile data
  // - updateProfile(data): Update profile information
  // - uploadAvatar(file): Upload new avatar image
  // - loading: Request state
  // - error: Error messages
  
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch profile on mount or when userId changes
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const data = await profileService.getProfile(userId);
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchProfile();
    }
  }, [userId]);

  const updateProfile = async (updates) => {
    // Update user profile
    try {
      const updated = await profileService.updateProfile(userId, updates);
      setProfile(updated);
      return updated;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const uploadAvatar = async (file) => {
    // Upload new avatar image
    try {
      const avatarUrl = await profileService.uploadAvatar(userId, file);
      setProfile({ ...profile, avatarUrl });
      return avatarUrl;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  return { profile, updateProfile, uploadAvatar, loading, error };
};
