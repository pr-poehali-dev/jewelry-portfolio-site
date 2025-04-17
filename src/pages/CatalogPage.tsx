import ProductFilters from "@/components/ProductFilters";
import ProductSorting from "@/components/catalog/ProductSorting";
import ProductGrid from "@/components/catalog/ProductGrid";
import EmptyResults from "@/components/catalog/EmptyResults";
import { PRICE_MIN, PRICE_MAX } from "@/components/catalog/CatalogConstants";
import useCatalogProducts from "@/components/catalog/useCatalogProducts";

const CatalogPage = () => {
  const {
    filteredProducts,
    visibleProducts,
    sortOrder,
    filters,
    handleFilterChange,
    handleSortChange,
    loadMore,
    resetAllFilters
  } = useCatalogProducts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-light tracking-wide mb-2">Каталог</h1>
        <p className="text-muted-foreground">
          Выберите украшения, которые лучше всего выражают вашу индивидуальность
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Фильтры */}
        <ProductFilters 
          filters={filters}
          onChange={handleFilterChange}
          priceMin={PRICE_MIN}
          priceMax={PRICE_MAX}
        />
        
        {/* Товары */}
        <div className="flex-1">
          {/* Сортировка и количество товаров */}
          <ProductSorting 
            sortOrder={sortOrder}
            onSortChange={handleSortChange}
            totalProducts={filteredProducts.length}
          />
          
          {/* Список товаров или сообщение о пустом результате */}
          {filteredProducts.length > 0 ? (
            <ProductGrid 
              products={filteredProducts}
              visibleCount={visibleProducts}
              onLoadMore={loadMore}
            />
          ) : (
            <EmptyResults onResetFilters={resetAllFilters} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;