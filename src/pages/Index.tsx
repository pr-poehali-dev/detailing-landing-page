import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-premium-black text-premium-white font-['Montserrat']">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-premium-black/95 backdrop-blur-sm border-b border-premium-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-premium-red to-premium-light-red bg-clip-text text-transparent">
            DETAILING STUDIO
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-premium-red transition-colors">Главная</a>
            <a href="#services" className="hover:text-premium-red transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-premium-red transition-colors">Портфолио</a>
            <a href="#reviews" className="hover:text-premium-red transition-colors">Отзывы</a>
            <a href="#pricing" className="hover:text-premium-red transition-colors">Прайс</a>
            <a href="#contacts" className="hover:text-premium-red transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-premium-red to-premium-light-red text-premium-white font-medium hover:scale-105 transition-transform">
            Записаться
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-premium-black via-premium-dark-gray to-premium-black">
        <div className="absolute inset-0 bg-gradient-to-r from-premium-black/70 via-transparent to-premium-red/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-premium-white via-premium-red to-premium-light-red bg-clip-text text-transparent">
            ПРЕМИУМ ДЕТЕЙЛИНГ
          </h1>
          <p className="text-xl md:text-2xl text-premium-white/90 mb-8 font-light">
            Профессиональная полировка и восстановление ЛКП
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-premium-red to-premium-light-red text-premium-white font-semibold text-lg px-8 py-4 hover:scale-105 transition-transform">
              Записаться на услугу
            </Button>
            <Button variant="outline" size="lg" className="border-premium-red text-premium-red hover:bg-premium-red hover:text-premium-white font-semibold text-lg px-8 py-4 transition-all">
              Посмотреть работы
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <Icon name="ChevronDown" className="w-8 h-8 text-premium-red animate-bounce" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-premium-dark-gray/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-premium-red to-premium-light-red bg-clip-text text-transparent">
              Наши услуги
            </h2>
            <p className="text-xl text-premium-white/80">
              Профессиональный уход за вашим автомобилем
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Sparkles",
                title: "Полная полировка",
                description: "Восстановление первоначального блеска кузова с использованием профессиональных составов",
                price: "от 15 000 ₽"
              },
              {
                icon: "Shield",
                title: "Керамическая защита",
                description: "Нанесение защитного керамического покрытия для долговременной защиты",
                price: "от 25 000 ₽"
              },
              {
                icon: "Droplets",
                title: "Химчистка салона",
                description: "Глубокая очистка и восстановление салона автомобиля",
                price: "от 8 000 ₽"
              },
              {
                icon: "Zap",
                title: "Экспресс-мойка",
                description: "Быстрая качественная мойка с применением премиальных средств",
                price: "от 2 500 ₽"
              },
              {
                icon: "Star",
                title: "Восстановление ЛКП",
                description: "Устранение царапин и дефектов лакокрасочного покрытия",
                price: "от 12 000 ₽"
              },
              {
                icon: "Crown",
                title: "VIP-пакет",
                description: "Полный комплекс услуг для максимального результата",
                price: "от 50 000 ₽"
              }
            ].map((service, index) => (
              <Card key={index} className="bg-premium-white border-premium-red/20 p-8 hover:border-premium-red/40 transition-all hover:scale-105">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-premium-red to-premium-light-red rounded-full flex items-center justify-center">
                    <Icon name={service.icon} className="w-8 h-8 text-premium-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-premium-black">{service.title}</h3>
                  <p className="text-premium-black/70 mb-6">{service.description}</p>
                  <div className="text-premium-red font-semibold text-lg">{service.price}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-premium-red to-premium-light-red bg-clip-text text-transparent">
              Портфолио
            </h2>
            <p className="text-xl text-premium-white/80">
              Результаты нашей работы говорят сами за себя
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { image: "/img/80700380-15ca-48de-9ab9-421af9a9aae1.jpg", title: "Ferrari", desc: "Полировка кузова" },
              { image: "/img/4e4069b8-538a-45b8-a8e4-c012c99f488c.jpg", title: "BMW", desc: "Керамическое покрытие" },
              { image: "/img/72dc3423-3c39-4f06-9196-07fa0c540fb4.jpg", title: "Mercedes", desc: "Восстановление ЛКП" },
              { image: "/img/322f3f9d-4eb6-48c7-b124-641883c3acab.jpg", title: "Audi", desc: "Полная полировка" },
              { image: "/img/2b73b9bf-43a5-4d4e-9ce1-e7a06f9edb99.jpg", title: "Porsche", desc: "VIP-пакет" },
              { image: "/img/12dfa7ed-ff6c-4543-9f11-2c7564ba632d.jpg", title: "Lamborghini", desc: "Премиум детейлинг" }
            ].map((car, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <div className="aspect-square">
                  <img 
                    src={car.image} 
                    alt={car.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-premium-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-semibold text-premium-white mb-2">{car.title}</h4>
                    <p className="text-premium-red text-sm">{car.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-premium-dark-gray/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-premium-red to-premium-light-red bg-clip-text text-transparent">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-premium-white/80">
              Что говорят о нас наши клиенты
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Александр Иванов",
                text: "Невероятный результат! Машина выглядит как новая. Профессиональный подход и внимание к деталям.",
                rating: 5
              },
              {
                name: "Мария Петрова",
                text: "Лучший детейлинг в городе! Керамическое покрытие держится уже полгода, машина всегда блестит.",
                rating: 5
              },
              {
                name: "Дмитрий Сидоров",
                text: "Отличное соотношение цена-качество. Ребята знают своё дело, рекомендую всем знакомым!",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="bg-premium-white border-premium-red/20 p-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="w-5 h-5 text-premium-red fill-current" />
                  ))}
                </div>
                <p className="text-premium-black/80 mb-4 italic">"{review.text}"</p>
                <div className="text-premium-red font-semibold">{review.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-premium-red to-premium-light-red bg-clip-text text-transparent">
              Прайс-лист
            </h2>
            <p className="text-xl text-premium-white/80">
              Прозрачные цены на все услуги
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Базовый",
                price: "от 5 000",
                description: "Мойка + экспресс-полировка",
                features: ["Комплексная мойка", "Экспресс-полировка", "Чернение шин", "Очистка дисков"]
              },
              {
                title: "Стандарт",
                price: "от 15 000",
                description: "Полная полировка кузова",
                features: ["Всё из пакета Базовый", "Полная полировка", "Химчистка салона", "Восстановление пластика"],
                popular: true
              },
              {
                title: "Премиум",
                price: "от 35 000",
                description: "Керамическая защита",
                features: ["Всё из пакета Стандарт", "Керамическое покрытие", "Полировка фар", "Гарантия 1 год"]
              }
            ].map((plan, index) => (
              <Card key={index} className={`relative p-8 ${plan.popular ? 'bg-gradient-to-b from-premium-red/10 to-premium-white border-premium-red' : 'bg-premium-white border-premium-red/20'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-premium-red text-premium-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </div>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-premium-black">{plan.title}</h3>
                  <div className="text-3xl font-bold text-premium-red mb-2">{plan.price} ₽</div>
                  <p className="text-premium-black/70 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Icon name="Check" className="w-5 h-5 text-premium-red mr-3" />
                        <span className="text-premium-black/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'bg-premium-red text-premium-white' : 'bg-premium-white border border-premium-red text-premium-red hover:bg-premium-red hover:text-premium-white'}`}>
                    Выбрать пакет
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-premium-dark-gray/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-premium-red to-premium-light-red bg-clip-text text-transparent">
              Контакты
            </h2>
            <p className="text-xl text-premium-white/80">
              Свяжитесь с нами для записи
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-premium-black">Наши контакты</h3>
              <div className="space-y-6">
                {[
                  { icon: "MapPin", label: "Адрес", value: "ул. Автомобильная, 123, Москва" },
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67" },
                  { icon: "Mail", label: "Email", value: "info@detailing.ru" },
                  { icon: "Clock", label: "Часы работы", value: "Пн-Вс: 9:00 - 21:00" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-premium-red rounded-full flex items-center justify-center mr-4">
                      <Icon name={contact.icon} className="w-6 h-6 text-premium-white" />
                    </div>
                    <div>
                      <div className="text-premium-red font-semibold">{contact.label}</div>
                      <div className="text-premium-white">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-premium-black">Запись онлайн</h3>
              <Card className="bg-premium-white border-premium-red/20 p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-premium-black mb-2">Имя</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-premium-light-gray border border-premium-red/20 rounded-lg text-premium-black focus:border-premium-red outline-none"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-premium-black mb-2">Телефон</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-premium-light-gray border border-premium-red/20 rounded-lg text-premium-black focus:border-premium-red outline-none"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-premium-black mb-2">Услуга</label>
                    <select className="w-full px-4 py-3 bg-premium-light-gray border border-premium-red/20 rounded-lg text-premium-black focus:border-premium-red outline-none">
                      <option>Выберите услугу</option>
                      <option>Полная полировка</option>
                      <option>Керамическая защита</option>
                      <option>Химчистка салона</option>
                      <option>VIP-пакет</option>
                    </select>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-premium-red to-premium-light-red text-premium-white font-semibold py-3 hover:scale-105 transition-transform">
                    Записаться
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-premium-white border-t border-premium-red/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-premium-gold to-premium-light-gold bg-clip-text text-transparent mb-4">
                DETAILING STUDIO
              </div>
              <p className="text-premium-black/70 mb-4">
                Профессиональный детейлинг-центр с многолетним опытом. 
                Мы заботимся о вашем автомобиле как о собственном.
              </p>
              <div className="flex space-x-4">
                {["Instagram", "Facebook", "Youtube"].map((social, index) => (
                  <div key={index} className="w-10 h-10 bg-premium-red rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                    <Icon name="Link" className="w-5 h-5 text-premium-white" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-premium-red font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-premium-black/70">
                <li>Полировка</li>
                <li>Керамика</li>
                <li>Химчистка</li>
                <li>Восстановление ЛКП</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-premium-red font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-premium-black/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@detailing.ru</li>
                <li>ул. Автомобильная, 123</li>
                <li>Москва</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-premium-red/20 mt-12 pt-8 text-center">
            <p className="text-premium-black/50">
              © 2024 Detailing Studio. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}