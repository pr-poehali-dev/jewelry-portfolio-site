import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard, { Product } from "@/components/ProductCard";
import ProductFilters, { FilterOptions } from "@/components/ProductFilters";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Имитация данных каталога
const catalogProducts: Product[] = [
  {
    id: "1",
    name: "Кольцо Infinity",
    price: 12500,
    category: "Кольца",
    materials: ["Серебро 925", "Керамика"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    isBestseller: true,
  },
  {
    id: "2",
    name: "Серьги Minimal",
    price: 9800,
    category: "Серьги",
    materials: ["Серебро 925"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    isBestseller: true,
  },
  {
    id: "3",
    name: "Браслет Connection",
    price: 15700,
    category: "Браслеты",
    materials: ["Серебро 925", "Кожа"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    isBestseller: true,
  },
  {
    id: "4",
    name: "Колье Horizon",
    price: 18900,
    category: "Колье",
    materials: ["Золото 585", "Бриллиант"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    isBestseller: true,
  },
  {
    id: "5",
    name: "Кольцо Twist",
    price: 14200,
    category: "Кольца",
    materials: ["Серебро 925", "Цирконий"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    isNew: true,
  },
  {
    id: "6",
    name: "Серьги Cascade",
    price: 11500,
    category: "Серьги",
    materials: ["Серебро 925"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    isNew: true,
  },
  {
    id: "7",
    name: "Подвеска Urban",
    price: 10500,
    category: "Подвески",
    materials: ["Серебро 925", "Оникс"],
    images: ["/placeholder.svg", "/placeholder.svg"],
    isNew: true,
  },
  {
    id: "8",
    name: "Браслет Geometry",
    price: 13800,
    category: "Браслеты",
    materials: ["Золото 585"],
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "9",
    name: "Кольцо Eclipse",
    price: 16500,
    category: "Кольца",
    materials: ["Серебро 925", "Черный жемчуг"],
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
];

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>(catalogProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(catalogProducts);
  const [sortOrder, setSortOrder] = useState("featured");
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    materials: [],
    styles: [],
    priceRange: [0, 50000],
  });
  const [visibleProducts, setVisibleProducts] = useState(8);
  
  // Цены для фильтра
  const priceMin = 0;
  const priceMax = 50000;
  
  // Обработка URL-параметров при первой загрузке
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("search");
    
    if (categoryParam) {
      setFilters(prev => ({
        ...prev,
        categories: [categoryParam]
      }));
    }
    
    if (searchParam) {
      const searchResults = catalogProducts.filter(
        product => 
          product.name.toLowerCase().includes(searchParam.toLowerCase()) ||
          product.category.toLowerCase().includes(searchParam.toLowerCase())
      );
      setProducts(searchResults);
    }
  }, [searchParams]);

  // Применение фильтров и сортировки
  useEffect(() => {
    let result = [...products];
    
    // Применение фильтров по категориям
    if (filters.categories.length > 0) {
      result = result.filter(product => 
        filters.categories.some(cat => product.category.toLowerCase().includes(cat.toLowerCase()))
      );
    }
    
    // Применение фильтров по материалам
    if (filters.materials.length > 0) {
      result = result.filter(product =>
        product.materials.some(material =>
          filters.materials.some(mat => material.toLowerCase().includes(mat.toLowerCase()))
        )
      );
    }
    
    // Применение фильтров по цене
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );
    
    // Сортировка
    switch (sortOrder) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // По умолчанию (featured) - уже отсортировано
        break;
    }
    
    setFilteredProducts(result);
  }, [products, filters, sortOrder]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    
    // Обновляем URL, если выбрана одна категория
    if (newFilters.categories.length === 1) {
      setSearchParams({ category: newFilters.categories[0] });
    } else if (searchParams.has("category")) {
      // Если категории сброшены, удаляем параметр из URL
      searchParams.delete("category");
      setSearchParams(searchParams);
    }
  };
  
  const handleSortChange = (value: string) => {
    setSortOrder(value);
  };
  
  const loadMore = () => {
    setVisibleProducts(prev => prev + 8);
  };

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
          priceMin={priceMin}
          priceMax={priceMax}
        />
        
        {/* Товары */}
        <div className="flex-1">
          {/* Сортировка и количество товаров */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <p className="text-sm text-muted-foreground mb-3 sm:mb-0">
              Найдено товаров: {filteredProducts.length}
            </p>
            <div className="w-full sm:w-auto">
              <Select value={sortOrder} onValueChange={handleSortChange}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">По популярности</SelectItem>
                  <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                  <SelectItem value="name-asc">Название: А-Я</SelectItem>
                  <SelectItem value="name-desc">Название: Я-А</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Список товаров */}
          {filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.slice(0, visibleProducts).map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {/* Кнопка "Загрузить еще" */}
              {visibleProducts < filteredProducts.length && (
                <div className="text-center mt-10">
                  <Button 
                    variant="outline"
                    onClick={loadMore}
                    className="border-alteris-silver hover:border-alteris-warm-gold hover:text-alteris-warm-gold transition-colors"
                  >
                    Показать еще
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg mb-2">По вашему запросу ничего не найдено</p>
              <p className="text-muted-foreground mb-6">
                Попробуйте изменить параметры фильтрации или сбросить фильтры
              </p>
              <Button 
                onClick={() => handleFilterChange({
                  categories: [],
                  materials: [],
                  styles: [],
                  priceRange: [priceMin, priceMax],
                })}
                className="bg-alteris-black hover:bg-alteris-dark-gray"
              >
                Сбросить все фильтры
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;