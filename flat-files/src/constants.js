// Application Constants
// Centralized location for all constant values used across the app

// Application Configuration
export const APP_NAME = 'Flat Files App';
export const APP_VERSION = '1.0.0';

// API Configuration
export const API_TIMEOUT = 5000; // milliseconds
export const MAX_RETRIES = 3;

// UI Constants
export const ITEMS_PER_PAGE = 10;
export const DEBOUNCE_DELAY = 300; // milliseconds

// Theme Colors
export const COLORS = {
  PRIMARY: '#007bff',
  SECONDARY: '#6c757d',
  SUCCESS: '#28a745',
  DANGER: '#dc3545',
  WARNING: '#ffc107',
  INFO: '#17a2b8',
};

// Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  PROFILE: '/profile',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  USER: 'user',
  TOKEN: 'auth_token',
  PREFERENCES: 'user_preferences',
};

// Regular Expressions
export const REGEX = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\+?[\d\s-()]+$/,
  URL: /^https?:\/\/.+/,
};
