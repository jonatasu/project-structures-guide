// Avatar Component
// Displays user avatar image

const Avatar = ({ src, alt, size = 'medium' }) => {
  // Avatar component for user profile pictures
  
  return (
    <img 
      src={src} 
      alt={alt}
      className={`avatar avatar--${size}`}
    />
  );
};

export default Avatar;
