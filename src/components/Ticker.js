import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

const Ticker = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=QQQ&interval=5min&apikey=4VT4IV2JBAHCZ1X8`)
      .then(response => response.json())
      .then(data => {
        if (data['Note'] || data['Information']) {
          console.error('API limit reached or other information:', data);
        } else if (data['Time Series (5min)']) {
          const timeSeries = data['Time Series (5min)']; // Adjust according to the interval
          const timestamps = Object.keys(timeSeries).reverse();
          const closingPrices = timestamps.map(timestamp => timeSeries[timestamp]['4. close']);
          setStockData({ timestamps, closingPrices });
        } else {
          console.error('Unexpected response', data);
        }
      })
      .catch(error => {
        console.error('Error fetching stock data', error);
      });
  }, []);

  const chartData = {
    labels: stockData.timestamps,
    datasets: [
      {
        label: 'QQQ Intraday Prices (5min intervals)',
        data: stockData.closingPrices,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute',
          displayFormats: {
            minute: 'HH:mm'
          }
        }
      },
      y: {
        // Configuration for the y-axis
      }
    }
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Ticker;
