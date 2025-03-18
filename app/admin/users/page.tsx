import { Card } from "@/components/ui/card"
import { UserList } from "@/components/admin/user-list"
import { UserStats } from "@/components/admin/user-stats"

export default function UsersPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white">Управление пользователями</h1>
      </div>

      <UserStats />

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold dark:text-white">Список пользователей</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Поиск пользователей..."
              className="px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <select className="px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <option>Все роли</option>
              <option>Администраторы</option>
              <option>Менеджеры</option>
              <option>Пользователи</option>
            </select>
          </div>
        </div>
        <UserList />
      </Card>
    </div>
  )
}

