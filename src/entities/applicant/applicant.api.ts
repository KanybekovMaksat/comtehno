import axios from "axios";

const API_URL = import.meta.env.VITE_BASE_URL as string;

export const getApplicant = async () => {
  try {
    const response = await axios.get(`${API_URL}/applicant-pages/`);
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};

// export const getNewsDetails = (slug: string) => {
//   return axios.get(`${API_URL}/posts/${slug}`);
// };
