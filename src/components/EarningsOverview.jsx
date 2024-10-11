// src/components/EarningsOverview.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EarningsOverview = ({ payments }) => {
  const earningsData = payments.reduce((acc, payment) => {
    const month = new Date().toLocaleString('default', { month: 'long' });
    acc[month] = (acc[month] || 0) + payment.amount;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(earningsData),
    datasets: [
      {
        label: 'Earnings (in $)',
        data: Object.values(earningsData),
        backgroundColor: '#00008B',
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Earnings Overview',
      },
    },
  };

  return (
    <div className="card mb-4 w-50 mx-auto mt-4">
      <div className="card-body">
        <h5 className="card-title">Earnings Overview</h5>
        <p className="card-text">Total Earnings: ${payments.reduce((acc, payment) => acc + payment.amount, 0)}</p>
        <div style={{ height: '300px' }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default EarningsOverview;
