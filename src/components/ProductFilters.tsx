import DesktopFilters from "./filters/DesktopFilters";
import MobileFilters from "./filters/MobileFilters";
import { categories, materials, styles } from "./filters/filterData";
import { FilterOptions } from "./filters/types";
import useFilters from "./filters/useFilters";

type ProductFiltersProps = {
  filters: FilterOptions;
  onChange: (filters: FilterOptions) => void;
  priceMin: number;
  priceMax: number;
};

const ProductFilters = ({ filters, onChange, priceMin, priceMax }: ProductFiltersProps) => {
  const {
    localFilters,
    mobileFiltersOpen,
    setMobileFiltersOpen,
    handleCategoryChange,
    handleMaterialChange,
    handleStyleChange,
    handlePriceChange,
    applyFilters,
    resetFilters
  } = useFilters({
    initialFilters: filters,
    priceMin,
    priceMax,
    onChange
  });

  return (
    <>
      {/* Десктопные фильтры */}
      <DesktopFilters 
        localFilters={localFilters}
        categories={categories}
        materials={materials}
        styles={styles}
        priceMin={priceMin}
        priceMax={priceMax}
        onCategoryChange={handleCategoryChange}
        onMaterialChange={handleMaterialChange}
        onStyleChange={handleStyleChange}
        onPriceChange={handlePriceChange}
        onResetFilters={resetFilters}
      />
      
      {/* Мобильные фильтры */}
      <MobileFilters 
        isOpen={mobileFiltersOpen}
        onOpenChange={setMobileFiltersOpen}
        localFilters={localFilters}
        categories={categories}
        materials={materials}
        styles={styles}
        priceMin={priceMin}
        priceMax={priceMax}
        onCategoryChange={handleCategoryChange}
        onMaterialChange={handleMaterialChange}
        onStyleChange={handleStyleChange}
        onPriceChange={handlePriceChange}
        onResetFilters={resetFilters}
        onApplyFilters={applyFilters}
      />
    </>
  );
};

export default ProductFilters;