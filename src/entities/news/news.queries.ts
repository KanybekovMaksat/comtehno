import { useQuery } from '@tanstack/react-query'
import { getNews, getNewsDetails } from './news.api'

const keys = {
  root: () => ['news'],
  getNews: (slug: string) => [...keys.root(), slug] as const,
}

export function useGetNews() {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getNews,
  })
}

export function useGetNewsDetail(slug: string) {
  return useQuery({
    queryKey: keys.getNews(slug),
    queryFn: () => getNewsDetails(slug),
  })
}
