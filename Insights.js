import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the required scales
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Insights() {
  const [data, setData] = useState([]);
  const auth = getAuth();
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await auth.currentUser.getIdToken();
        const response = await axios.get('/api/carbon-footprint', {
          headers: { Authorization: token }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      // Properly destroy the previous chart instance if it exists
      chart.destroy();
    }

    // Create new chart instance
    const newChart = new ChartJS(chartRef.current, {
      type: 'line',
      data: {
        labels: data.map(entry => entry.date),
        datasets: [
          {
            label: 'Carbon Footprint (kg CO2)',
            data: data.map(entry => entry.emission),
            fill: false,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(75,192,192,1)',
          }
        ]
      }
    });

    // Store the new chart instance in the ref
    chartRef.current = newChart;
  }, [data]);

  return (
    <div>
      <h2>Carbon Footprint Insights</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default Insights;
