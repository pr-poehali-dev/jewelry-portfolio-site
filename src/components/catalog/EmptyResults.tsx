import { Button } from "@/components/ui/button";
import { FilterOptions } from "@/components/filters/types";
import { PRICE_MIN, PRICE_MAX } from "./CatalogConstants";

type EmptyResultsProps = {
  onResetFilters: () => void;
};

const EmptyResults = ({ onResetFilters }: EmptyResultsProps) => {
  return (
    <div className="text-center py-16">
      <p className="text-lg mb-2">По вашему запросу ничего не найдено</p>
      <p className="text-muted-foreground mb-6">
        Попробуйте изменить параметры фильтрации или сбросить фильтры
      </p>
      <Button 
        onClick={onResetFilters}
        className="bg-alteris-black hover:bg-alteris-dark-gray"
      >
        Сбросить все фильтры
      </Button>
    </div>
  );
};

export default EmptyResults;