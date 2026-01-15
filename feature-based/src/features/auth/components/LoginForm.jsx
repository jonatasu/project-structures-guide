// Login Form Component
// Handles user authentication via email/password

import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { validateEmail, validatePassword } from '../utils/validators';

const LoginForm = ({ onSuccess, onError }) => {
  // Login form component with validation
  // - Email and password inputs
  // - Form validation
  // - Error handling
  // - Loading states
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { login, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate inputs
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    
    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }
    
    // Attempt login
    try {
      await login({ email, password });
      onSuccess?.();
    } catch (error) {
      onError?.(error);
    }
  };

  return (
    // Login form JSX with email and password inputs
    // Submit button with loading state
    // Error messages display
    null
  );
};

export default LoginForm;
