// Profile Card Component
// Displays user profile information

const ProfileCard = ({ user }) => {
  // Profile card component
  // - User avatar
  // - Name and bio
  // - Contact information
  // - Social links
  
  return (
    <div className="profile-card">
      <div className="profile-card__avatar">
        <img src={user.avatarUrl} alt={user.name} />
      </div>
      <div className="profile-card__info">
        <h2 className="profile-card__name">{user.name}</h2>
        <p className="profile-card__bio">{user.bio}</p>
        <div className="profile-card__contact">
          <span>{user.email}</span>
          <span>{user.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
