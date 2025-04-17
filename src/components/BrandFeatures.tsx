import { RefreshCw, Shield, Package, Clock } from "lucide-react";

const features = [
  {
    icon: <RefreshCw className="h-6 w-6" />,
    title: "Универсальность",
    description: "Украшения, которые подходят под любой стиль и образ"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Качество",
    description: "Используем только проверенные материалы высшего качества"
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Эксклюзивность",
    description: "Каждое изделие создается вручную с вниманием к деталям"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Быстрая доставка",
    description: "Доставляем по всей России в течение 1-3 дней"
  }
];

const BrandFeatures = () => {
  return (
    <section className="py-16 bg-alteris-light-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="mb-4 text-alteris-warm-gold">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandFeatures;