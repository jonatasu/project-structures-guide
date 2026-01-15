// Application Root Component

import HomePage from './components/pages/HomePage/HomePage';

const App = () => {
  // Mock data for demonstration
  const mockProducts = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Amazing product',
      price: 29.99,
      imageUrl: '/images/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Another great product',
      price: 39.99,
      imageUrl: '/images/product2.jpg',
    },
  ];

  const mockUser = {
    name: 'John Doe',
    email: 'john@example.com',
  };

  return <HomePage products={mockProducts} user={mockUser} />;
};

export default App;
