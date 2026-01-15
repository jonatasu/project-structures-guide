// SearchBar Molecule
// Combines Input + Button atoms for search functionality

import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

const SearchBar = ({ value, onChange, onSearch, placeholder = 'Search...' }) => {
  // Molecule: Search functionality unit
  // Combines Input and Button atoms
  // Single purpose: search interface
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(value);
  };

  return (
    <form className="molecule-search-bar" onSubmit={handleSubmit}>
      <Input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchBar;
