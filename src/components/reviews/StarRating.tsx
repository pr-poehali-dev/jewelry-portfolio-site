import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number;
  maxRating?: number;
  size?: "small" | "medium";
  interactive?: boolean;
  onChange?: (rating: number) => void;
};

const StarRating = ({
  rating,
  maxRating = 5,
  size = "medium",
  interactive = false,
  onChange
}: StarRatingProps) => {
  const starSize = size === "small" ? "h-4 w-4" : "h-6 w-6";
  
  return (
    <div className="flex">
      {Array.from({ length: maxRating }).map((_, i) => (
        <Star
          key={i}
          className={`${starSize} ${
            i < rating 
              ? "text-jewelry-gold fill-jewelry-gold" 
              : "text-muted"
          } ${interactive ? "cursor-pointer" : ""}`}
          onClick={() => interactive && onChange && onChange(i + 1)}
        />
      ))}
    </div>
  );
};

export default StarRating;