import ReviewsList from "@/components/ReviewsList";

const ReviewsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Отзывы наших клиентов</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Мы ценим каждое мнение и стремимся совершенствовать качество наших изделий и обслуживания.
          Ваши отзывы помогают нам стать лучше!
        </p>
      </div>
      
      <ReviewsList />
    </div>
  );
};

export default ReviewsPage;