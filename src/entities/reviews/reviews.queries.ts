import { useQuery } from "@tanstack/react-query";
import {
  getReviews,
  getReviewsCategory,
  getReviewsDetail,
} from "./reviews.api";

const keys = {
  root: () => ["reviews"],
  getCategory: () => [...keys.root(), "category"],
  getReviews: (slug: string) => [...keys.root(), slug] as const,
};

export function useGetReviews() {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getReviews,
  });
}

export function useGetReviewsDetail(slug: string) {
  return useQuery({
    queryKey: keys.getReviews(slug),
    queryFn: () => getReviewsDetail(slug),
    enabled: !!slug,
  });
}

export function useGetReviewsCategory() {
  return useQuery({
    queryKey: keys.getCategory(),
    queryFn: getReviewsCategory,
  });
}
