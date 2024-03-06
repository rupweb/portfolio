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
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=QQQ&apikey=4VT4IV2JBAHCZ1X8`)
      .then(response => response.json())
      .then(data => {
        const timeSeries = data['Time Series (Daily)'];
        const dates = Object.keys(timeSeries).reverse();
        const closingPrices = dates.map(date => timeSeries[date]['4. close']);
        setStockData({ dates, closingPrices });
      })
      .catch(error => {
        console.error('Error fetching stock data', error);
      });
  }, []);

  const chartData = {
    labels: stockData.dates,
    datasets: [
      {
        label: 'QQQ Closing Prices',
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
          unit: 'day'
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
