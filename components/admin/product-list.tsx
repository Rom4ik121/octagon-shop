"use client"

import { useState } from "react"
import { Edit2, Trash2, Eye, EyeOff } from "lucide-react"

export function ProductList() {
  const [products] = useState([
    {
      id: 1,
      name: "Nike Dri-FIT Футболка",
      category: "Мужская одежда",
      price: "390000",
      stock: 45,
      status: "active",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      category: "Обувь",
      price: "1290000",
      stock: 23,
      status: "active",
    },
    {
      id: 3,
      name: "Puma Training Шорты",
      category: "Мужская одежда",
      price: "350000",
      stock: 0,
      status: "inactive",
    },
  ])

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b dark:border-gray-700">
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">ID</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Название</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Категория</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Цена</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">В наличии</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Статус</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Действия</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b dark:border-gray-700">
              <td className="py-4 text-sm font-medium dark:text-white">#{product.id}</td>
              <td className="py-4 text-sm dark:text-gray-300">{product.name}</td>
              <td className="py-4 text-sm dark:text-gray-300">{product.category}</td>
              <td className="py-4 text-sm dark:text-gray-300">{product.price} сум</td>
              <td className="py-4 text-sm dark:text-gray-300">{product.stock}</td>
              <td className="py-4">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    product.status === "active"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                  }`}
                >
                  {product.status === "active" ? "Активен" : "Неактивен"}
                </span>
              </td>
              <td className="py-4">
                <div className="flex items-center space-x-2">
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                    {product.status === "active" ? (
                      <Eye className="h-5 w-5 text-green-600" />
                    ) : (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                    <Edit2 className="h-5 w-5 text-blue-600" />
                  </button>
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                    <Trash2 className="h-5 w-5 text-red-600" />
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

