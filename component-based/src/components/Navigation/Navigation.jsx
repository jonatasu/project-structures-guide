// Navigation Component
// Main navigation menu

import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="/">Home</a>
        </li>
        <li className="navigation__item">
          <a href="/about">About</a>
        </li>
        <li className="navigation__item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
