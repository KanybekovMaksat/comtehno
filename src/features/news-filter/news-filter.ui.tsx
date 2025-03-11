// features/eventFilter/useEventFilter.ts
import { useState } from 'react'
import { newsQueries } from '~entities/news'

export const useNewsFilter = () => {
  const [activeFilter, setActiveFilter] = useState('Все')
  const [searchQuery, setSearchQuery] = useState('')
  const { data } = newsQueries.useGetNews()
  const { data: category } = newsQueries.useGetNewsCategories()

  const filteredData = data
    ? data.data.filter((item: any) => {
        const matchesFilter =
          activeFilter === 'Все' || item.category === activeFilter
        const matchesSearch = item.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
        return matchesFilter && matchesSearch
      })
    : data.data.map((item: any) => {
        return data.data
      })

  return {
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
    filteredData,
    category,
  }
}
