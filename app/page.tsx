import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import { HeroBanner } from "@/components/hero-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Banner */}
        <HeroBanner
          title="Спортивная одежда для всей семьи"
          subtitle="Мужская, женская и детская коллекция для спортзала и повседневной носки"
          buttonText="Смотреть каталог"
          buttonLink="/catalog"
          backgroundImage="/placeholder.svg?height=500&width=1200"
        />

        {/* Brands */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Популярные бренды</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["Nike", "Adidas", "Puma", "Under Armour"].map((brand) => (
                <div
                  key={brand}
                  className="flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <span className="text-xl font-bold dark:text-white">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Категории</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Мужская одежда", image: "/placeholder.svg?height=300&width=300" },
                { name: "Женская одежда", image: "/placeholder.svg?height=300&width=300" },
                { name: "Детская одежда", image: "/placeholder.svg?height=300&width=300" },
              ].map((category) => (
                <Link
                  key={category.name}
                  href="/catalog"
                  className="group relative h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden"
                >
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {[
                { name: "Для спортзала", image: "/placeholder.svg?height=300&width=300" },
                { name: "Для повседневной носки", image: "/placeholder.svg?height=300&width=300" },
                { name: "Кроссовки", image: "/placeholder.svg?height=300&width=300" },
              ].map((category) => (
                <Link
                  key={category.name}
                  href="/catalog"
                  className="group relative h-64 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden"
                >
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Products */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Популярные товары</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Мужская футболка Nike Dri-FIT", price: "390 000 сум", brand: "Nike", category: "Мужская" },
                { name: "Женские леггинсы Adidas", price: "450 000 сум", brand: "Adidas", category: "Женская" },
                { name: "Детский спортивный костюм Puma", price: "680 000 сум", brand: "Puma", category: "Детская" },
                { name: "Кроссовки Nike Air Max", price: "1 290 000 сум", brand: "Nike", category: "Обувь" },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{product.brand}</div>
                    <h3 className="font-medium mb-2 dark:text-white">{product.name}</h3>
                    <p className="text-lg font-bold mb-3 dark:text-white">{product.price}</p>
                    <button className="w-full bg-black dark:bg-gray-700 text-white py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105">
                      В корзину
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/catalog"
                className="inline-flex items-center bg-black dark:bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Смотреть все товары
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Наши коллекции</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-80 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Для спортзала"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Для спортзала</h3>
                  <p className="text-white mb-4">Специализированная одежда и обувь для эффективных тренировок</p>
                  <Link
                    href="/catalog"
                    className="inline-flex items-center bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-all duration-300"
                  >
                    Смотреть коллекцию
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative h-80 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Для повседневной носки"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Для повседневной носки</h3>
                  <p className="text-white mb-4">Комфортная и стильная одежда для активного образа жизни</p>
                  <Link
                    href="/catalog"
                    className="inline-flex items-center bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition-all duration-300"
                  >
                    Смотреть коллекцию
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Почему выбирают нас</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Оригинальные товары</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Мы продаем только оригинальную продукцию от официальных поставщиков
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Быстрая доставка</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Доставляем заказы по всему Узбекистану в течение 1-3 дней
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">Удобная оплата</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Принимаем различные способы оплаты, включая наличные и карты
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

