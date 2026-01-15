// ProductCard Organism
// Complex card component for displaying product information

import Button from '../../atoms/Button/Button';

const ProductCard = ({ 
  product,
  onAddToCart,
  onViewDetails 
}) => {
  // Organism: Product display unit
  // Combines multiple atoms and content
  // Atoms used: Button
  // Represents a complete product card
  
  return (
    <article className="organism-product-card">
      <div className="organism-product-card__image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="organism-product-card__content">
        <h3 className="organism-product-card__title">{product.name}</h3>
        <p className="organism-product-card__description">
          {product.description}
        </p>
        <div className="organism-product-card__price">
          ${product.price}
        </div>
      </div>
      <div className="organism-product-card__actions">
        <Button onClick={() => onViewDetails(product.id)} variant="secondary">
          View Details
        </Button>
        <Button onClick={() => onAddToCart(product.id)}>
          Add to Cart
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
