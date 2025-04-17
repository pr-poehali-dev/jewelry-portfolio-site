import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type JewelryItem = {
  id: number;
  name: string;
  category: string;
  materials: string[];
  image: string;
  description: string;
  price: string;
};

const portfolioItems: JewelryItem[] = [
  {
    id: 1,
    name: "Золотое кольцо с бриллиантом",
    category: "Кольца",
    materials: ["Золото 585", "Бриллиант"],
    image: "/placeholder.svg",
    description: "Элегантное кольцо из золота 585 пробы с бриллиантом круглой огранки весом 0.5 карат.",
    price: "45 000 ₽",
  },
  {
    id: 2,
    name: "Серебряный браслет с гравировкой",
    category: "Браслеты",
    materials: ["Серебро 925"],
    image: "/placeholder.svg",
    description: "Утонченный браслет из серебра 925 пробы с возможностью нанесения персональной гравировки.",
    price: "12 500 ₽",
  },
  {
    id: 3,
    name: "Колье из розового золота",
    category: "Колье",
    materials: ["Розовое золото 585", "Топаз"],
    image: "/placeholder.svg",
    description: "Нежное колье из розового золота 585 пробы с подвеской, украшенной топазом грушевидной огранки.",
    price: "35 700 ₽",
  },
  {
    id: 4,
    name: "Серьги с сапфирами",
    category: "Серьги",
    materials: ["Белое золото 750", "Сапфир"],
    image: "/placeholder.svg",
    description: "Изысканные серьги из белого золота 750 пробы с сапфирами общим весом 1.2 карата.",
    price: "64 300 ₽",
  },
  {
    id: 5,
    name: "Брошь 'Колибри'",
    category: "Броши",
    materials: ["Серебро 925", "Эмаль", "Цирконий"],
    image: "/placeholder.svg",
    description: "Яркая брошь в форме колибри, выполненная из серебра 925 пробы с цветной эмалью и фианитами.",
    price: "18 900 ₽",
  },
  {
    id: 6,
    name: "Платиновое обручальное кольцо",
    category: "Кольца",
    materials: ["Платина 950"],
    image: "/placeholder.svg",
    description: "Классическое обручальное кольцо из платины 950 пробы с матовой поверхностью.",
    price: "52 800 ₽",
  },
];

const categories = ["Все", "Кольца", "Браслеты", "Колье", "Серьги", "Броши"];

const PortfolioGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedItem, setSelectedItem] = useState<JewelryItem | null>(null);

  const filteredItems = selectedCategory === "Все"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);
    
  const openModal = (item: JewelryItem) => {
    setSelectedItem(item);
  };
  
  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={
              selectedCategory === category
                ? "bg-jewelry-gold hover:bg-jewelry-gold/90 text-white"
                : "border-jewelry-gold/30 text-jewelry-gold hover:bg-jewelry-gold/10"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="jewel-card overflow-hidden cursor-pointer" onClick={() => openModal(item)}>
            <CardContent className="p-0">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs text-jewelry-gold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="font-semibold text-jewelry-gold">{item.price}</span>
                </div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <div className="mt-3 flex flex-wrap gap-1">
                  {item.materials.map((material, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-jewelry-gold/5 border-jewelry-gold/20">
                      {material}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Детальный просмотр изделия (модальное окно) */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name} 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedItem.name}</h3>
                <span className="text-jewelry-gold text-lg font-semibold block mb-4">{selectedItem.price}</span>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Категория:</h4>
                  <p>{selectedItem.category}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Материалы:</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedItem.materials.map((material, index) => (
                      <Badge key={index} variant="outline" className="bg-jewelry-gold/5 border-jewelry-gold/20">
                        {material}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Описание:</h4>
                  <p className="text-muted-foreground">{selectedItem.description}</p>
                </div>
                
                <div className="flex gap-3">
                  <Button className="bg-jewelry-gold hover:bg-jewelry-gold/90 text-white">
                    Заказать похожее
                  </Button>
                  <Button variant="outline" onClick={closeModal}>
                    Закрыть
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGrid;