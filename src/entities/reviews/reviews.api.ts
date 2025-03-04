import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL as string;

export const getReviews = () => {
  return axios.get(`${API_URL}/reviews`);
};

export const getReviewsDetail = (slug: string) => {
  return axios.get(`${API_URL}/reviews/${slug}`);
};
