import axios from 'axios';
import { apiClient } from '~shared/lib/api'

const API_URL = import.meta.env.VITE_BASE_URL as string;

export function getDetailProjects(slug?: string) {
  return apiClient.get(`/projects/${slug}/`)
}

export const getProjectsData = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении проектов:", error);
    throw error; 
  }
};