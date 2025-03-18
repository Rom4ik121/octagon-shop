import { Card } from "@/components/ui/card"
import { ShoppingBag, Truck, CheckCircle, XCircle } from "lucide-react"

export function OrderStats() {
  const stats = [
    {
      title: "Всего заказов",
      value: "345",
      change: "+10%",
      icon: ShoppingBag,
      trend: "up",
    },
    {
      title: "В обработке",
      value: "56",
      change: "-5%",
      icon: Truck,
      trend: "down",
    },
    {
      title: "Выполнены",
      value: "278",
      change: "+15%",
      icon: CheckCircle,
      trend: "up",
    },
    {
      title: "Отменены",
      value: "11",
      change: "-2%",
      icon: XCircle,
      trend: "down",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
              <stat.icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </div>
            <span className={`text-sm font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
              {stat.change}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</h3>
          <p className="text-2xl font-bold mt-1 dark:text-white">{stat.value}</p>
        </Card>
      ))}
    </div>
  )
}

