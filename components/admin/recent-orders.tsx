export function RecentOrders() {
  const orders = [
    {
      id: "ORD001",
      customer: "Алексей Иванов",
      date: "2024-03-18",
      status: "Выполнен",
      amount: "450,000 сум",
    },
    {
      id: "ORD002",
      customer: "Мария Петрова",
      date: "2024-03-18",
      status: "В обработке",
      amount: "780,000 сум",
    },
    {
      id: "ORD003",
      customer: "Дмитрий Сидоров",
      date: "2024-03-17",
      status: "Доставляется",
      amount: "1,200,000 сум",
    },
    {
      id: "ORD004",
      customer: "Анна Козлова",
      date: "2024-03-17",
      status: "Выполнен",
      amount: "350,000 сум",
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b dark:border-gray-700">
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">ID</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Покупатель</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Дата</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Статус</th>
            <th className="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Сумма</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b dark:border-gray-700">
              <td className="py-4 text-sm font-medium dark:text-white">{order.id}</td>
              <td className="py-4 text-sm dark:text-gray-300">{order.customer}</td>
              <td className="py-4 text-sm dark:text-gray-300">{order.date}</td>
              <td className="py-4">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    order.status === "Выполнен"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : order.status === "В обработке"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="py-4 text-sm font-medium dark:text-white">{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

