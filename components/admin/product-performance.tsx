"use client"

import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function ProductPerformance() {
  const data = {
    labels: ["Nike Dri-FIT", "Adidas Ultra", "Puma Training", "Under Armour", "Reebok Classic"],
    datasets: [
      {
        label: "Продажи",
        data: [145, 98, 87, 76, 65],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
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
      },
    },
  }

  return <Bar data={data} options={options} />
}

