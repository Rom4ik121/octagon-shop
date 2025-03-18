import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { AdminLoginButton } from "@/components/admin-login-button" // Добавляем импорт

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "OCTAGON - Магазин спортивной одежды для всей семьи",
  description:
    "Мультибрендовый магазин мужской, женской и детской спортивной одежды для спортзала, повседневной носки и кроссовок в Узбекистане",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
          <AdminLoginButton /> {/* Добавляем компонент кнопки */}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'