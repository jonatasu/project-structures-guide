// Dashboard Data Hook
// Fetches and manages dashboard data

import { useState, useEffect } from 'react';
import { dashboardService } from '../services/dashboardService';

export const useDashboardData = () => {
  // Custom hook for dashboard data
  // Fetches:
  // - User statistics
  // - Recent activity
  // - Performance metrics
  // - Notifications
  
  const [stats, setStats] = useState(null);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch dashboard data on mount
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const [statsData, activityData] = await Promise.all([
          dashboardService.getStats(),
          dashboardService.getActivity(),
        ]);
        setStats(statsData);
        setActivity(activityData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Refresh dashboard data
  const refresh = async () => {
    // Manually trigger data refresh
  };

  return { stats, activity, loading, error, refresh };
};
