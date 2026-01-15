// Dashboard Layout Component
// Main layout for the dashboard feature

const DashboardLayout = ({ children }) => {
  // Dashboard layout component
  // - Main dashboard container
  // - Sidebar navigation
  // - Content area for dashboard widgets
  // - Responsive grid layout
  
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        {/* Dashboard navigation menu */}
      </aside>
      <main className="dashboard-content">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
