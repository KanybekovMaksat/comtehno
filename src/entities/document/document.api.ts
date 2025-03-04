import { apiClient } from '~shared/lib/api'

export function getDocuments() {
  return apiClient.get('/document-pages/')
}

export function getDetailsDocuments(slug?: string) {
  return apiClient.get(`/document-pages/${slug}/`)
}
