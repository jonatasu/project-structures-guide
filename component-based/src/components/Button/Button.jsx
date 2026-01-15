// Button Component
// Reusable button with multiple variants and states

import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  loading = false 
}) => {
  // Handle button click with loading and disabled states
  const handleClick = (e) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  return (
    // Button JSX with dynamic classes based on props
    // Supports variants: primary, secondary, danger, success
    // Supports sizes: small, medium, large
    <button 
      className={`button button--${variant} button--${size}`}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
