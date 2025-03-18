"use client"

import type React from "react"

import { useState } from "react"
import { Upload } from "lucide-react"

export function BannerUpload() {
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    // Здесь будет логика загрузки файла
  }

  return (
    <div>
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          dragActive
            ? "border-black dark:border-white bg-gray-50 dark:bg-gray-800"
            : "border-gray-300 dark:border-gray-700"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Перетащите изображение сюда или{" "}
          <button className="text-black dark:text-white font-medium hover:underline">выберите файл</button>
        </p>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">PNG, JPG до 10MB</p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Заголовок баннера"
            className="flex-1 px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <input
            type="text"
            placeholder="Подзаголовок"
            className="flex-1 px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Текст кнопки"
            className="flex-1 px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <input
            type="text"
            placeholder="Ссылка"
            className="flex-1 px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>
        <button className="w-full bg-black text-white dark:bg-gray-700 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
          Загрузить баннер
        </button>
      </div>
    </div>
  )
}

