import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SORT_OPTIONS } from "./CatalogConstants";

type ProductSortingProps = {
  sortOrder: string;
  onSortChange: (value: string) => void;
  totalProducts: number;
};

const ProductSorting = ({ 
  sortOrder, 
  onSortChange, 
  totalProducts 
}: ProductSortingProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
      <p className="text-sm text-muted-foreground mb-3 sm:mb-0">
        Найдено товаров: {totalProducts}
      </p>
      <div className="w-full sm:w-auto">
        <Select value={sortOrder} onValueChange={onSortChange}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Сортировка" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={SORT_OPTIONS.FEATURED}>По популярности</SelectItem>
            <SelectItem value={SORT_OPTIONS.PRICE_ASC}>Цена: по возрастанию</SelectItem>
            <SelectItem value={SORT_OPTIONS.PRICE_DESC}>Цена: по убыванию</SelectItem>
            <SelectItem value={SORT_OPTIONS.NAME_ASC}>Название: А-Я</SelectItem>
            <SelectItem value={SORT_OPTIONS.NAME_DESC}>Название: Я-А</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductSorting;