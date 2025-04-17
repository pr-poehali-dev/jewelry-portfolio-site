import { Checkbox } from "@/components/ui/checkbox";

export type FilterItem = {
  id: string;
  label: string;
};

type FilterCheckboxGroupProps = {
  items: FilterItem[];
  selectedItems: string[];
  idPrefix: string;
  onItemChange: (itemId: string) => void;
};

const FilterCheckboxGroup = ({
  items,
  selectedItems,
  idPrefix,
  onItemChange,
}: FilterCheckboxGroupProps) => {
  return (
    <div className="space-y-2 pt-1">
      {items.map((item) => (
        <div key={item.id} className="flex items-center space-x-2">
          <Checkbox
            id={`${idPrefix}-${item.id}`}
            checked={selectedItems.includes(item.id)}
            onCheckedChange={() => onItemChange(item.id)}
          />
          <label
            htmlFor={`${idPrefix}-${item.id}`}
            className="text-sm cursor-pointer"
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterCheckboxGroup;