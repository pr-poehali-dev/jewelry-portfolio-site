import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductQuickView from "./ProductQuickView";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  materials: string[];
  images: string[];
  isNew?: boolean;
  isBestseller?: boolean;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const openQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowQuickView(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <Link to={`/catalog/${product.id}`}>
        <Card 
          className="product-card h-full overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CardContent className="p-0">
            <div className="relative aspect-square overflow-hidden bg-alteris-light-gray">
              {/* Основное изображение */}
              <img
                src={product.images[0]}
                alt={product.name}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  isHovered && product.images.length > 1 ? "opacity-0" : "opacity-100"
                }`}
              />
              
              {/* Второе изображение (для эффекта при наведении) */}
              {product.images.length > 1 && (
                <img
                  src={product.images[1]}
                  alt={`${product.name} - другой ракурс`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
              
              {/* Кнопки действий */}
              <div 
                className={`absolute bottom-3 right-3 flex items-center space-x-2 transition-all duration-300 ${
                  isHovered ? "transform translate-y-0 opacity-100" : "transform translate-y-10 opacity-0"
                }`}
              >
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-9 w-9 bg-white/90 hover:bg-white rounded-full shadow-md"
                  onClick={toggleFavorite}
                >
                  <Heart 
                    className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : "text-alteris-black"}`} 
                  />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-9 w-9 bg-white/90 hover:bg-white rounded-full shadow-md"
                  onClick={openQuickView}
                >
                  <Eye className="h-4 w-4 text-alteris-black" />
                </Button>
              </div>
              
              {/* Бейджи */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-alteris-black text-white border-none">Новинка</Badge>
                )}
                {product.isBestseller && (
                  <Badge className="bg-alteris-warm-gold text-alteris-black border-none">Бестселлер</Badge>
                )}
              </div>
            </div>
            
            <div className="p-4 space-y-2">
              <p className="text-sm text-muted-foreground uppercase">
                {product.category}
              </p>
              <h3 className="font-medium tracking-wide">
                {product.name}
              </h3>
              <p className="font-light">
                {formatPrice(product.price)}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
      
      {/* Модальное окно быстрого просмотра */}
      <ProductQuickView 
        product={product} 
        isOpen={showQuickView} 
        onClose={() => setShowQuickView(false)} 
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </>
  );
};

export default ProductCard;