import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import jsonData from '../data/data.json';

type MonthIndex = {
  [key: string]: number;
};

const SalesChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const salesData = jsonData[0].sales;

      const monthsSet = new Set(
        salesData.map((sale) => new Date(sale.weekEnding).toLocaleString('default', { month: 'short' }).toUpperCase())
      );
      let months = Array.from(monthsSet);

      const monthIndex: MonthIndex = {
        JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11
      };

      months.sort((a, b) => monthIndex[a] - monthIndex[b]);

      const retailSales = salesData.map((sale) => sale.retailSales);
      const retailerMargin = salesData.map((sale) => sale.retailerMargin);

      const chart = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: months,
          datasets: [
            {
              label: 'Retail Sales',
              data: retailSales,
              borderColor: 'royalblue',
              borderWidth: 2,
              tension: 0.1,
              pointRadius: 0, 
              pointHoverRadius: 0, 
            },
            {
              label: 'Retailer Margin',
              data: retailerMargin,
              borderColor: 'gray',
              borderWidth: 2,
              tension: 0.1,
              pointRadius: 0, 
              pointHoverRadius: 0, 
              
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              position: 'chartArea',
              labels: {
                usePointStyle: true,
                boxWidth: 4,
                boxHeight: 4,
                font: {
                  size: 8,
                }
              }
            },
              title: {
                display: true,
                text: 'Retail Sales',
                position: 'top',
                align: 'start',
                font: {
                  size: 10,
                  weight: 'normal' 
                }
                
              },
            },
          scales: {
            y: {
              display: false, 
              suggestedMin: -10000, 
              suggestedMax: 3000000,
            },
            x: {
              grid: {
                display: false, 
              },
              ticks: {
                font: {
                  size: 8,
                  weight: '250', 
                },
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <canvas ref={chartRef} style={{ height: '275px' }} />;
};

export default SalesChart;
