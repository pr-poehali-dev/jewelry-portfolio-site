import FilterAccordion from "./FilterAccordion";
import { FilterItem } from "./FilterCheckboxGroup";
import { FilterOptions } from "./types";

type DesktopFiltersProps = {
  localFilters: FilterOptions;
  categories: FilterItem[];
  materials: FilterItem[];
  styles: FilterItem[];
  priceMin: number;
  priceMax: number;
  onCategoryChange: (category: string) => void;
  onMaterialChange: (material: string) => void;
  onStyleChange: (style: string) => void;
  onPriceChange: (value: number[]) => void;
  onResetFilters: () => void;
};

const DesktopFilters = ({
  localFilters,
  categories,
  materials,
  styles,
  priceMin,
  priceMax,
  onCategoryChange,
  onMaterialChange,
  onStyleChange,
  onPriceChange,
  onResetFilters
}: DesktopFiltersProps) => {
  return (
    <div className="hidden md:block w-64 flex-shrink-0">
      <div className="sticky top-28">
        <div className="pb-6">
          <h3 className="text-lg font-medium mb-6">Фильтры</h3>
          <FilterAccordion 
            localFilters={localFilters}
            categories={categories}
            materials={materials}
            styles={styles}
            priceMin={priceMin}
            priceMax={priceMax}
            onCategoryChange={onCategoryChange}
            onMaterialChange={onMaterialChange}
            onStyleChange={onStyleChange}
            onPriceChange={onPriceChange}
            onResetFilters={onResetFilters}
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopFilters;