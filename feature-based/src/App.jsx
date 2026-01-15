// Root Application Component
// Main app component that composes all features

import { AuthProvider } from './features/auth';
import { DashboardLayout } from './features/dashboard';

const App = () => {
  // Root component
  // - Sets up global providers
  // - Manages routing between features
  // - Handles app-wide layout
  
  return (
    <AuthProvider>
      <div className="app">
        {/* Router and feature composition goes here */}
        <DashboardLayout>
          {/* Feature components render here */}
        </DashboardLayout>
      </div>
    </AuthProvider>
  );
};

export default App;
