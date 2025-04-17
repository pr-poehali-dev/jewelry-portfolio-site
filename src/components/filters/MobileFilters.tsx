import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FilterAccordion from "./FilterAccordion";
import { FilterItem } from "./FilterCheckboxGroup";
import { FilterOptions } from "./types";

type MobileFiltersProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
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
  onApplyFilters: () => void;
};

const MobileFilters = ({
  isOpen,
  onOpenChange,
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
  onResetFilters,
  onApplyFilters
}: MobileFiltersProps) => {
  return (
    <div className="md:hidden w-full mb-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Товары</h3>
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
          <SheetTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Фильтры
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:max-w-md">
            <SheetHeader className="mb-6">
              <SheetTitle>Фильтры</SheetTitle>
            </SheetHeader>
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
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t">
              <Button 
                onClick={onApplyFilters}
                className="w-full bg-alteris-black hover:bg-alteris-dark-gray"
              >
                Применить фильтры
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileFilters;