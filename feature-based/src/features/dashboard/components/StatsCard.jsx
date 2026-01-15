// Stats Card Component
// Displays a single statistic in the dashboard

const StatsCard = ({ title, value, icon, trend, color }) => {
  // Stats card for dashboard metrics
  // - Title and value display
  // - Optional icon
  // - Trend indicator (up/down)
  // - Color customization
  
  return (
    <div className={`stats-card stats-card--${color}`}>
      <div className="stats-card__header">
        {icon && <span className="stats-card__icon">{icon}</span>}
        <h3 className="stats-card__title">{title}</h3>
      </div>
      <div className="stats-card__value">{value}</div>
      {trend && (
        <div className={`stats-card__trend stats-card__trend--${trend.direction}`}>
          {trend.value}
        </div>
      )}
    </div>
  );
};

export default StatsCard;
