import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, Send } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-alteris-black text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Блок 1: О компании */}
          <div>
            <h3 className="text-xl font-light mb-4 tracking-wide">ALTERIS</h3>
            <p className="text-sm text-alteris-light-gray/80 mb-6 max-w-xs">
              Украшения, которые становятся частью тебя. Мы создаем изделия, которые
              подстраиваются под вас, подчеркивая вашу индивидуальность.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-alteris-silver hover:text-alteris-warm-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-alteris-silver hover:text-alteris-warm-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-alteris-silver hover:text-alteris-warm-gold transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Блок 2: Навигация */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-alteris-silver mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/catalog" className="text-alteris-light-gray/80 hover:text-alteris-warm-gold transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-alteris-light-gray/80 hover:text-alteris-warm-gold transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-alteris-light-gray/80 hover:text-alteris-warm-gold transition-colors">
                  О бренде
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-alteris-light-gray/80 hover:text-alteris-warm-gold transition-colors">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-alteris-light-gray/80 hover:text-alteris-warm-gold transition-colors">
                  Доставка и возврат
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-alteris-light-gray/80 hover:text-alteris-warm-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Блок 3: Категории */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-alteris-silver mb-4">Категории</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/catalog?category=rings" className="text-alteris-light-gray/80 hover:text-alteris-warm-gold transition-colors">
                  Кольца
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=earrings" className="text-alteris-light-gray/80 hover:text-alteris-warm-gold transition-colors">
                  Серьги
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=necklaces" className="text-alteris-light-gray/80 hover:text-alteris-warm-gold transition-colors">
                  Подвески
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=bracelets" className="text-alteris-light-gray/80 hover:text-alteris-warm-gold transition-colors">
                  Браслеты
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=exclusive" className="text-alteris-light-gray/80 hover:text-alteris-warm-gold transition-colors">
                  Эксклюзивные изделия
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Блок 4: Подписка */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-alteris-silver mb-4">Подписка</h4>
            <p className="text-sm text-alteris-light-gray/80 mb-4">
              Подпишитесь на нашу рассылку и получите скидку 10% на первый заказ
            </p>
            <div className="flex">
              <Input 
                placeholder="Ваш email" 
                className="rounded-r-none bg-alteris-dark-gray border-alteris-dark-gray focus-visible:ring-alteris-warm-gold"
              />
              <Button className="rounded-l-none bg-alteris-warm-gold hover:bg-alteris-warm-gold/90 text-alteris-black">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-alteris-light-gray/60 mt-3">
              Нажимая на кнопку, вы соглашаетесь с нашей <Link to="/privacy" className="text-alteris-silver hover:text-alteris-warm-gold">политикой конфиденциальности</Link>
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-alteris-dark-gray text-center text-xs text-alteris-light-gray/60">
          <p>© {new Date().getFullYear()} Alteris. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;