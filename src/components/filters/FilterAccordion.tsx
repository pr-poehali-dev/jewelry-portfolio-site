import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import FilterCheckboxGroup, { FilterItem } from "./FilterCheckboxGroup";
import PriceRangeFilter from "./PriceRangeFilter";
import { FilterOptions } from "./types";

type FilterAccordionProps = {
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

const FilterAccordion = ({
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
}: FilterAccordionProps) => {
  return (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={["categories", "price"]}>
        <AccordionItem value="categories">
          <AccordionTrigger className="text-sm font-medium py-3">Категории</AccordionTrigger>
          <AccordionContent>
            <FilterCheckboxGroup 
              items={categories}
              selectedItems={localFilters.categories}
              idPrefix="category"
              onItemChange={onCategoryChange}
            />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="materials">
          <AccordionTrigger className="text-sm font-medium py-3">Материалы</AccordionTrigger>
          <AccordionContent>
            <FilterCheckboxGroup 
              items={materials}
              selectedItems={localFilters.materials}
              idPrefix="material"
              onItemChange={onMaterialChange}
            />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="styles">
          <AccordionTrigger className="text-sm font-medium py-3">Стиль</AccordionTrigger>
          <AccordionContent>
            <FilterCheckboxGroup 
              items={styles}
              selectedItems={localFilters.styles}
              idPrefix="style"
              onItemChange={onStyleChange}
            />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="price">
          <AccordionTrigger className="text-sm font-medium py-3">Цена</AccordionTrigger>
          <AccordionContent>
            <PriceRangeFilter 
              priceRange={localFilters.priceRange}
              min={priceMin}
              max={priceMax}
              onPriceChange={onPriceChange}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="pt-2">
        <Button 
          onClick={onResetFilters} 
          variant="outline" 
          className="w-full"
        >
          Сбросить все фильтры
        </Button>
      </div>
    </div>
  );
};

export default FilterAccordion;