import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Уникальные <span className="text-jewelry-gold">ювелирные</span> изделия 
              <br />ручной работы
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Мы создаем украшения, которые подчеркивают вашу индивидуальность и становятся частью вашей истории.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-jewelry-gold hover:bg-jewelry-gold/90 text-white">
                Смотреть коллекцию
              </Button>
              
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="border-jewelry-gold text-jewelry-gold hover:bg-jewelry-gold/10">
                  Наши работы
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative aspect-square rounded-full overflow-hidden border-4 border-jewelry-gold/30 shadow-xl">
            <img 
              src="/placeholder.svg" 
              alt="Ювелирные украшения ручной работы" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 gold-shimmer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;