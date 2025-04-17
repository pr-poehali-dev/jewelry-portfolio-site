import HeroSection from "@/components/HeroSection";
import BrandFeatures from "@/components/BrandFeatures";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <BrandFeatures />
      <FeaturedProducts />
      
      {/* Секция о бренде */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-6">
                Украшения, которые становятся частью тебя
              </h2>
              <p className="text-muted-foreground mb-6">
                Мы в Alteris верим, что украшения — это не просто аксессуары. Они являются отражением вашей индивидуальности, вашей истории.
                Каждое наше изделие создано с мыслью о вас и вашем уникальном стиле.
              </p>
              <p className="text-muted-foreground mb-8">
                Наши украшения подстраиваются под ваш стиль, образ жизни и настроение,
                становясь естественным продолжением вашей индивидуальности.
              </p>
              <Link to="/about">
                <Button className="bg-alteris-black hover:bg-alteris-dark-gray shine-button">
                  Узнать больше о нас
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="О бренде Alteris"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg overflow-hidden shadow-xl border-4 border-alteris-white">
                  <img
                    src="/placeholder.svg"
                    alt="Процесс создания украшений"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Секция с новинками */}
      <section className="py-16 bg-alteris-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-6">
            Новая коллекция Urbana
          </h2>
          <p className="text-alteris-silver mb-8 max-w-2xl mx-auto">
            Вдохновленная городской архитектурой и современным образом жизни,
            коллекция Urbana сочетает в себе минимализм и функциональность.
          </p>
          <Link to="/catalog?collection=urbana">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 shine-button">
              Смотреть коллекцию
            </Button>
          </Link>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Коллекция Urbana - серьги" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Коллекция Urbana - кольцо" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Коллекция Urbana - браслет" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Instagram секция */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide mb-3">
            Подписывайтесь на нас в Instagram
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            @alteris_jewelry
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="aspect-square overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt={`Instagram пост ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;