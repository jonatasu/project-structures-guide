// Root Application Component
// Combines features using shared components and layouts

import MainLayout from './layouts/MainLayout';
import { LoginForm } from './features/auth';
import { StatsWidget } from './features/dashboard';

const App = () => {
  // Root component
  // Orchestrates features and shared components
  // Hybrid structure in action:
  // - Features: auth, dashboard
  // - Shared: layouts, components
  
  return (
    <MainLayout>
      <div className="app">
        {/* Feature components using shared UI */}
        <LoginForm onSuccess={() => console.log('Logged in')} />
        <StatsWidget 
          title="Total Users" 
          value="1,234" 
          trend={{ direction: 'up', percentage: 12 }}
        />
      </div>
    </MainLayout>
  );
};

export default App;
