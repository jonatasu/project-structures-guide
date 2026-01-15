// Shared useFetch Hook
// Generic data fetching hook used across features

import { useState, useEffect } from 'react';

export const useFetch = (url, options = {}) => {
  // Shared custom hook
  // No business logic - generic utility
  // Used by multiple features
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
