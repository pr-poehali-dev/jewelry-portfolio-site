import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  style: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Alteris – другой взгляд на украшения",
    subtitle: "Создано, чтобы подстраиваться под вас",
    image: "/placeholder.svg",
    style: "office",
  },
  {
    id: 2,
    title: "Коллекция Minimal",
    subtitle: "Идеальна для повседневной жизни",
    image: "/placeholder.svg",
    style: "casual",
  },
  {
    id: 3,
    title: "Statement Pieces",
    subtitle: "Для особенных моментов",
    image: "/placeholder.svg",
    style: "evening",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="relative h-[90vh] overflow-hidden">
      {/* Фоновый слайдер */}
      <div className="absolute inset-0 bg-alteris-black">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === index 
                ? isTransitioning 
                  ? "opacity-0" 
                  : "opacity-100" 
                : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center opacity-70"
            />
          </div>
        ))}
        
        {/* Градиент для улучшения читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-r from-alteris-black/50 to-transparent"></div>
      </div>

      {/* Контент */}
      <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-center">
        <div className="max-w-xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ease-in-out ${
                currentSlide === index 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10 absolute"
              }`}
            >
              {currentSlide === index && (
                <>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-wide">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-alteris-silver mb-8">
                    {slide.subtitle}
                  </p>
                </>
              )}
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-white hover:bg-alteris-silver text-alteris-black shine-button"
            >
              Купить сейчас
            </Button>
            
            <Link to="/catalog">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 group shine-button"
              >
                Смотреть коллекцию
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Индикаторы слайдов */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index 
                ? "bg-alteris-warm-gold w-8" 
                : "bg-alteris-silver/50 hover:bg-alteris-silver"
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;