"use client"

import { useRouter } from "next/navigation"
import { Lock } from "lucide-react"

export function AdminLoginButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push("/admin/login")}
      className="fixed bottom-4 right-4 p-3 bg-black dark:bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors z-50 flex items-center gap-2 no-animation"
      aria-label="Вход для администратора"
    >
      <Lock className="h-5 w-5" />
      <span className="text-sm hidden md:inline">Админ панель</span>
    </button>
  )
}

