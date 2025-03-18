import Link from "next/link"
import { Trash2, Plus, Minus } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShoppingCart } from "lucide-react"

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4 dark:text-white">Корзина</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">У вас 3 товара в корзине</p>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="w-full lg:w-2/3">
              {/* Cart Items Header - visible only on desktop */}
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b dark:border-gray-700 mb-4">
                <div className="col-span-6">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Товар</span>
                </div>
                <div className="col-span-2 text-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Цена</span>
                </div>
                <div className="col-span-2 text-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Количество</span>
                </div>
                <div className="col-span-2 text-right">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Сумма</span>
                </div>
              </div>

              {/* Cart Items */}
              {[
                {
                  id: 1,
                  name: "Мужская футболка Nike Dri-FIT",
                  price: 390000,
                  quantity: 1,
                  image: "/placeholder.svg?height=120&width=120&text=Nike+Dri-FIT",
                  size: "L",
                  color: "Черный",
                },
                {
                  id: 2,
                  name: "Кроссовки Adidas Ultraboost",
                  price: 1290000,
                  quantity: 1,
                  image: "/placeholder.svg?height=120&width=120&text=Adidas+Shoes",
                  size: "42",
                  color: "Белый/Серый",
                },
                {
                  id: 3,
                  name: "Спортивные шорты Puma Training",
                  price: 350000,
                  quantity: 1,
                  image: "/placeholder.svg?height=120&width=120&text=Puma+Shorts",
                  size: "M",
                  color: "Темно-синий",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:grid md:grid-cols-12 md:gap-4 py-6 border-b dark:border-gray-700"
                >
                  {/* Product Image and Info */}
                  <div className="flex md:col-span-6">
                    <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden mr-4 flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1 dark:text-white">{item.name}</h3>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Размер: {item.size}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Цвет: {item.color}</div>
                      <button className="text-sm text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors md:hidden flex items-center">
                        <Trash2 className="h-4 w-4 mr-1" />
                        <span>Удалить</span>
                      </button>
                    </div>
                  </div>

                  {/* Price - Mobile & Desktop */}
                  <div className="md:col-span-2 md:text-center mt-4 md:mt-0 flex justify-between md:block">
                    <div className="md:hidden text-sm text-gray-500 dark:text-gray-400">Цена:</div>
                    <div className="font-medium dark:text-white">
                      {new Intl.NumberFormat("ru-RU").format(item.price)} сум
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="md:col-span-2 md:flex md:justify-center mt-4 md:mt-0 flex justify-between md:block">
                    <div className="md:hidden text-sm text-gray-500 dark:text-gray-400">Количество:</div>
                    <div className="flex items-center">
                      <button className="p-1 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <Minus className="h-4 w-4 dark:text-white" />
                      </button>
                      <span className="mx-3 dark:text-white">{item.quantity}</span>
                      <button className="p-1 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <Plus className="h-4 w-4 dark:text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Total Price */}
                  <div className="md:col-span-2 md:text-right mt-4 md:mt-0 flex justify-between md:block">
                    <div className="md:hidden text-sm text-gray-500 dark:text-gray-400">Сумма:</div>
                    <div className="font-bold dark:text-white">
                      {new Intl.NumberFormat("ru-RU").format(item.price * item.quantity)} сум
                    </div>
                  </div>

                  {/* Delete Button - Desktop only */}
                  <div className="hidden md:flex md:items-center md:justify-end">
                    <button className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Empty Cart Message - hidden when cart has items */}
              {false && (
                <div className="py-12 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 text-gray-300 dark:text-gray-600">
                    <ShoppingCart className="w-full h-full" />
                  </div>
                  <p className="text-xl mb-6 dark:text-white">Ваша корзина пуста</p>
                  <Link
                    href="/catalog"
                    className="inline-block bg-black dark:bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                  >
                    Перейти в каталог
                  </Link>
                </div>
              )}

              {/* Continue Shopping Button */}
              <div className="mt-8">
                <Link href="/catalog" className="inline-flex items-center text-black dark:text-white hover:underline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Продолжить покупки
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm sticky top-24">
                <h2 className="text-xl font-bold mb-6 dark:text-white">Итого</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="dark:text-white">Товары (3)</span>
                    <span className="dark:text-white">2 030 000 сум</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="dark:text-white">Скидка</span>
                    <span className="text-green-600">-200 000 сум</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="dark:text-white">Доставка</span>
                    <span className="dark:text-white">30 000 сум</span>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <h3 className="font-medium dark:text-white">Промокод</h3>
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">-10%</span>
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Введите промокод"
                      className="flex-grow px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-gray-400"
                      defaultValue="SPORT10"
                    />
                    <button className="bg-black dark:bg-gray-700 text-white px-4 py-2 rounded-r-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
                      Применить
                    </button>
                  </div>
                </div>

                {/* Delivery Options */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3 dark:text-white">Способ доставки</h3>
                  <div className="space-y-2">
                    <label className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                      <input type="radio" name="delivery" className="mr-3" defaultChecked />
                      <div>
                        <div className="font-medium dark:text-white">Курьером</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">1-2 дня, 30 000 сум</div>
                      </div>
                    </label>
                    <label className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                      <input type="radio" name="delivery" className="mr-3" />
                      <div>
                        <div className="font-medium dark:text-white">Самовывоз</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Сегодня, бесплатно</div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex justify-between text-xl font-bold pt-4 border-t dark:border-gray-700 mb-6">
                  <span className="dark:text-white">К оплате</span>
                  <span className="dark:text-white">1 860 000 сум</span>
                </div>

                <Link
                  href="/checkout"
                  className="block w-full bg-black dark:bg-gray-700 text-white text-center py-3 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                >
                  Оформить заказ
                </Link>

                {/* Payment Methods */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Мы принимаем</p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

