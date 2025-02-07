import { reviews } from "~features/reviews/reviewsData";

export const searchItems = (query: string) => {
  if (!query.trim()) return [];
  return reviews.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
};
