import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Ювелирная мастерская"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-jewelry-gold bg-jewelry-light rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg"
                  alt="Процесс создания украшений"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">О нашей мастерской</h2>
            
            <p className="text-muted-foreground mb-4">
              Мастерская "Эстетика" — это пространство, где рождаются уникальные ювелирные украшения. 
              Мы сочетаем традиционные техники с современными подходами, чтобы создавать изделия, которые станут частью вашей истории.
            </p>
            
            <p className="text-muted-foreground mb-6">
              Каждый этап создания украшения — от первоначального эскиза до финальной полировки — выполняется с особым вниманием к деталям и качеству.
              Наши мастера имеют многолетний опыт работы с драгоценными металлами и камнями.
            </p>
            
            <ul className="space-y-2 mb-8">
              <li className="flex items-center">
                <span className="text-jewelry-gold mr-2">✦</span>
                <span>Индивидуальный подход к каждому клиенту</span>
              </li>
              <li className="flex items-center">
                <span className="text-jewelry-gold mr-2">✦</span>
                <span>Использование только качественных материалов</span>
              </li>
              <li className="flex items-center">
                <span className="text-jewelry-gold mr-2">✦</span>
                <span>Гарантия на все изделия</span>
              </li>
            </ul>
            
            <Button className="bg-jewelry-gold hover:bg-jewelry-gold/90 text-white">
              Узнать больше о нас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;