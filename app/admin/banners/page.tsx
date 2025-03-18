import { Card } from "@/components/ui/card"
import { BannerUpload } from "@/components/admin/banner-upload"
import { BannerList } from "@/components/admin/banner-list"

export default function BannersPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white">Управление баннерами</h1>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Добавить новый баннер</h2>
        <BannerUpload />
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Активные баннеры</h2>
        <BannerList />
      </Card>
    </div>
  )
}

