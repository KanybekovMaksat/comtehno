import { useQuery } from '@tanstack/react-query'
import { getPartners, getPartnersDocuments } from './partner.api'

const keys = {
  root: () => ['partner'],
  getDocuments: () => [...keys.root(), 'documents'],
}

export function useGetPartners() {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getPartners,
  })
}

export function useGetPartnersDocuments() {
  return useQuery({
    queryKey: keys.getDocuments(),
    queryFn: getPartnersDocuments,
  })
}
