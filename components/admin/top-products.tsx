export function TopProducts() {
  const products = [
    {
      name: "Nike Dri-FIT Футболка",
      sales: 145,
      revenue: "56,550,000 сум",
      trend: "up",
    },
    {
      name: "Adidas Ultraboost",
      sales: 98,
      revenue: "126,420,000 сум",
      trend: "up",
    },
    {
      name: "Puma Training Шорты",
      sales: 87,
      revenue: "30,450,000 сум",
      trend: "down",
    },
    {
      name: "Under Armour Компрессионка",
      sales: 76,
      revenue: "31,920,000 сум",
      trend: "up",
    },
  ]

  return (
    <div className="space-y-4">
      {products.map((product, index) => (
        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div>
            <p className="font-medium dark:text-white">{product.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{product.sales} продаж</p>
          </div>
          <div className="text-right">
            <p className="font-medium dark:text-white">{product.revenue}</p>
            <p className={`text-sm ${product.trend === "up" ? "text-green-600" : "text-red-600"}`}>
              {product.trend === "up" ? "↑" : "↓"} {Math.floor(Math.random() * 10 + 1)}%
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

