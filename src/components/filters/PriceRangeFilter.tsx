import { Slider } from "@/components/ui/slider";

type PriceRangeFilterProps = {
  priceRange: [number, number];
  min: number;
  max: number;
  onPriceChange: (value: number[]) => void;
};

const PriceRangeFilter = ({
  priceRange,
  min,
  max,
  onPriceChange
}: PriceRangeFilterProps) => {
  return (
    <div className="pt-6 px-2">
      <Slider
        defaultValue={priceRange}
        min={min}
        max={max}
        step={100}
        onValueChange={onPriceChange}
      />
      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
        <span>{priceRange[0]} ₽</span>
        <span>{priceRange[1]} ₽</span>
      </div>
    </div>
  );
};

export default PriceRangeFilter;