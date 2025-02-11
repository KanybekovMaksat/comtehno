import axios, { AxiosResponse } from "axios"

const URL = "https://new.comtehno.kg/api/"

export const getSpeciality = () => {
  return axios.get(`${URL}/specialties`)
}

export const getSpecialityDetails = (slug: string) => {
  return axios.get(`${URL}/specialties/${slug}`)
}


// Testing types query

// export const getSpeciality = (): Promise<AxiosResponse<Speciality[]>> => {
//   return axios.get<Speciality[]>(`${URL}/specialties`)
// }

// export const getSpecialityDetails = (slug: string): Promise<AxiosResponse<Speciality>> => {
//   return axios.get<Speciality>(`${URL}/specialties/${slug}`)
// }