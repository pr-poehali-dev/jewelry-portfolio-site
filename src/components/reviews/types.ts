export type Review = {
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

export type NewReviewFormData = {
  name: string;
  product: string;
  rating: number;
  text: string;
};