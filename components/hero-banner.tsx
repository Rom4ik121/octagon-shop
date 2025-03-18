"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

interface HeroBannerProps {
  title: string
  subtitle: string
  buttonText: string
  buttonLink: string
  backgroundImage?: string
}

export function HeroBanner({
  title = "Спортивная коллекция 2025",
  subtitle = "Скидка 20% на все товары до конца месяца",
  buttonText = "Смотреть каталог",
  buttonLink = "/catalog",
  backgroundImage = "/placeholder.svg?height=500&width=1200",
}: HeroBannerProps) {
  const [bannerImage, setBannerImage] = useState(backgroundImage)

  // Функция для изменения фонового изображения
  const changeBanner = (newImageUrl: string) => {
    setBannerImage(newImageUrl)
  }

  // Для демонстрации - можно удалить в продакшене
  useEffect(() => {
    // Добавляем функцию в глобальный объект window для доступа из консоли
    // @ts-ignore
    window.changeBanner = changeBanner
  }, [])

  return (
    <section
      className="relative bg-gray-100 dark:bg-gray-800 h-[500px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('${bannerImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h1>
          <p className="text-lg mb-6 text-white">{subtitle}</p>
          <Link
            href={buttonLink}
            className="inline-flex items-center bg-white text-black px-6 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

