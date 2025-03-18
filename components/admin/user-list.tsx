"use client"

import { useState } from "react"
import { Edit2, Trash2, Shield } from "lucide-react"

export function UserList() {
  const [users] = useState([
    {
      id: 1,
      name: "Алексей Иванов",
      email: "alex@example.com",
      role: "admin",
      status: "active",
      lastLogin: "2024-03-18 15:30",
    },
    {
      id: 2,
      name: "Мария Петрова",
      email: "maria@example.com",
      role: "manager",
      status: "active",
      lastLogin: "2024-03-18 14:45",
    },
    {
      id: 3,
      name: "Дмитрий Сидоров",
      email: "dmitry@example.com",
      role: "user",
      status: "inactive",
      lastLogin: "2024-03-17 09:20",
    },
  ])

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b dark:border-gray-700">
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">ID</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Имя</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Email</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Роль</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Статус</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Последний вход</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Действия</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b dark:border-gray-700">
              <td className="py-4 text-sm font-medium dark:text-white">#{user.id}</td>
              <td className="py-4 text-sm dark:text-gray-300">{user.name}</td>
              <td className="py-4 text-sm dark:text-gray-300">{user.email}</td>
              <td className="py-4">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    user.role === "admin"
                      ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                      : user.role === "manager"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  {user.role}
                </span>
              </td>
              <td className="py-4">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    user.status === "active"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="py-4 text-sm dark:text-gray-300">{user.lastLogin}</td>
              <td className="py-4">
                <div className="flex items-center space-x-2">
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                    <Shield className="h-5 w-5 text-purple-600" />
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

