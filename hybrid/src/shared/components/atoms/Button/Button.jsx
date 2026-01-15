// Button Atom - Shared Component
// Atomic design: Most basic UI element
// Used across ALL features

const Button = ({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false 
}) => {
  // Shared atom: basic button
  // No business logic
  // Pure UI component
  // Used by multiple features
  
  return (
    <button
      type={type}
      className={`shared-button shared-button--${variant} shared-button--${size}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
