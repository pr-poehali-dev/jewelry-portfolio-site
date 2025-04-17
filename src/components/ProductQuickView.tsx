import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Heart, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Product } from "./ProductCard";

type ProductQuickViewProps = {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void;
};

const ProductQuickView = ({ 
  product, 
  isOpen, 
  onClose, 
  isFavorite, 
  onToggleFavorite 
}: ProductQuickViewProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-background max-w-4xl w-full rounded-lg shadow-xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex justify-end">
          <button 
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 pt-0">
          {/* Изображения */}
          <div>
            <div className="aspect-square rounded-md overflow-hidden bg-alteris-light-gray mb-4">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`w-16 h-16 rounded overflow-hidden flex-shrink-0 border-2 transition-colors ${
                      selectedImage === index 
                        ? "border-alteris-warm-gold" 
                        : "border-transparent hover:border-alteris-silver"
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - изображение ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Информация о товаре */}
          <div>
            <p className="text-sm text-muted-foreground uppercase mb-1">
              {product.category}
            </p>
            <h2 className="text-2xl font-medium tracking-wide mb-3">
              {product.name}
            </h2>
            <p className="text-xl font-light mb-6">
              {formatPrice(product.price)}
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Материалы</h3>
                <div className="flex flex-wrap gap-1">
                  {product.materials.map((material, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button 
                className="flex-1 bg-alteris-black hover:bg-alteris-dark-gray"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                В корзину
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={onToggleFavorite}
              >
                <Heart 
                  className={`h-4 w-4 mr-2 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} 
                />
                {isFavorite ? "В избранном" : "В избранное"}
              </Button>
            </div>
            
            <Link 
              to={`/catalog/${product.id}`}
              className="inline-flex items-center text-sm text-foreground hover:text-alteris-warm-gold transition-colors"
            >
              Подробнее о товаре
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;