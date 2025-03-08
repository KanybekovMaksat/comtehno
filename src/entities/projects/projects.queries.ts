import { useQuery } from '@tanstack/react-query'
import { getDetailProjects, getProjects } from './projects.api'

const keys = {
  root: () => ['projects'],
  getProjectsBySlug: (slug: string) => [...keys.root(), slug] as const,
}

export function useGetProjects() {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getProjects,
  })
}

export function useGetDetailsProjects(slug: string) {
  return useQuery({
    queryKey: keys.getProjectsBySlug(slug),
    queryFn: () => getDetailProjects(slug),
  })
}
