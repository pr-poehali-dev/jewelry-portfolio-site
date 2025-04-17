import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SearchModal from "./SearchModal";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

const Layout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Закрыть поиск при смене страницы
    setIsSearchOpen(false);
    // Скролл наверх при переходе на новую страницу
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header onSearchClick={toggleSearch} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Модальное окно поиска */}
      <SearchModal isOpen={isSearchOpen} onClose={toggleSearch} />

      {/* Кнопка прокрутки наверх */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full bg-alteris-silver/90 hover:bg-alteris-warm-gold p-0 shadow-lg transition-all duration-300"
          aria-label="Прокрутить наверх"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Layout;