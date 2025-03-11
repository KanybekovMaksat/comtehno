import axios from 'axios'

const API_URL = import.meta.env.VITE_BASE_URL as string

export const getNews = () => {
  return axios.get(`${API_URL}/posts/`)
}

export const getNewsDetails = (slug: string) => {
  return axios.get(`${API_URL}/posts/${slug}`)
}

export const getNewsCategory = async () => {
  try {
    // return await axios.get(`${API_URL}/reviews-category`);
    const response = await axios.get(`${API_URL}/posts-category`)
    return response.data
  } catch (error) {
    console.error('Ошибка при получении отзывов:', error)
    throw error // React Query обработает ошибку
  }
}
