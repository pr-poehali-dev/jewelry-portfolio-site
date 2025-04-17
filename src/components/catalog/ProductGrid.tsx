import { Product } from "@/components/ProductCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

type ProductGridProps = {
  products: Product[];
  visibleCount: number;
  onLoadMore: () => void;
};

const ProductGrid = ({ 
  products, 
  visibleCount, 
  onLoadMore 
}: ProductGridProps) => {
  const visibleProducts = products.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < products.length;
  
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg mb-2">По вашему запросу ничего не найдено</p>
        <p className="text-muted-foreground mb-6">
          Попробуйте изменить параметры фильтрации или сбросить фильтры
        </p>
      </div>
    );
  }
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {hasMoreProducts && (
        <div className="text-center mt-10">
          <Button 
            variant="outline"
            onClick={onLoadMore}
            className="border-alteris-silver hover:border-alteris-warm-gold hover:text-alteris-warm-gold transition-colors"
          >
            Показать еще
          </Button>
        </div>
      )}
    </>
  );
};

export default ProductGrid;