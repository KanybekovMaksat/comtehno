import { apiClient } from '~shared/lib/api'

export function getProjects() {
  return apiClient.get('/projects/')
}
export function getDetailProjects(slug?: string) {
  return apiClient.get(`/projects/${slug}/`)
}