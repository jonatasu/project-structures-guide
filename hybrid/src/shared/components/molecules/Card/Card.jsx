// Card Molecule - Shared Component
// Atomic design: Combination of atoms
// Used across multiple features

const Card = ({ title, children, footer }) => {
  // Shared molecule: card container
  // Combines multiple atoms (title, content area)
  // No business logic - pure UI
  // Reusable across all features
  
  return (
    <div className="shared-card">
      {title && (
        <div className="shared-card__header">
          <h3 className="shared-card__title">{title}</h3>
        </div>
      )}
      <div className="shared-card__body">
        {children}
      </div>
      {footer && (
        <div className="shared-card__footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
