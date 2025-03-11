import { useQuery } from '@tanstack/react-query'
import { getEvents, getEventsCategories, getEventsDetails } from './event.api'

const keys = {
  root: () => ['events'],
  getEvents: (slug: string) => [...keys.root(), slug] as const,
  getCategories: () => [...keys.root(), 'categories'] as const,
}

export function useGetEvents() {
  return useQuery({
    queryKey: keys.root(),
    queryFn: () => getEvents(),
  })
}
export function useGetEventsCategories() {
  return useQuery({
    queryKey: keys.getCategories(),
    queryFn: () => getEventsCategories(),
  })
}

export function useGetEventsDetail(slug: string) {
  return useQuery({
    queryKey: keys.getEvents(slug),
    queryFn: () => getEventsDetails(slug),
  })
}
