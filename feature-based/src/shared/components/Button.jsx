// Shared Button Component
// Reusable button component available to all features

const Button = ({ children, onClick, variant = 'primary', disabled = false }) => {
  // Shared button component
  // Used across multiple features
  // Supports multiple variants and states
  
  return (
    <button 
      className={`btn btn--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
