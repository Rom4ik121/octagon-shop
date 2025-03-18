import type React from "react"
import { redirect } from "next/navigation"
import { AdminSidebar } from "@/components/admin/sidebar"

// Простая проверка авторизации (в реальном проекте нужно использовать настоящую аутентификацию)
async function getUser() {
  // Здесь должна быть реальная проверка авторизации
  const isAdmin = true // Временно для демонстрации
  return { isAdmin }
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()

  if (!user.isAdmin) {
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  )
}

