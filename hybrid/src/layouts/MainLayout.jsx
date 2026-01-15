// Main Layout Template
// Shared layout used across features

import Header from '../shared/components/organisms/Header/Header';

const MainLayout = ({ children }) => {
  // Shared layout template
  // Provides consistent structure across features
  // Uses shared organisms (Header, Footer)
  
  return (
    <div className="layout-main">
      <Header />
      <main className="layout-main__content">
        {children}
      </main>
      <footer className="layout-main__footer">
        <p>&copy; 2024 Hybrid App</p>
      </footer>
    </div>
  );
};

export default MainLayout;
