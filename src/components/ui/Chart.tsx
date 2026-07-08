'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ChartProps {
  type?: 'line' | 'bar';
  data: any;
  height?: number;
}

export const Chart: React.FC<ChartProps> = ({ type = 'line', data, height = 300 }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#475569',
          font: {
            family: "'Inter', sans-serif",
            size: 12,
          }
        }
      },
      tooltip: {
        backgroundColor: '#0F172A',
        titleFont: { family: "'Inter', sans-serif", size: 13 },
        bodyFont: { family: "'Inter', sans-serif", size: 12 },
        padding: 12,
        cornerRadius: 8,
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#475569', font: { family: "'Inter', sans-serif", size: 11 } }
      },
      y: {
        border: { display: false },
        grid: { color: '#E2E8F0' },
        ticks: { color: '#475569', font: { family: "'Inter', sans-serif", size: 11 } }
      }
    }
  };

  return (
    <div style={{ height, width: '100%' }}>
      {type === 'line' ? <Line options={options} data={data} /> : <Bar options={options} data={data} />}
    </div>
  );
};
