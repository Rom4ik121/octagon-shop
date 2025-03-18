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

export function VisitorsChart() {
  const data = {
    labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    datasets: [
      {
        label: "Уникальные посетители",
        data: [1200, 1900, 1500, 2200, 1800, 2500, 2100],
        borderColor: "rgb(53, 162, 235)",
        tension: 0.4,
      },
      {
        label: "Просмотры страниц",
        data: [2400, 3800, 3000, 4400, 3600, 5000, 4200],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => value.toLocaleString(),
        },
      },
    },
  }

  return <Line data={data} options={options} />
}

