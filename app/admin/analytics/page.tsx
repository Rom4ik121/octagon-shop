import { Card } from "@/components/ui/card"
import { SalesChart } from "@/components/admin/sales-chart"
import { VisitorsChart } from "@/components/admin/visitors-chart"
import { ConversionChart } from "@/components/admin/conversion-chart"
import { ProductPerformance } from "@/components/admin/product-performance"

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white">Аналитика</h1>
        <select className="px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          <option>Последние 7 дней</option>
          <option>Последние 30 дней</option>
          <option>Последние 90 дней</option>
          <option>Этот год</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4 dark:text-white">Продажи</h2>
          <SalesChart />
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4 dark:text-white">Посетители</h2>
          <VisitorsChart />
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4 dark:text-white">Конверсия</h2>
          <ConversionChart />
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4 dark:text-white">Эффективность товаров</h2>
          <ProductPerformance />
        </Card>
      </div>
    </div>
  )
}

