import { Mail, Phone, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Контакты</h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Info */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-xl font-bold mb-6">Наши контакты</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-gray-700">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-700">info@octagon.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-gray-700">г. Москва, ул. Примерная, д. 123</p>
                      <p className="text-gray-700">Пн-Пт: 9:00 - 20:00</p>
                      <p className="text-gray-700">Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-6">Обратная связь</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 text-sm font-medium">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactEmail" className="block mb-1 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="example@mail.ru"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-1 text-sm font-medium">
                      Тема
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Вопрос о заказе"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1 text-sm font-medium">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Ваше сообщение..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Отправить
                  </button>
                </form>
              </div>
            </div>

            {/* Map */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                <h2 className="text-xl font-bold mb-6">Мы на карте</h2>
                <div className="h-[600px] bg-gray-200 rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3801488441135!2d37.617676376889!3d55.75639997987271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1710672547851!5m2!1sru!2sru"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

