import { apiClient } from "~shared/lib/api";

// const API_URL = import.meta.env.VITE_BASE_URL as string;

export const getParlaments = async () => {
  const response = await apiClient.get(`/parliament-members/`);
  return response.data;
};
