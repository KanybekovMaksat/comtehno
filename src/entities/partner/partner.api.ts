import axios from 'axios'

const API_URL = import.meta.env.VITE_BASE_URL as string

export const getPartners = () => {
  return axios.get(`${API_URL}/partners/`)
}

export const getPartnersDocuments = () => {
  return axios.get(`${API_URL}/partner-document`)
}
