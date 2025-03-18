import { Card } from "@/components/ui/card"
import { AdminStats } from "@/components/admin/stats"
import { RecentOrders } from "@/components/admin/recent-orders"
import { SalesChart } from "@/components/admin/sales-chart"
import { TopProducts } from "@/components/admin/top-products"

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white">Панель управления</h1>
        <div className="flex items-center space-x-4">
          <select className="border rounded-md px-3 py-2 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <option>Последние 7 дней</option>
            <option>Последние 30 дней</option>
            <option>Этот год</option>
          </select>
        </div>
      </div>

      <AdminStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4 dark:text-white">Продажи</h2>
          <SalesChart />
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4 dark:text-white">Топ продуктов</h2>
          <TopProducts />
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Последние заказы</h2>
        <RecentOrders />
      </Card>
    </div>
  )
}

