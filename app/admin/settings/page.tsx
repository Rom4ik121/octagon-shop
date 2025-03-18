import { Card } from "@/components/ui/card"
import { SettingsForm } from "@/components/admin/settings-form"

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white">Настройки</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6 dark:text-white">Основные настройки</h2>
            <SettingsForm />
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4 dark:text-white">Уведомления</h2>
            <div className="space-y-4">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="dark:text-white">Email уведомления</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span className="dark:text-white">Push уведомления</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="form-checkbox" />
                <span className="dark:text-white">SMS уведомления</span>
              </label>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4 dark:text-white">Безопасность</h2>
            <div className="space-y-4">
              <button className="w-full bg-black dark:bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
                Изменить пароль
              </button>
              <button className="w-full bg-black dark:bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
                Двухфакторная аутентификация
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

