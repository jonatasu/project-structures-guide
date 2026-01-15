// FormField Molecule
// Combines Label + Input + Error Message atoms

import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';

const FormField = ({ 
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  placeholder 
}) => {
  // Molecule: Combines multiple atoms
  // Creates a complete form field unit
  // Atoms used: Label, Input
  // Adds error message functionality
  
  return (
    <div className="molecule-form-field">
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <Input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      {error && <span className="molecule-form-field__error">{error}</span>}
    </div>
  );
};

export default FormField;
