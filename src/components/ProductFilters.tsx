import { useState } from "react";
import { X, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export type FilterOptions = {
  categories: string[];
  materials: string[];
  styles: string[];
  priceRange: [number, number];
};

type ProductFiltersProps = {
  filters: FilterOptions;
  onChange: (filters: FilterOptions) => void;
  priceMin: number;
  priceMax: number;
};

const ProductFilters = ({ filters, onChange, priceMin, priceMax }: ProductFiltersProps) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState<FilterOptions>(filters);
  
  const categories = [
    { id: "rings", label: "Кольца" },
    { id: "earrings", label: "Серьги" },
    { id: "necklaces", label: "Подвески" },
    { id: "bracelets", label: "Браслеты" },
    { id: "exclusive", label: "Эксклюзив" },
  ];
  
  const materials = [
    { id: "silver", label: "Серебро" },
    { id: "gold", label: "Золото" },
    { id: "rose-gold", label: "Розовое золото" },
    { id: "ceramic", label: "Керамика" },
    { id: "leather", label: "Кожа" },
  ];
  
  const styles = [
    { id: "minimalism", label: "Минимализм" },
    { id: "classic", label: "Классика" },
    { id: "statement", label: "Statement" },
    { id: "geometric", label: "Геометрия" },
  ];
  
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

  // Рендерим фильтры, которые будут использоваться как в десктопной, так и в мобильной версии
  const renderFilterContent = () => (
    <div className="space-y-6">
      <Accordion type="multiple" defaultValue={["categories", "price"]}>
        <AccordionItem value="categories">
          <AccordionTrigger className="text-sm font-medium py-3">Категории</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`category-${category.id}`} 
                    checked={localFilters.categories.includes(category.id)}
                    onCheckedChange={() => handleCategoryChange(category.id)}
                  />
                  <label 
                    htmlFor={`category-${category.id}`}
                    className="text-sm cursor-pointer"
                  >
                    {category.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="materials">
          <AccordionTrigger className="text-sm font-medium py-3">Материалы</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {materials.map((material) => (
                <div key={material.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`material-${material.id}`}
                    checked={localFilters.materials.includes(material.id)}
                    onCheckedChange={() => handleMaterialChange(material.id)}
                  />
                  <label 
                    htmlFor={`material-${material.id}`}
                    className="text-sm cursor-pointer"
                  >
                    {material.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="styles">
          <AccordionTrigger className="text-sm font-medium py-3">Стиль</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {styles.map((style) => (
                <div key={style.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`style-${style.id}`}
                    checked={localFilters.styles.includes(style.id)}
                    onCheckedChange={() => handleStyleChange(style.id)}
                  />
                  <label 
                    htmlFor={`style-${style.id}`}
                    className="text-sm cursor-pointer"
                  >
                    {style.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="price">
          <AccordionTrigger className="text-sm font-medium py-3">Цена</AccordionTrigger>
          <AccordionContent>
            <div className="pt-6 px-2">
              <Slider 
                defaultValue={[localFilters.priceRange[0], localFilters.priceRange[1]]}
                min={priceMin}
                max={priceMax}
                step={100}
                onValueChange={handlePriceChange}
              />
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>{localFilters.priceRange[0]} ₽</span>
                <span>{localFilters.priceRange[1]} ₽</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="pt-2">
        <Button 
          onClick={resetFilters} 
          variant="outline" 
          className="w-full"
        >
          Сбросить все фильтры
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Десктопные фильтры */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <div className="sticky top-28">
          <div className="pb-6">
            <h3 className="text-lg font-medium mb-6">Фильтры</h3>
            {renderFilterContent()}
          </div>
        </div>
      </div>
      
      {/* Мобильные фильтры */}
      <div className="md:hidden w-full mb-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Товары</h3>
          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
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
              {renderFilterContent()}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t">
                <Button 
                  onClick={applyFilters}
                  className="w-full bg-alteris-black hover:bg-alteris-dark-gray"
                >
                  Применить фильтры
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default ProductFilters;