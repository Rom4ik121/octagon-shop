import { Card } from "@/components/ui/card"
import { Users, UserPlus, UserCheck, UserX } from "lucide-react"

export function UserStats() {
  const stats = [
    {
      title: "Всего пользователей",
      value: "1,234",
      change: "+12.5%",
      icon: Users,
      trend: "up",
    },
    {
      title: "Новые пользователи",
      value: "48",
      change: "+3.2%",
      icon: UserPlus,
      trend: "up",
    },
    {
      title: "Активные пользователи",
      value: "892",
      change: "+8.1%",
      icon: UserCheck,
      trend: "up",
    },
    {
      title: "Неактивные пользователи",
      value: "342",
      change: "+0.5%",
      icon: UserX,
      trend: "up",
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

