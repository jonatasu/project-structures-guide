// Input Atom
// Basic input field component

const Input = ({ 
  type = 'text',
  value,
  onChange,
  placeholder,
  name,
  id,
  disabled = false,
  required = false 
}) => {
  // Atom: Basic input element
  // Single purpose: text input
  // Cannot be simplified further
  
  return (
    <input
      type={type}
      className="atom-input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      id={id}
      disabled={disabled}
      required={required}
    />
  );
};

export default Input;
