import { useQuery } from '@tanstack/react-query'
import { getDetailProjects, getProjectsData } from './projects.api'

const keys = {
  root: () => ['projects'],
  getProjectsBySlug: (slug: string) => [...keys.root(), slug] as const,
}

export function useGetProjects() {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getProjectsData,
  })
}

export function useGetDetailsProjects(slug: string) {
  return useQuery({
    queryKey: keys.getProjectsBySlug(slug),
    queryFn: () => getDetailProjects(slug),
  })
}
