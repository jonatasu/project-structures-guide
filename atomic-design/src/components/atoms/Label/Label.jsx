// Label Atom
// Basic label component

const Label = ({ htmlFor, children, required = false }) => {
  // Atom: Simple label element
  // Used to label form inputs
  
  return (
    <label htmlFor={htmlFor} className="atom-label">
      {children}
      {required && <span className="atom-label__required">*</span>}
    </label>
  );
};

export default Label;
