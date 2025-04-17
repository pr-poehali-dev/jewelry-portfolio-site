import { ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import StarRating from "./StarRating";
import { Review } from "./types";

type ReviewCardProps = {
  review: Review;
  onLike: (id: number) => void;
};

const ReviewCard = ({ review, onLike }: ReviewCardProps) => {
  return (
    <Card key={review.id} className="jewel-card">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={review.avatar} alt={review.name} />
              <AvatarFallback>{review.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium">{review.name}</h4>
              <p className="text-xs text-muted-foreground">{review.date}</p>
            </div>
          </div>
          <StarRating rating={review.rating} size="small" />
        </div>
        
        <div className="mt-4">
          <p className="mb-2">{review.text}</p>
          <p className="text-sm text-jewelry-gold mb-4">
            Товар: {review.product}
          </p>
          
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              className={`flex items-center gap-1 ${
                review.userLiked ? "text-jewelry-gold" : "text-muted-foreground"
              }`}
              onClick={() => onLike(review.id)}
            >
              <ThumbsUp className="h-4 w-4" />
              <span>{review.likes}</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;