// Dashboard Widget - Feature-specific Component
// Part of dashboard feature

import Button from '../../../shared/components/atoms/Button/Button';
import Card from '../../../shared/components/molecules/Card/Card';

const StatsWidget = ({ title, value, trend }) => {
  // Feature-specific dashboard component
  // Uses shared Card and Button atoms
  // Contains dashboard business logic
  
  return (
    <Card title={title}>
      <div className="stats-widget">
        <div className="stats-widget__value">{value}</div>
        {trend && (
          <div className={`stats-widget__trend stats-widget__trend--${trend.direction}`}>
            {trend.percentage}%
          </div>
        )}
        <Button variant="secondary" size="small">
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default StatsWidget;
