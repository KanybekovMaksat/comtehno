import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getCookie } from "typescript-cookie";

const API_URL = import.meta.env.VITE_BASE_URL as string;

function getCurrentLanguage() {
  return getCookie("language") || "ru"; // Язык по умолчанию — 'ru'
}

// Создаем экземпляр Axios с настройками по умолчанию
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
});

// Добавляем перехватчик, который добавляет язык ко всем запросам
apiClient.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers = {
    ...config.headers,
    "Accept-Language": getCurrentLanguage(),
  };
  return config;
});
