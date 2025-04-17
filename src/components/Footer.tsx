import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-jewelry-dark text-jewelry-light mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-jewelry-gold mb-4">Эстетика</h3>
            <p className="text-sm mb-6">
              Авторские ювелирные украшения ручной работы. Мы создаем уникальные изделия, которые подчеркивают индивидуальность и красоту каждого клиента.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-jewelry-light hover:text-jewelry-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-jewelry-light hover:text-jewelry-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-jewelry-gold mb-4">Разделы</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-jewelry-light hover:text-jewelry-gold transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-jewelry-light hover:text-jewelry-gold transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-jewelry-light hover:text-jewelry-gold transition-colors">
                  Отзывы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-jewelry-gold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-jewelry-gold" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-jewelry-gold" />
                <span>info@jewelry-estetika.ru</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-jewelry-gold mt-1" />
                <span>г. Москва, ул. Пресненская наб., 12</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-jewelry-gold/20 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Эстетика. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;