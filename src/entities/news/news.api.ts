import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL as string;

export const getNews = () => {
  return axios.get(`${API_URL}/posts/`);
};

export const getNewsDetails = (slug: string) => {
  return axios.get(`${API_URL}/posts/${slug}`);
};
