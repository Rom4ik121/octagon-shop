import { Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OCTAGON</h3>
            <p className="mb-4">
              Мультибрендовый магазин спортивной одежды для мужчин, женщин и детей в Узбекистане. Широкий ассортимент
              одежды для спортзала, повседневной носки и кроссовок от ведущих мировых брендов.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-transform duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-transform duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-transform duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="mb-2">Телефон: +998 (99) 123-45-67</p>
            <p className="mb-2">Email: info@octagon.uz</p>
            <p>Адрес: г. Ташкент, ул. Амира Темура, 123</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-colors">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-colors">
                  Возврат и обмен
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-colors">
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
  )
}

