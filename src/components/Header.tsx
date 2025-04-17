import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ShoppingBag, User, Heart } from "lucide-react";
import { Button } from "./ui/button";

type HeaderProps = {
  onSearchClick: () => void;
};

const Header = ({ onSearchClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", path: "/" },
    { name: "Каталог", path: "/catalog" },
    { name: "Портфолио", path: "/portfolio" },
    { name: "О бренде", path: "/about" },
    { name: "Отзывы", path: "/reviews" },
    { name: "Контакты", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Проверка, активна ли ссылка
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm" 
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center z-10">
            <h1 className="text-2xl tracking-wider font-light">
              ALTERIS
            </h1>
          </Link>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`navbar-link ${isActive(item.path) ? "active-link text-alteris-warm-gold" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Иконки */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={onSearchClick}
              className="text-foreground hover:text-alteris-warm-gold transition-colors"
              aria-label="Поиск"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link 
              to="/favorites" 
              className="text-foreground hover:text-alteris-warm-gold transition-colors"
              aria-label="Избранное"
            >
              <Heart className="h-5 w-5" />
            </Link>
            <Link 
              to="/account" 
              className="text-foreground hover:text-alteris-warm-gold transition-colors"
              aria-label="Мой аккаунт"
            >
              <User className="h-5 w-5" />
            </Link>
            <Link 
              to="/cart" 
              className="text-foreground hover:text-alteris-warm-gold transition-colors relative"
              aria-label="Корзина"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-alteris-warm-gold text-white text-xs flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Мобильная кнопка меню */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={onSearchClick}
              className="text-foreground hover:text-alteris-warm-gold transition-colors"
              aria-label="Поиск"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link 
              to="/cart" 
              className="text-foreground hover:text-alteris-warm-gold transition-colors relative"
              aria-label="Корзина"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-alteris-warm-gold text-white text-xs flex items-center justify-center">
                0
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Меню"
              className="text-foreground hover:text-alteris-warm-gold hover:bg-transparent"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-alteris-silver/20 animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base py-2 ${
                  isActive(item.path) 
                    ? "text-alteris-warm-gold" 
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-6 pt-2">
              <Link 
                to="/favorites" 
                className="text-foreground hover:text-alteris-warm-gold transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart className="h-5 w-5 mr-2" />
                <span>Избранное</span>
              </Link>
              <Link 
                to="/account" 
                className="text-foreground hover:text-alteris-warm-gold transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5 mr-2" />
                <span>Аккаунт</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;