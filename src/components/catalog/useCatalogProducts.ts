import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Product } from "@/components/ProductCard";
import { FilterOptions } from "@/components/filters/types";
import { catalogProducts } from "./catalogData";
import { PRICE_MIN, PRICE_MAX, SORT_OPTIONS, DEFAULT_VISIBLE_PRODUCTS } from "./CatalogConstants";

type UseCatalogProductsResult = {
  products: Product[];
  filteredProducts: Product[];
  visibleProducts: number;
  sortOrder: string;
  filters: FilterOptions;
  handleFilterChange: (newFilters: FilterOptions) => void;
  handleSortChange: (value: string) => void;
  loadMore: () => void;
  resetAllFilters: () => void;
};

export const useCatalogProducts = (): UseCatalogProductsResult => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>(catalogProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(catalogProducts);
  const [sortOrder, setSortOrder] = useState(SORT_OPTIONS.FEATURED);
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    materials: [],
    styles: [],
    priceRange: [PRICE_MIN, PRICE_MAX],
  });
  const [visibleProducts, setVisibleProducts] = useState(DEFAULT_VISIBLE_PRODUCTS);

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
      case SORT_OPTIONS.PRICE_ASC:
        result.sort((a, b) => a.price - b.price);
        break;
      case SORT_OPTIONS.PRICE_DESC:
        result.sort((a, b) => b.price - a.price);
        break;
      case SORT_OPTIONS.NAME_ASC:
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case SORT_OPTIONS.NAME_DESC:
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
    setVisibleProducts(prev => prev + DEFAULT_VISIBLE_PRODUCTS);
  };

  const resetAllFilters = () => {
    handleFilterChange({
      categories: [],
      materials: [],
      styles: [],
      priceRange: [PRICE_MIN, PRICE_MAX],
    });
  };

  return {
    products,
    filteredProducts,
    visibleProducts,
    sortOrder,
    filters,
    handleFilterChange,
    handleSortChange,
    loadMore,
    resetAllFilters
  };
};

export default useCatalogProducts;