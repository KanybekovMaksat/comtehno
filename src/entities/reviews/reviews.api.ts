import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL as string;

export const getReviews = () => {
  return axios.get(`${API_URL}/reviews`);
};

export const getReviewsDetail = (slug: string) => {
  return axios.get(`${API_URL}/reviews/${slug}`);
};

export const getReviewsCategory = async () => {
  try {
    // return await axios.get(`${API_URL}/reviews-category`);
    const response = await axios.get(`${API_URL}/reviews-category`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении отзывов:", error);
    throw error; // React Query обработает ошибку
  }
};
