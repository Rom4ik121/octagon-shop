import Link from "next/link"
import { ShoppingCart, Menu, ChevronRight, Minus, Plus } from "lucide-react"

export default function ProductPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-black">
                <span className="flex items-center">
                  <span className="text-black">OCTA</span>
                  <span className="text-black">GON</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-black hover:text-gray-600 transition-colors">
                Главная
              </Link>
              <Link href="/catalog" className="text-black hover:text-gray-600 transition-colors">
                Каталог
              </Link>
              <Link href="/cart" className="text-black hover:text-gray-600 transition-colors">
                Корзина
              </Link>
              <Link href="/contacts" className="text-black hover:text-gray-600 transition-colors">
                Контакты
              </Link>
            </nav>

            {/* Mobile Navigation Icons */}
            <div className="flex items-center md:hidden">
              <Link href="/cart" className="mr-4">
                <ShoppingCart className="h-6 w-6 text-black" />
              </Link>
              <button className="text-black">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm mb-8">
            <Link href="/" className="hover:underline">
              Главная
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/catalog" className="hover:underline">
              Каталог
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>Смартфон X Pro</span>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Images */}
            <div className="w-full md:w-1/2">
              <div className="bg-gray-100 h-96 mb-4 rounded-lg"></div>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 h-24 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  ></div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-bold mb-4">Смартфон X Pro</h1>
              <p className="text-2xl font-bold mb-6">49 990 ₽</p>

              <div className="mb-6">
                <h2 className="text-lg font-medium mb-2">Описание</h2>
                <p className="text-gray-700">
                  Современный смартфон с мощным процессором, ярким дисплеем и продвинутой камерой. Идеально подходит для
                  работы, игр и фотографии. Батарея обеспечивает до 2 дней автономной работы при стандартном
                  использовании.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-medium mb-2">Характеристики</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>Экран: 6.7", AMOLED, 120 Гц</li>
                  <li>Процессор: 8-ядерный, 3.0 ГГц</li>
                  <li>Память: 8 ГБ RAM, 256 ГБ ROM</li>
                  <li>Камера: 108 МП (основная), 32 МП (фронтальная)</li>
                  <li>Батарея: 5000 мАч</li>
                </ul>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <button className="p-2 border border-gray-300 rounded-md">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="mx-4">1</span>
                  <button className="p-2 border border-gray-300 rounded-md">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors mb-3">
                  Добавить в корзину
                </button>
                <button className="w-full border border-black py-3 rounded-md hover:bg-gray-100 transition-colors">
                  Купить сейчас
                </button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Похожие товары</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-4">
                    <h3 className="font-medium mb-2">Смартфон Model {index + 1}</h3>
                    <p className="text-lg font-bold mb-3">{39990 + index * 2000} ₽</p>
                    <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
                      В корзину
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">OCTAGON</h3>
              <p className="mb-4">Современный интернет-магазин с широким ассортиментом товаров высокого качества.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p className="mb-2">Телефон: +7 (999) 123-45-67</p>
              <p className="mb-2">Email: info@octagon.ru</p>
              <p>Адрес: г. Москва, ул. Примерная, д. 123</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Информация</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    О компании
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Доставка и оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Возврат и обмен
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>© 2025 OCTAGON. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

