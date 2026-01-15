// Utility Functions
// Collection of helper functions used throughout the application

// Format date to readable string
export const formatDate = (date) => {
  // Converts Date object or timestamp to human-readable format
  // Example: "Jan 15, 2024"
  return new Date(date).toLocaleDateString();
};

// Validate email address
export const isValidEmail = (email) => {
  // Checks if email matches valid email pattern
  // Returns boolean
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Debounce function for input handling
export const debounce = (func, delay) => {
  // Returns debounced version of function
  // Useful for search inputs, resize handlers, etc.
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// Generate unique ID
export const generateId = () => {
  // Creates unique identifier for list items, keys, etc.
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Deep clone object
export const deepClone = (obj) => {
  // Creates deep copy of object to avoid mutations
  return JSON.parse(JSON.stringify(obj));
};
