// Authentication Validators
// Validation functions specific to auth feature

export const validateEmail = (email) => {
  // Validate email format
  // Returns error message or null if valid
  
  if (!email) {
    return 'Email is required';
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Invalid email format';
  }
  
  return null;
};

export const validatePassword = (password) => {
  // Validate password strength
  // Returns error message or null if valid
  
  if (!password) {
    return 'Password is required';
  }
  
  if (password.length < 8) {
    return 'Password must be at least 8 characters';
  }
  
  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter';
  }
  
  if (!/[0-9]/.test(password)) {
    return 'Password must contain at least one number';
  }
  
  return null;
};

export const validatePasswordMatch = (password, confirmPassword) => {
  // Validate password confirmation matches
  if (password !== confirmPassword) {
    return 'Passwords do not match';
  }
  return null;
};
