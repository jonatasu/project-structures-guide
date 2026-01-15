// MainLayout Template
// Page structure template that shows component placement

import Header from '../../organisms/Header/Header';

const MainLayout = ({ children, user, onSearch, onLogin, onLogout }) => {
  // Template: Page layout structure
  // Shows where organisms and content are placed
  // No real content - just structure
  // Organisms used: Header, Footer (if added)
  
  return (
    <div className="template-main-layout">
      <Header 
        user={user}
        onSearch={onSearch}
        onLogin={onLogin}
        onLogout={onLogout}
      />
      <main className="template-main-layout__content">
        {children}
      </main>
      <footer className="template-main-layout__footer">
        <p>&copy; 2024 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
