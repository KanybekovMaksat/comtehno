import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_BASE_URL as string;

export const getSpeciality = () => {
  return axios.get(`${API_URL}/specialties`);
};

export const getSpecialityDetails = (slug: string) => {
  return axios.get(`${API_URL}/specialties/${slug}`);
};

// Testing types query

// export const getSpeciality = (): Promise<AxiosResponse<Speciality[]>> => {
//   return axios.get<Speciality[]>(`${URL}/specialties`)
// }

// export const getSpecialityDetails = (slug: string): Promise<AxiosResponse<Speciality>> => {
//   return axios.get<Speciality>(`${URL}/specialties/${slug}`)
// }
