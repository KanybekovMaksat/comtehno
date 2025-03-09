import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL as string;

export const getTeacherData = async () => {
  try {
    const response = await axios.get(`${API_URL}/staffs`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении проектов:", error);
    throw error; 
  }
};