// Root Application Component
// Orchestrates the main application layout and routing

import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Button from './components/Button';

const App = () => {
  // Main application component
  // Manages global state and layout
  
  return (
    <div className="app">
      <Header logo="Component-Based App" />
      <main className="app__content">
        {/* Application content goes here */}
        <Card 
          title="Welcome"
          content="This is a component-based structure example"
        />
        <Button onClick={() => console.log('Clicked')}>
          Click Me
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default App;
