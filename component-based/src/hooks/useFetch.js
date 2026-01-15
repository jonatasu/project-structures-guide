// Custom Hook: useFetch
// Reusable hook for data fetching with loading and error states

import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
  // Custom hook for fetching data
  // Returns data, loading state, and error state
  // Automatically refetches when URL changes
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data when component mounts or URL changes
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Refetch when URL changes

  return { data, loading, error };
};

export default useFetch;
