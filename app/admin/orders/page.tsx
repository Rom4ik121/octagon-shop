import { Card } from "@/components/ui/card"
import { OrderList } from "@/components/admin/order-list"
import { OrderStats } from "@/components/admin/order-stats"

export default function OrdersPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white">Управление заказами</h1>
      </div>

      <OrderStats />

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold dark:text-white">Список заказов</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Поиск заказов..."
              className="px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <select className="px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <option>Все статусы</option>
              <option>Новые</option>
              <option>В обработке</option>
              <option>Доставляются</option>
              <option>Выполнены</option>
              <option>Отменены</option>
            </select>
          </div>
        </div>
        <OrderList />
      </Card>
    </div>
  )
}

