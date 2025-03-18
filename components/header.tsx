"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { MobileMenu } from "./mobile-menu"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5278281792379531600_1-removebg-preview%20%281%29-aWEiQqqh2OClgze7H8UrC3QG9W78w0.png"
                alt="OCTAGON SPORTSWEAR"
                className="h-8 w-auto dark:invert"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${
                isActive("/") ? "font-medium" : ""
              }`}
            >
              Главная
            </Link>
            <div className="relative group">
              <button
                className={`text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex items-center ${
                  isActive("/catalog") ? "font-medium" : ""
                }`}
              >
                Каталог
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link
                    href="/catalog?category=men"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Мужская одежда
                  </Link>
                  <Link
                    href="/catalog?category=women"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Женская одежда
                  </Link>
                  <Link
                    href="/catalog?category=kids"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Детская одежда
                  </Link>
                  <Link
                    href="/catalog?category=gym"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Для спортзала
                  </Link>
                  <Link
                    href="/catalog?category=casual"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Для повседневной носки
                  </Link>
                  <Link
                    href="/catalog?category=shoes"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Кроссовки
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/promotions"
              className={`text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${
                isActive("/promotions") ? "font-medium" : ""
              }`}
            >
              Акции
            </Link>
            <Link
              href="/cart"
              className={`text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${
                isActive("/cart") ? "font-medium" : ""
              }`}
            >
              Корзина
            </Link>
            <Link
              href="/contacts"
              className={`text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${
                isActive("/contacts") ? "font-medium" : ""
              }`}
            >
              Контакты
            </Link>
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="/cart"
              className="hidden md:flex text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Корзина"
            >
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

