import { Card } from "@/components/ui/card"
import { ProductList } from "@/components/admin/product-list"

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white">Управление товарами</h1>
        <button className="bg-black dark:bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
          Добавить товар
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Всего товаров</h3>
          <p className="text-2xl font-bold mt-1 dark:text-white">1,234</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">В наличии</h3>
          <p className="text-2xl font-bold mt-1 dark:text-white">956</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Нет в наличии</h3>
          <p className="text-2xl font-bold mt-1 dark:text-white">278</p>
        </Card>
        <Card className="p-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Категории</h3>
          <p className="text-2xl font-bold mt-1 dark:text-white">15</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold dark:text-white">Список товаров</h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Поиск товаров..."
              className="px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <select className="px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <option>Все категории</option>
              <option>Мужская одежда</option>
              <option>Женская одежда</option>
              <option>Детская одежда</option>
              <option>Обувь</option>
            </select>
          </div>
        </div>
        <ProductList />
      </Card>
    </div>
  )
}

