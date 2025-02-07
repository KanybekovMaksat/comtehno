import axios from 'axios'

const URL = 'https://new.comtehno.kg/api/'

export const getNews = () => {
  return axios.get(`${URL}/posts/`)
}

export const getNewsDetails = (slug: string) => {
  return axios.get(`${URL}/posts/${slug}`)
}
