import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard, { Product } from "./ProductCard";

// Имитация данных для бестселлеров
const bestsellerProducts: Product[] = [
  {
    id: "1",
    name: "Кольцо Infinity",
    price: 12500,
    category: "Кольца",
    materials: ["Серебро 925", "Керамика"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    isBestseller: true,
  },
  {
    id: "2",
    name: "Серьги Minimal",
    price: 9800,
    category: "Серьги",
    materials: ["Серебро 925"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    isBestseller: true,
  },
  {
    id: "3",
    name: "Браслет Connection",
    price: 15700,
    category: "Браслеты",
    materials: ["Серебро 925", "Кожа"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    isBestseller: true,
  },
  {
    id: "4",
    name: "Колье Horizon",
    price: 18900,
    category: "Колье",
    materials: ["Золото 585", "Бриллиант"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    isBestseller: true,
  },
  {
    id: "5",
    name: "Кольцо Twist",
    price: 14200,
    category: "Кольца",
    materials: ["Серебро 925", "Цирконий"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    isBestseller: true,
  },
  {
    id: "6",
    name: "Серьги Cascade",
    price: 11500,
    category: "Серьги",
    materials: ["Серебро 925"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    isBestseller: true,
  },
];

const FeaturedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = { mobile: 1, tablet: 2, desktop: 4 };
  const totalSlides = bestsellerProducts.length;
  
  // Определение ширины экрана для responsive slidesPerView
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return slidesPerView.mobile;
      if (window.innerWidth < 1024) return slidesPerView.tablet;
      return slidesPerView.desktop;
    }
    return slidesPerView.desktop; // Fallback
  };
  
  const visibleCount = getVisibleCount();
  const maxSlide = totalSlides - visibleCount;
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < maxSlide ? prev + 1 : prev));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide">Бестселлеры</h2>
          <Link 
            to="/catalog"
            className="text-sm text-muted-foreground hover:text-alteris-warm-gold transition-colors"
          >
            Смотреть все
          </Link>
        </div>
        
        <div className="relative">
          {/* Контроллеры для слайдера */}
          <div className="hidden md:flex absolute -top-16 right-0 space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="h-9 w-9 rounded-full border-alteris-silver hover:border-alteris-warm-gold hover:text-alteris-warm-gold transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              disabled={currentSlide >= maxSlide}
              className="h-9 w-9 rounded-full border-alteris-silver hover:border-alteris-warm-gold hover:text-alteris-warm-gold transition-colors"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Мобильные контроллеры */}
          <div className="md:hidden flex justify-center space-x-4 mb-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="h-9 w-9 rounded-full border-alteris-silver hover:border-alteris-warm-gold hover:text-alteris-warm-gold transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              disabled={currentSlide >= maxSlide}
              className="h-9 w-9 rounded-full border-alteris-silver hover:border-alteris-warm-gold hover:text-alteris-warm-gold transition-colors"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Карусель продуктов */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / visibleCount)}%)` }}
            >
              {bestsellerProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;