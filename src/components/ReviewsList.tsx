import { Button } from "@/components/ui/button";
import ReviewCard from "./reviews/ReviewCard";
import ReviewForm from "./reviews/ReviewForm";
import useReviews from "./reviews/useReviews";

const ReviewsList = () => {
  const {
    reviews,
    showForm,
    newReview,
    handleLike,
    handleInputChange,
    handleRatingChange,
    handleSubmit,
    toggleForm
  } = useReviews();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Все отзывы ({reviews.length})</h2>
        <Button 
          onClick={toggleForm}
          className="bg-jewelry-gold hover:bg-jewelry-gold/90 text-white"
        >
          {showForm ? "Отменить" : "Оставить отзыв"}
        </Button>
      </div>
      
      {showForm && (
        <ReviewForm 
          formData={newReview}
          onInputChange={handleInputChange}
          onRatingChange={handleRatingChange}
          onSubmit={handleSubmit}
          onCancel={toggleForm}
        />
      )}
      
      <div className="grid grid-cols-1 gap-6">
        {reviews.map((review) => (
          <ReviewCard 
            key={review.id} 
            review={review} 
            onLike={handleLike} 
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewsList;