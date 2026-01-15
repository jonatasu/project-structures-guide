// Button Atom
// Basic button component - cannot be broken down further

const Button = ({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false 
}) => {
  // Atom: Simplest building block
  // Single purpose: clickable button
  // No dependencies on other components
  // Variants: primary, secondary, tertiary, danger
  // Sizes: small, medium, large
  
  return (
    <button
      type={type}
      className={`atom-button atom-button--${variant} atom-button--${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
