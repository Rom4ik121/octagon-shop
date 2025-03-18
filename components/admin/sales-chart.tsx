"use client"

import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export function SalesChart() {
  const data = {
    labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    datasets: [
      {
        label: "Продажи",
        data: [1200000, 1900000, 1500000, 2200000, 1800000, 2500000, 2100000],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => value.toLocaleString() + " сум",
        },
      },
    },
  }

  return <Line data={data} options={options} />
}

