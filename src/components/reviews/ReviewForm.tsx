import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import StarRating from "./StarRating";
import { NewReviewFormData } from "./types";

type ReviewFormProps = {
  formData: NewReviewFormData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onRatingChange: (rating: number) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
};

const ReviewForm = ({
  formData,
  onInputChange,
  onRatingChange,
  onSubmit,
  onCancel
}: ReviewFormProps) => {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Новый отзыв</h3>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Ваше имя
            </label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={onInputChange}
              placeholder="Введите ваше имя"
              required
            />
          </div>
          
          <div>
            <label htmlFor="product" className="block text-sm font-medium mb-1">
              Название изделия
            </label>
            <Input
              id="product"
              name="product"
              value={formData.product}
              onChange={onInputChange}
              placeholder="Введите название изделия"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Оценка
            </label>
            <StarRating 
              rating={formData.rating} 
              interactive={true} 
              onChange={onRatingChange} 
            />
          </div>
          
          <div>
            <label htmlFor="text" className="block text-sm font-medium mb-1">
              Текст отзыва
            </label>
            <Textarea
              id="text"
              name="text"
              value={formData.text}
              onChange={onInputChange}
              placeholder="Расскажите о вашем опыте"
              required
              className="min-h-32"
            />
          </div>
          
          <div className="flex gap-3">
            <Button 
              type="submit" 
              className="bg-jewelry-gold hover:bg-jewelry-gold/90 text-white"
            >
              Отправить отзыв
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onCancel}
            >
              Отменить
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReviewForm;