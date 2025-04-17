import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

type Review = {
  id: number;
  name: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
  product: string;
};

const featuredReviews: Review[] = [
  {
    id: 1,
    name: "Елена Смирнова",
    avatar: "/placeholder.svg",
    date: "15.05.2023",
    rating: 5,
    text: "Потрясающее кольцо! Не могу нарадоваться на него. Качество просто отличное, а камень сверкает при любом освещении. Обслуживание тоже на высоте.",
    product: "Золотое кольцо с бриллиантом",
  },
  {
    id: 2,
    name: "Алексей Иванов",
    avatar: "/placeholder.svg",
    date: "23.03.2023",
    rating: 5,
    text: "Заказывал браслет для жены на годовщину. Она в восторге! Браслет выглядит даже лучше, чем на фото. Спасибо за индивидуальный подход.",
    product: "Серебряный браслет с гравировкой",
  },
  {
    id: 3,
    name: "Марина Петрова",
    avatar: "/placeholder.svg",
    date: "07.06.2023",
    rating: 4,
    text: "Очень красивое колье, ношу его почти каждый день. Единственное, застежка могла бы быть удобнее. В целом очень довольна покупкой!",
    product: "Колье из розового золота",
  },
];

const FeaturedReviews = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Что говорят наши клиенты</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Отзывы наших клиентов — лучшее подтверждение качества нашей работы.
            Мы ценим каждое мнение и стремимся стать еще лучше.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredReviews.map((review) => (
            <Card key={review.id} className="jewel-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
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
                
                <p className="text-sm mb-3">{review.text}</p>
                
                <p className="text-xs text-jewelry-gold">
                  Товар: {review.product}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/reviews">
            <Button variant="outline" className="border-jewelry-gold text-jewelry-gold hover:bg-jewelry-gold/10">
              Смотреть все отзывы
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;