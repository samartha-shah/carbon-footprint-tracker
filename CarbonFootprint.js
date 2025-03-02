import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';

function CarbonFootprint() {
  const [carbonFootprint, setCarbonFootprint] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const fetchCarbonFootprint = async () => {
      try {
        const token = await auth.currentUser.getIdToken();
        const response = await axios.get('/api/carbon-footprint', {
          headers: { Authorization: token }
        });
        setCarbonFootprint(response.data.carbonFootprint);
      } catch (error) {
        setError('Error fetching carbon footprint');
      } finally {
        setLoading(false);
      }
    };
    fetchCarbonFootprint();
  }, []);

  return (
    <div>
      <h2>Carbon Footprint</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Your carbon footprint: {carbonFootprint} kg CO2</p>
      )}
    </div>
  );
}

export default CarbonFootprint;
