import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = [
    {
      icon: "Wrench",
      title: "Сварочные работы",
      description: "Профессиональная сварка металлоконструкций любой сложности с гарантией качества"
    },
    {
      icon: "Home",
      title: "Навесы и козырьки",
      description: "Изготовление надежных навесов для автомобилей, террас и входных групп"
    },
    {
      icon: "Shield",
      title: "Решетки и двери",
      description: "Металлические решетки на окна и прочные двери для вашей безопасности"
    },
    {
      icon: "DoorOpen",
      title: "Ворота всех видов",
      description: "Откатные, распашные и секционные ворота под ключ с автоматикой"
    },
    {
      icon: "Flame",
      title: "Горячая ковка",
      description: "Художественная ковка любой сложности — элитные изделия с душой мастера"
    },
    {
      icon: "Hammer",
      title: "Монтаж конструкций",
      description: "Профессиональная установка всех видов металлоконструкций на объекте"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/447c7e77-4c6f-45c2-932d-8016401be29f/files/1d7c1c5e-f2d9-4554-8c53-68e695819526.jpg",
      title: "Сварочные работы",
      description: "Качественная сварка металлоконструкций"
    },
    {
      image: "https://cdn.poehali.dev/projects/447c7e77-4c6f-45c2-932d-8016401be29f/files/0c5767e6-5159-41ad-aaf7-d72334a04622.jpg",
      title: "Художественная ковка",
      description: "Элитные кованые ворота"
    },
    {
      image: "https://cdn.poehali.dev/projects/447c7e77-4c6f-45c2-932d-8016401be29f/files/82dcddd1-6232-437d-ba80-a7d1c0d27491.jpg",
      title: "Навесы и козырьки",
      description: "Современные металлические навесы"
    }
  ];

  const advantages = [
    {
      icon: "Calculator",
      title: "Бесплатный замер",
      description: "Выезд специалиста и точные расчеты стоимости абсолютно бесплатно"
    },
    {
      icon: "Wallet",
      title: "Без предоплаты",
      description: "Заказы до 100 тысяч рублей принимаем без предварительной оплаты"
    },
    {
      icon: "Gift",
      title: "Бонусы постоянным клиентам",
      description: "Специальные скидки и приятные бонусы для наших постоянных заказчиков"
    },
    {
      icon: "Award",
      title: "Гарантия качества",
      description: "Даем гарантию на все виды работ и используем только качественные материалы"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-secondary/95 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Flame" className="text-primary" size={32} />
            <span className="text-xl font-bold text-white">СварМастер</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-white hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-white hover:text-primary transition-colors">Портфолио</a>
            <a href="#advantages" className="text-white hover:text-primary transition-colors">Преимущества</a>
            <a href="#contacts" className="text-white hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 pt-20">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/447c7e77-4c6f-45c2-932d-8016401be29f/files/1d7c1c5e-f2d9-4554-8c53-68e695819526.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Профессиональные сварочные работы
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Надежность, качество и удобство для каждого клиента
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
                <Icon name="Calculator" size={24} className="mr-2" />
                Бесплатный замер
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-6">
                <Icon name="Phone" size={24} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/50" />
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр сварочных работ и изготовление металлоконструкций любой сложности
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2 hover:border-primary">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Портфолио</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры наших выполненных работ — качество говорит само за себя
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Наши преимущества</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Почему выбирают нас для сварочных работ и изготовления металлоконструкций
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-muted/30 transition-colors">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} className="text-white" size={40} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-white/80">
                Оставьте заявку и получите бесплатный замер
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="border-2"
                      />
                    </div>
                    <div>
                      <Input 
                        placeholder="Телефон"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="border-2"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Опишите задачу"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="border-2 min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Телефон</h3>
                    <p className="text-white/80">+7 (999) 123-45-67</p>
                    <p className="text-sm text-white/60">Работаем ежедневно с 8:00 до 20:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-white/80">info@svarmaster.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Адрес</h3>
                    <p className="text-white/80">г. Москва, ул. Промышленная, 15</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/95 text-white py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Flame" className="text-primary" size={28} />
            <span className="text-lg font-bold">СварМастер</span>
          </div>
          <p className="text-white/60 text-sm">
            © 2024 СварМастер. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
