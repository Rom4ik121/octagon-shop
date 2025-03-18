import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

export default function PromotionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 dark:text-white">Акции и специальные предложения</h1>

          {/* Featured Promotion */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Летняя распродажа"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full mb-4">
                  Горячее предложение
                </div>
                <h2 className="text-2xl font-bold mb-4 dark:text-white">Фитнес-коллекция: скидки до 50%</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Успейте приобрести специализированную одежду и аксессуары для тренажерного зала и фитнеса от ведущих
                  брендов со скидкой до 50%. Акция действует на ограниченный ассортимент товаров.
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-6">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>До 31 августа 2025</span>
                </div>
                <Link
                  href="/catalog"
                  className="inline-flex items-center bg-black dark:bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Перейти к товарам
                </Link>
              </div>
            </div>
          </div>

          {/* Promotions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Скидка 30% на Nike Training",
                description: "Скидка на всю тренировочную коллекцию Nike при покупке от 1 000 000 сум",
                date: "До 15 июля 2025",
                tag: "Скидка",
              },
              {
                title: "1+1=3 на фитнес-аксессуары",
                description: "Купите два фитнес-аксессуара и получите третий в подарок",
                date: "До 20 июля 2025",
                tag: "Подарок",
              },
              {
                title: "Бесплатная доставка",
                description: "Бесплатная доставка по всему Узбекистану при заказе от 500 000 сум",
                date: "Постоянная акция",
                tag: "Доставка",
              },
              {
                title: "Скидка для фитнес-тренеров",
                description: "Дополнительная скидка 15% для профессиональных тренеров",
                date: "Постоянная акция",
                tag: "Скидка",
              },
              {
                title: "Распродажа Adidas Training",
                description: "Скидки до 40% на тренировочную коллекцию Adidas прошлого сезона",
                date: "До 25 июля 2025",
                tag: "Распродажа",
              },
              {
                title: "Шейкер в подарок",
                description: "Спортивный шейкер в подарок при покупке от 800 000 сум",
                date: "До 10 августа 2025",
                tag: "Подарок",
              },
            ].map((promo, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=Promo+${index + 1}`}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black text-white text-sm font-semibold rounded-full">
                    {promo.tag}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 dark:text-white">{promo.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{promo.description}</p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{promo.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="bg-black dark:bg-gray-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Подпишитесь на новости об акциях</h2>
            <p className="mb-6">Получайте информацию о новых акциях и специальных предложениях первыми</p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-grow px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

