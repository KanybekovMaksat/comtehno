import { useQuery } from '@tanstack/react-query'
import { getDocuments, getDetailsDocuments } from './document.api'

const keys = {
  root: () => ['documents'],
  getDocumentsBySlug: (slug: string) => [...keys.root(), slug] as const,
}

export function useGetDocuments() {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getDocuments,
  })
}

export function useGetDetailsDocuments(slug: string) {
  return useQuery({
    queryKey: keys.getDocumentsBySlug(slug),
    queryFn: () => getDetailsDocuments(slug),
  })
}
