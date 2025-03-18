"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setExpandedCategory(null)
  }

  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(category)
    }
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-black dark:text-white transition-transform duration-300 hover:scale-110"
        aria-label="Меню"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeMenu}></div>}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="text-black dark:text-white transition-transform duration-300 hover:scale-110"
            aria-label="Закрыть меню"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="px-6 py-4">
          <ul className="space-y-6">
            <li>
              <Link
                href="/"
                className={`block text-lg ${isActive("/") ? "font-bold" : ""} dark:text-white`}
                onClick={closeMenu}
              >
                Главная
              </Link>
            </li>
            <li>
              <div>
                <button
                  className={`flex items-center justify-between w-full text-lg ${isActive("/catalog") ? "font-bold" : ""} dark:text-white`}
                  onClick={() => toggleCategory("catalog")}
                >
                  <span>Каталог</span>
                  {expandedCategory === "catalog" ? (
                    <ChevronDown className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </button>
                {expandedCategory === "catalog" && (
                  <ul className="mt-2 ml-4 space-y-2">
                    <li>
                      <Link
                        href="/catalog?category=men"
                        className="block text-base dark:text-gray-200"
                        onClick={closeMenu}
                      >
                        Мужская одежда
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/catalog?category=women"
                        className="block text-base dark:text-gray-200"
                        onClick={closeMenu}
                      >
                        Женская одежда
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/catalog?category=kids"
                        className="block text-base dark:text-gray-200"
                        onClick={closeMenu}
                      >
                        Детская одежда
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/catalog?category=gym"
                        className="block text-base dark:text-gray-200"
                        onClick={closeMenu}
                      >
                        Для спортзала
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/catalog?category=casual"
                        className="block text-base dark:text-gray-200"
                        onClick={closeMenu}
                      >
                        Для повседневной носки
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/catalog?category=shoes"
                        className="block text-base dark:text-gray-200"
                        onClick={closeMenu}
                      >
                        Кроссовки
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link
                href="/promotions"
                className={`block text-lg ${isActive("/promotions") ? "font-bold" : ""} dark:text-white`}
                onClick={closeMenu}
              >
                Акции
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className={`block text-lg ${isActive("/cart") ? "font-bold" : ""} dark:text-white`}
                onClick={closeMenu}
              >
                Корзина
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className={`block text-lg ${isActive("/contacts") ? "font-bold" : ""} dark:text-white`}
                onClick={closeMenu}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-0 w-full p-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 OCTAGON</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Магазин спортивной одежды для всей семьи</p>
        </div>
      </div>
    </div>
  )
}

