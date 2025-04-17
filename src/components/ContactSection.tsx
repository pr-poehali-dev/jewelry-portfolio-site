import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
    // Сбросить форму после отправки
    setFormData({ name: "", email: "", message: "" });
    // Показать уведомление об успешной отправке
    alert("Ваше сообщение успешно отправлено!");
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Связаться с нами</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            У вас есть вопросы или вы хотите заказать индивидуальное украшение?
            Мы всегда рады помочь вам!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-jewelry-gold/10 text-jewelry-gold mr-4">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Телефон</h4>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                <p className="text-muted-foreground">Пн-Пт: 10:00 - 19:00</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-jewelry-gold/10 text-jewelry-gold mr-4">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Email</h4>
                <p className="text-muted-foreground">info@jewelry-estetika.ru</p>
                <p className="text-muted-foreground">Ответим в течение 24 часов</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-jewelry-gold/10 text-jewelry-gold mr-4">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Адрес</h4>
                <p className="text-muted-foreground">г. Москва, ул. Пресненская наб., 12</p>
                <p className="text-muted-foreground">Башня "Федерация", офис 8017</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Отправить сообщение</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Введите ваше имя"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Введите ваш email"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Введите ваше сообщение"
                  required
                  className="w-full min-h-32"
                />
              </div>

              <Button type="submit" className="w-full bg-jewelry-gold hover:bg-jewelry-gold/90 text-white">
                Отправить сообщение
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;