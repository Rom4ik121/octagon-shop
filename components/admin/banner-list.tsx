"use client"

import { useState } from "react"
import { Edit2, Trash2, Eye, EyeOff } from "lucide-react"

export function BannerList() {
  const [banners] = useState([
    {
      id: 1,
      title: "Спортивная коллекция 2025",
      subtitle: "Скидка 20% на все товары",
      image: "/placeholder.svg?height=200&width=400",
      active: true,
    },
    {
      id: 2,
      title: "Новая коллекция Nike",
      subtitle: "Эксклюзивные модели",
      image: "/placeholder.svg?height=200&width=400",
      active: true,
    },
    {
      id: 3,
      title: "Adidas Весна 2025",
      subtitle: "Предзаказ открыт",
      image: "/placeholder.svg?height=200&width=400",
      active: false,
    },
  ])

  return (
    <div className="space-y-4">
      {banners.map((banner) => (
        <div key={banner.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <img src={banner.image || "/placeholder.svg"} alt={banner.title} className="w-32 h-20 object-cover rounded" />
          <div className="flex-1">
            <h3 className="font-medium dark:text-white">{banner.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{banner.subtitle}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
              {banner.active ? (
                <Eye className="h-5 w-5 text-green-600" />
              ) : (
                <EyeOff className="h-5 w-5 text-gray-400" />
              )}
            </button>
            <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
              <Edit2 className="h-5 w-5 text-blue-600" />
            </button>
            <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
              <Trash2 className="h-5 w-5 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

