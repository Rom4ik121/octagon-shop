"use client"

import { useState } from "react"
import { Eye, Truck, CheckCircle, XCircle } from "lucide-react"

export function OrderList() {
  const [orders] = useState([
    {
      id: "ORD001",
      customer: "Алексей Иванов",
      date: "2024-03-18 15:30",
      status: "new",
      total: "450000",
      items: 3,
    },
    {
      id: "ORD002",
      customer: "Мария Петрова",
      date: "2024-03-18 14:45",
      status: "processing",
      total: "780000",
      items: 2,
    },
    {
      id: "ORD003",
      customer: "Дмитрий Сидоров",
      date: "2024-03-17 09:20",
      status: "delivered",
      total: "1200000",
      items: 4,
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return (
          <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            Новый
          </span>
        )
      case "processing":
        return (
          <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            В обработке
          </span>
        )
      case "delivered":
        return (
          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            Доставлен
          </span>
        )
      default:
        return (
          <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
            {status}
          </span>
        )
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b dark:border-gray-700">
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">ID</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Покупатель</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Дата</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Статус</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Сумма</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Товары</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Действия</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b dark:border-gray-700">
              <td className="py-4 text-sm font-medium dark:text-white">{order.id}</td>
              <td className="py-4 text-sm dark:text-gray-300">{order.customer}</td>
              <td className="py-4 text-sm dark:text-gray-300">{order.date}</td>
              <td className="py-4">{getStatusBadge(order.status)}</td>
              <td className="py-4 text-sm dark:text-gray-300">{order.total} сум</td>
              <td className="py-4 text-sm dark:text-gray-300">{order.items}</td>
              <td className="py-4">
                <div className="flex items-center space-x-2">
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                    <Eye className="h-5 w-5 text-blue-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                    <Truck className="h-5 w-5 text-yellow-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                    <XCircle className="h-5 w-5 text-red-600" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

