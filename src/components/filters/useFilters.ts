import { useState } from "react";
import { FilterOptions } from "./types";

type UseFiltersProps = {
  initialFilters: FilterOptions;
  priceMin: number;
  priceMax: number;
  onChange: (filters: FilterOptions) => void;
};

export const useFilters = ({ initialFilters, priceMin, priceMax, onChange }: UseFiltersProps) => {
  const [localFilters, setLocalFilters] = useState<FilterOptions>(initialFilters);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
  const handleCategoryChange = (category: string) => {
    const updatedCategories = localFilters.categories.includes(category)
      ? localFilters.categories.filter(c => c !== category)
      : [...localFilters.categories, category];
    
    setLocalFilters({ ...localFilters, categories: updatedCategories });
  };
  
  const handleMaterialChange = (material: string) => {
    const updatedMaterials = localFilters.materials.includes(material)
      ? localFilters.materials.filter(m => m !== material)
      : [...localFilters.materials, material];
    
    setLocalFilters({ ...localFilters, materials: updatedMaterials });
  };
  
  const handleStyleChange = (style: string) => {
    const updatedStyles = localFilters.styles.includes(style)
      ? localFilters.styles.filter(s => s !== style)
      : [...localFilters.styles, style];
    
    setLocalFilters({ ...localFilters, styles: updatedStyles });
  };
  
  const handlePriceChange = (value: number[]) => {
    setLocalFilters({ ...localFilters, priceRange: [value[0], value[1]] });
  };
  
  const applyFilters = () => {
    onChange(localFilters);
    setMobileFiltersOpen(false);
  };
  
  const resetFilters = () => {
    const emptyFilters: FilterOptions = {
      categories: [],
      materials: [],
      styles: [],
      priceRange: [priceMin, priceMax],
    };
    setLocalFilters(emptyFilters);
    onChange(emptyFilters);
  };

  return {
    localFilters,
    mobileFiltersOpen,
    setMobileFiltersOpen,
    handleCategoryChange,
    handleMaterialChange,
    handleStyleChange,
    handlePriceChange,
    applyFilters,
    resetFilters
  };
};

export default useFilters;