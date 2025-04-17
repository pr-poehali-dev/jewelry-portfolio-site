import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, ThumbsUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Review = {
  id: number;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
  product: string;
  likes: number;
  userLiked?: boolean;
};

const allReviews: Review[] = [
  {
    id: 1,
    name: "Елена Смирнова",
    avatar: "/placeholder.svg",
    date: "15.05.2023",
    rating: 5,
    text: "Потрясающее кольцо! Не могу нарадоваться на него. Качество просто отличное, а камень сверкает при любом освещении. Обслуживание тоже на высоте.",
    product: "Золотое кольцо с бриллиантом",
    likes: 12,
  },
  {
    id: 2,
    name: "Алексей Иванов",
    avatar: "/placeholder.svg",
    date: "23.03.2023",
    rating: 5,
    text: "Заказывал браслет для жены на годовщину. Она в восторге! Браслет выглядит даже лучше, чем на фото. Спасибо за индивидуальный подход.",
    product: "Серебряный браслет с гравировкой",
    likes: 8,
  },
  {
    id: 3,
    name: "Марина Петрова",
    avatar: "/placeholder.svg",
    date: "07.06.2023",
    rating: 4,
    text: "Очень красивое колье, ношу его почти каждый день. Единственное, застежка могла бы быть удобнее. В целом очень довольна покупкой!",
    product: "Колье из розового золота",
    likes: 5,
  },
  {
    id: 4,
    name: "Дмитрий Соколов",
    avatar: "/placeholder.svg",
    date: "12.04.2023",
    rating: 5,
    text: "Приобрел обручальные кольца для нашей свадьбы. Жена в восторге от качества и дизайна. Спасибо за помощь в выборе и за прекрасное обслуживание!",
    product: "Обручальные кольца из платины",
    likes: 15,
  },
  {
    id: 5,
    name: "Анастасия Козлова",
    avatar: "/placeholder.svg",
    date: "30.05.2023",
    rating: 4,
    text: "Серьги великолепны! Изящные, стильные и подходят к любому наряду. Доставка была быстрой, упаковка тоже порадовала.",
    product: "Серьги с сапфирами",
    likes: 7,
  },
  {
    id: 6,
    name: "Игорь Морозов",
    avatar: "/placeholder.svg",
    date: "09.07.2023",
    rating: 5,
    text: "Заказывал брошь 'Колибри' в подарок маме. Она просто влюбилась в это украшение! Качество на высоте, цвета яркие и насыщенные. Спасибо за такую красоту.",
    product: "Брошь 'Колибри'",
    likes: 10,
  },
];

const ReviewsList = () => {
  const [reviews, setReviews] = useState<Review[]>(allReviews);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    product: "",
    rating: 5,
    text: "",
  });

  const handleLike = (id: number) => {
    setReviews(
      reviews.map((review) => {
        if (review.id === id) {
          return {
            ...review,
            likes: review.userLiked ? review.likes - 1 : review.likes + 1,
            userLiked: !review.userLiked,
          };
        }
        return review;
      })
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newReviewObj: Review = {
      id: reviews.length + 1,
      name: newReview.name,
      avatar: "/placeholder.svg",
      date: new Date().toLocaleDateString("ru-RU"),
      rating: newReview.rating,
      text: newReview.text,
      product: newReview.product,
      likes: 0,
    };
    
    setReviews([newReviewObj, ...reviews]);
    setNewReview({ name: "", product: "", rating: 5, text: "" });
    setShowForm(false);
    alert("Спасибо за ваш отзыв!");
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Все отзывы ({reviews.length})</h2>
        <Button 
          onClick={() => setShowForm(!showForm)}
          className="bg-jewelry-gold hover:bg-jewelry-gold/90 text-white"
        >
          {showForm ? "Отменить" : "Оставить отзыв"}
        </Button>
      </div>
      
      {showForm && (
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Новый отзыв</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  name="name"
                  value={newReview.name}
                  onChange={handleInputChange}
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
                  value={newReview.product}
                  onChange={handleInputChange}
                  placeholder="Введите название изделия"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">
                  Оценка
                </label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Star
                      key={rating}
                      className={`h-6 w-6 cursor-pointer ${
                        rating <= newReview.rating
                          ? "text-jewelry-gold fill-jewelry-gold"
                          : "text-muted"
                      }`}
                      onClick={() => handleRatingChange(rating)}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="text" className="block text-sm font-medium mb-1">
                  Текст отзыва
                </label>
                <Textarea
                  id="text"
                  name="text"
                  value={newReview.text}
                  onChange={handleInputChange}
                  placeholder="Расскажите о вашем опыте"
                  required
                  className="min-h-32"
                />
              </div>
              
              <div className="flex gap-3">
                <Button type="submit" className="bg-jewelry-gold hover:bg-jewelry-gold/90 text-white">
                  Отправить отзыв
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Отменить
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
      
      <div className="grid grid-cols-1 gap-6">
        {reviews.map((review) => (
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
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? "text-jewelry-gold fill-jewelry-gold" : "text-muted"
                      }`}
                    />
                  ))}
                </div>
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
                    onClick={() => handleLike(review.id)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>{review.likes}</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsList;