// Dashboard Service
// Handles all dashboard-related API calls

const API_URL = '/api/dashboard';

export const dashboardService = {
  // Get dashboard statistics
  getStats: async () => {
    // GET /api/dashboard/stats
    // Returns aggregated user statistics
    // - Total users
    // - Revenue
    // - Active sessions
    // - Growth metrics
    
    const response = await fetch(`${API_URL}/stats`);
    return await response.json();
  },

  // Get recent activity feed
  getActivity: async () => {
    // GET /api/dashboard/activity
    // Returns recent user activity
    // Sorted by timestamp descending
    
    const response = await fetch(`${API_URL}/activity`);
    return await response.json();
  },

  // Get performance metrics
  getMetrics: async (timeRange = '7d') => {
    // GET /api/dashboard/metrics?range=7d
    // Returns performance data for specified time range
    // Supports: 24h, 7d, 30d, 90d
    
    const response = await fetch(`${API_URL}/metrics?range=${timeRange}`);
    return await response.json();
  },
};
