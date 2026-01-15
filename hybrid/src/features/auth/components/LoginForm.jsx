// LoginForm - Feature-specific Component
// Part of the auth feature, uses shared components

import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Button from '../../../shared/components/atoms/Button/Button';
import Card from '../../../shared/components/molecules/Card/Card';

const LoginForm = ({ onSuccess }) => {
  // Feature-specific login form
  // Uses shared Button and Card components
  // Contains auth feature business logic
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      onSuccess?.();
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Card title="Login">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button type="submit" loading={loading}>
          Login
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
