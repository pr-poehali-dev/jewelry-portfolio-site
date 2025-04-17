import { useState } from "react";
import { Review, NewReviewFormData } from "./types";
import { allReviews } from "./mockData";

export const useReviews = () => {
  const [reviews, setReviews] = useState<Review[]>(allReviews);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState<NewReviewFormData>({
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

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return {
    reviews,
    showForm,
    newReview,
    handleLike,
    handleInputChange,
    handleRatingChange,
    handleSubmit,
    toggleForm,
  };
};

export default useReviews;