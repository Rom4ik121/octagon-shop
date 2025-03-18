import Link from "next/link"
import { ShoppingCart, Menu, ChevronRight } from "lucide-react"

export default function CheckoutPage() {
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
            <Link href="/cart" className="hover:underline">
              Корзина
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span>Оформление заказа</span>
          </div>

          <h1 className="text-3xl font-bold mb-8">Оформление заказа</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-xl font-bold mb-4">Контактная информация</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block mb-1 text-sm font-medium">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Иван"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-1 text-sm font-medium">
                      Фамилия
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Иванов"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="example@mail.ru"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-1 text-sm font-medium">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-xl font-bold mb-4">Адрес доставки</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block mb-1 text-sm font-medium">
                      Адрес
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="ул. Примерная, д. 123, кв. 45"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block mb-1 text-sm font-medium">
                        Город
                      </label>
                      <input
                        type="text"
                        id="city"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Москва"
                      />
                    </div>
                    <div>
                      <label htmlFor="region" className="block mb-1 text-sm font-medium">
                        Область
                      </label>
                      <input
                        type="text"
                        id="region"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Московская"
                      />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block mb-1 text-sm font-medium">
                        Индекс
                      </label>
                      <input
                        type="text"
                        id="zip"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="123456"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4">Способ оплаты</h2>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" className="mr-3" defaultChecked />
                    <span>Банковская карта</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" className="mr-3" />
                    <span>Наличными при получении</span>
                  </label>
                  <label className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="payment" className="mr-3" />
                    <span>Электронный кошелек</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h2 className="text-xl font-bold mb-4">Ваш заказ</h2>

                <div className="space-y-4 mb-6">
                  {[
                    { name: "Смартфон X Pro", price: 49990, quantity: 1 },
                    { name: "Наушники Wireless", price: 12990, quantity: 1 },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">Количество: {item.quantity}</p>
                      </div>
                      <p className="font-medium">{item.price} ₽</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6 pt-4 border-t">
                  <div className="flex justify-between">
                    <span>Товары (2)</span>
                    <span>62 980 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Скидка</span>
                    <span className="text-green-600">-3 000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка</span>
                    <span>0 ₽</span>
                  </div>
                </div>

                <div className="flex justify-between text-xl font-bold pt-4 border-t mb-6">
                  <span>К оплате</span>
                  <span>59 980 ₽</span>
                </div>

                <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
                  Подтвердить заказ
                </button>
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

