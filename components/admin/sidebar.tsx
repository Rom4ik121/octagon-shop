"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Image, ShoppingBag, Users, Settings, BarChart, LogOut } from "lucide-react"

export function AdminSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const menuItems = [
    { icon: LayoutDashboard, label: "Дашборд", href: "/admin" },
    { icon: Image, label: "Баннеры", href: "/admin/banners" },
    { icon: ShoppingBag, label: "Товары", href: "/admin/products" },
    { icon: Users, label: "Пользователи", href: "/admin/users" },
    { icon: BarChart, label: "Аналитика", href: "/admin/analytics" },
    { icon: Settings, label: "Настройки", href: "/admin/settings" },
  ]

  return (
    <div className="w-64 min-h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <Link href="/admin" className="text-2xl font-bold dark:text-white">
          OCTAGON
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-400">Панель администратора</p>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${
              isActive(item.href) ? "bg-gray-100 dark:bg-gray-700" : ""
            }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.label}
          </Link>
        ))}

        <button className="w-full flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 mt-auto no-animation">
          <LogOut className="h-5 w-5 mr-3" />
          Выйти
        </button>
      </nav>
    </div>
  )
}

