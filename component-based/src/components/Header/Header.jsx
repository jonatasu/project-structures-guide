// Header Component
// Application header with branding and navigation

import './Header.css';
import Navigation from '../Navigation';

const Header = ({ logo, showNav = true, user }) => {
  // Header component containing app branding and navigation
  // Displays user authentication status
  
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          {logo || 'MyApp'}
        </div>
        {showNav && <Navigation />}
        <div className="header__user">
          {user ? `Welcome, ${user.name}` : 'Guest'}
        </div>
      </div>
    </header>
  );
};

export default Header;
