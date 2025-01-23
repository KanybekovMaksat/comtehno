import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import {  getCookie, setCookie } from 'typescript-cookie';

export const API_URL = 'https://api.bilim-track.makalabox.com/api/';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const getAccessToken = () => getCookie('access') || null;

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  const accessToken = getAccessToken();
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

$api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _isRetry?: boolean };

    if (
      error.response?.status === 401 && 
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const refreshToken = localStorage.getItem('refresh');
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        const response = await axios.post<{ access: string }>(
          `${API_URL}jwt/refresh/`,
          { refresh: refreshToken },
          { withCredentials: true }
        );

        const newAccessToken = response.data.access;
        setCookie('access', newAccessToken);

        originalRequest.headers = {
          ...originalRequest.headers,
          Authorization: `Bearer ${newAccessToken}`,
        };

        return $api(originalRequest);
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
        localStorage.removeItem('refresh');
        window.location.href = '/login'; 
      }
    }

    return Promise.reject(error);
  }
);

export default $api;