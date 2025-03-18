"use client"

export function SettingsForm() {
  return (
    <form className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 dark:text-white">Название магазина</label>
          <input
            type="text"
            defaultValue="OCTAGON"
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-white">Описание</label>
          <textarea
            rows={4}
            defaultValue="Мультибрендовый магазин спортивной одежды"
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-white">Email магазина</label>
          <input
            type="email"
            defaultValue="info@octagon.uz"
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-white">Телефон</label>
          <input
            type="tel"
            defaultValue="+998 99 123-45-67"
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-white">Адрес</label>
          <input
            type="text"
            defaultValue="г. Ташкент, ул. Амира Темура, 123"
            className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 dark:text-white">Социальные сети</label>
          <div className="space-y-2">
            <input
              type="url"
              placeholder="Instagram"
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <input
              type="url"
              placeholder="Facebook"
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <input
              type="url"
              placeholder="Twitter"
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-4 py-2 border rounded-md dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Отмена
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Сохранить изменения
        </button>
      </div>
    </form>
  )
}

