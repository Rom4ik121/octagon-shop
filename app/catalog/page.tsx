import Link from "next/link"
import { ShoppingCart, Menu, ChevronRight, ChevronLeft } from "lucide-react"

export default function CatalogPage() {
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
              <Link href="/catalog" className="text-black hover:text-gray-600 transition-colors font-medium">
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold dark:text-white">Каталог товаров</h1>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm text-gray-600 dark:text-gray-300">Сортировать:</span>
                <select className="border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 text-sm bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-400">
                  <option>По популярности</option>
                  <option>Сначала дешевле</option>
                  <option>Сначала дороже</option>
                  <option>По новизне</option>
                </select>
              </div>

              <button className="md:hidden flex items-center space-x-1 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1">
                <span>Фильтры</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-sm text-gray-600 dark:text-gray-300 py-1">Активные фильтры:</span>
            <button className="flex items-center space-x-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <span>Мужская одежда</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button className="flex items-center space-x-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <span>Для спортзала</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button className="flex items-center space-x-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <span>Nike</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <aside className="w-full md:w-64 mb-6 md:mb-0">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4 dark:text-white">Категории</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2 dark:text-white">Пол</h3>
                    <ul className="space-y-2">
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" defaultChecked />
                          <span className="text-gray-700 dark:text-gray-300">Мужская одежда</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">Женская одежда</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">Детская одежда</span>
                        </label>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 dark:text-white">Назначение</h3>
                    <ul className="space-y-2">
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" defaultChecked />
                          <span className="text-gray-700 dark:text-gray-300">Для спортзала</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">Для повседневной носки</span>
                        </label>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 dark:text-white">Тип товара</h3>
                    <ul className="space-y-2">
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">Футболки и топы</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">Шорты и леггинсы</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">Толстовки и свитшоты</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">Кроссовки</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">Аксессуары</span>
                        </label>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 dark:text-white">Бренд</h3>
                    <ul className="space-y-2">
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" defaultChecked />
                          <span className="text-gray-700 dark:text-gray-300">Nike</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">Adidas</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">Puma</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">Under Armour</span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-gray-700 dark:text-gray-300">Reebok</span>
                        </label>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2 dark:text-white">Цена</h3>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="От"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-400"
                      />
                      <span className="text-gray-500 dark:text-gray-400">-</span>
                      <input
                        type="text"
                        placeholder="До"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-400"
                      />
                    </div>
                    <button className="w-full mt-2 bg-black dark:bg-gray-700 text-white py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
                      Применить
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  {
                    name: "Мужская футболка Nike Dri-FIT",
                    price: "390 000",
                    brand: "Nike",
                    category: "Мужская",
                    type: "Для спортзала",
                    discount: true,
                    oldPrice: "450 000",
                    isNew: false,
                    image: "/placeholder.svg?height=300&width=300&text=Nike+Dri-FIT",
                  },
                  {
                    name: "Мужские шорты Adidas Training",
                    price: "350 000",
                    brand: "Adidas",
                    category: "Мужская",
                    type: "Для спортзала",
                    discount: false,
                    isNew: true,
                    image: "/placeholder.svg?height=300&width=300&text=Adidas+Shorts",
                  },
                  {
                    name: "Мужская толстовка Puma Essential",
                    price: "520 000",
                    brand: "Puma",
                    category: "Мужская",
                    type: "Повседневная",
                    discount: false,
                    isNew: false,
                    image: "/placeholder.svg?height=300&width=300&text=Puma+Hoodie",
                  },
                  {
                    name: "Кроссовки Nike Air Zoom",
                    price: "1 190 000",
                    brand: "Nike",
                    category: "Мужская",
                    type: "Обувь",
                    discount: true,
                    oldPrice: "1 350 000",
                    isNew: false,
                    image: "/placeholder.svg?height=300&width=300&text=Nike+Air+Zoom",
                  },
                  {
                    name: "Компрессионная футболка Under Armour",
                    price: "420 000",
                    brand: "Under Armour",
                    category: "Мужская",
                    type: "Для спортзала",
                    discount: false,
                    isNew: true,
                    image: "/placeholder.svg?height=300&width=300&text=Under+Armour",
                  },
                  {
                    name: "Спортивные брюки Adidas Tiro",
                    price: "480 000",
                    brand: "Adidas",
                    category: "Мужская",
                    type: "Повседневная",
                    discount: false,
                    isNew: false,
                    image: "/placeholder.svg?height=300&width=300&text=Adidas+Tiro",
                  },
                  {
                    name: "Спортивная сумка Nike Brasilia",
                    price: "390 000",
                    brand: "Nike",
                    category: "Аксессуары",
                    type: "Для спортзала",
                    discount: false,
                    isNew: false,
                    image: "/placeholder.svg?height=300&width=300&text=Nike+Bag",
                  },
                  {
                    name: "Мужская ветровка Reebok Training",
                    price: "650 000",
                    brand: "Reebok",
                    category: "Мужская",
                    type: "Для спортзала",
                    discount: true,
                    oldPrice: "780 000",
                    isNew: false,
                    image: "/placeholder.svg?height=300&width=300&text=Reebok+Jacket",
                  },
                ].map((product, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative">
                      <Link href="/product">
                        <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Link>

                      {/* Tags */}
                      <div className="absolute top-2 left-2 flex flex-col gap-1">
                        {product.discount && (
                          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">Скидка</span>
                        )}
                        {product.isNew && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">Новинка</span>
                        )}
                      </div>

                      {/* Quick actions */}
                      <div className="absolute top-2 right-2 flex flex-col gap-1">
                        <button className="bg-white dark:bg-gray-800 p-1.5 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex justify-between items-start mb-1">
                        <div className="text-xs text-gray-500 dark:text-gray-400">{product.brand}</div>
                        <div className="text-xs px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                          {product.type}
                        </div>
                      </div>

                      <Link href="/product">
                        <h3 className="font-medium mb-1 hover:underline dark:text-white">{product.name}</h3>
                      </Link>

                      <div className="flex items-center mb-3">
                        <p className="text-lg font-bold dark:text-white">{product.price} сум</p>
                        {product.discount && (
                          <p className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">
                            {product.oldPrice} сум
                          </p>
                        )}
                      </div>

                      <button className="w-full bg-black dark:bg-gray-700 text-white py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
                        В корзину
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Назад
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-black text-white dark:bg-gray-700"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white"
                  >
                    3
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors dark:text-white"
                  >
                    Далее
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
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

