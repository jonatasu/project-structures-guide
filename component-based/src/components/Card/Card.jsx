// Card Component
// Displays content in a contained, styled card layout

import './Card.css';

const Card = ({ 
  title, 
  content, 
  imageUrl, 
  footer,
  onClick 
}) => {
  // Card component for displaying structured content
  // Supports optional image, title, content, and footer
  
  return (
    <div className="card" onClick={onClick}>
      {imageUrl && (
        <div className="card__image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="card__body">
        {title && <h3 className="card__title">{title}</h3>}
        {content && <p className="card__content">{content}</p>}
      </div>
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  );
};

export default Card;
