// HomePage Page
// Specific instance of MainLayout with real content

import MainLayout from '../../templates/MainLayout/MainLayout';
import ProductCard from '../../organisms/ProductCard/ProductCard';

const HomePage = ({ products, user }) => {
  // Page: Actual page with real content
  // Uses MainLayout template
  // Contains real data and content
  // This is what users actually see
  
  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };

  const handleAddToCart = (productId) => {
    console.log('Adding to cart:', productId);
  };

  const handleViewDetails = (productId) => {
    console.log('Viewing details:', productId);
  };

  return (
    <MainLayout user={user} onSearch={handleSearch}>
      <section className="page-home">
        <h1 className="page-home__title">Welcome to Our Store</h1>
        <p className="page-home__subtitle">
          Discover our amazing products
        </p>
        <div className="page-home__products">
          {products?.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
