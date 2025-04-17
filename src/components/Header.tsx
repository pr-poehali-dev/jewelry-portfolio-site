import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", path: "/" },
    { name: "Портфолио", path: "/portfolio" },
    { name: "Отзывы", path: "/reviews" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-jewelry-gold/20 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-jewelry-gold">Эстетика</span>
          <span className="text-sm text-muted-foreground italic">ювелирные изделия</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-base font-medium transition-colors hover:text-jewelry-gold ${
                location.pathname === item.path
                  ? "text-jewelry-gold"
                  : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="outline" className="border-jewelry-gold text-jewelry-gold hover:bg-jewelry-gold/10">
            Связаться с нами
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-jewelry-gold/20 py-4 shadow-lg">
          <nav className="flex flex-col space-y-4 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium transition-colors hover:text-jewelry-gold ${
                  location.pathname === item.path
                    ? "text-jewelry-gold"
                    : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="outline" className="border-jewelry-gold text-jewelry-gold hover:bg-jewelry-gold/10 w-full">
              Связаться с нами
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;