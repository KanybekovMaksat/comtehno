import { apiClient } from '~shared/lib/api'

export const getEvents = () => {
  return apiClient.get(`/events/`)
}

export const getEventsDetails = (slug: string) => {
  return apiClient.get(`/events/${slug}`)
}
export const getEventsCategories = () => {
  return apiClient.get(`/events-category/`)
}
