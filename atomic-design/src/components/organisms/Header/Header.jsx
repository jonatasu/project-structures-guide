// Header Organism
// Complex component combining multiple molecules and atoms

import SearchBar from '../../molecules/SearchBar/SearchBar';
import Button from '../../atoms/Button/Button';

const Header = ({ logo, user, onSearch, onLogin, onLogout }) => {
  // Organism: Complex UI section
  // Combines multiple molecules and atoms
  // Molecules used: SearchBar
  // Atoms used: Button
  // Represents a complete header section
  
  return (
    <header className="organism-header">
      <div className="organism-header__logo">
        {logo || 'MyApp'}
      </div>
      <div className="organism-header__search">
        <SearchBar onSearch={onSearch} />
      </div>
      <div className="organism-header__actions">
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <Button onClick={onLogout} variant="secondary" size="small">
              Logout
            </Button>
          </>
        ) : (
          <Button onClick={onLogin} size="small">
            Login
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
