import { useState } from 'react'

export const useEventFilter = (
  data = [
    {
      title: 'Молодежный форум разработчиков',
      slug: 'Youth-Developer-Forum',
      photo:
        'https://api.comtehno.kg/media/events/photos/2025/03/02/5265009196678637377.webp',
      place: 'Колледж КОМТЕХНО',
      category: {
        id: 12,
        name: 'конференция',
      },
      createdAt: '2025-03-02T10:56:27.191154+06:00',
      updatedAt: '2025-03-02T10:56:27.191170+06:00',
    },
    {
      title: 'Мамлекеттик тил күнү',
      slug: 'State-Language-Day',
      photo:
        'https://api.comtehno.kg/media/events/photos/2025/03/02/photo_5442727010582520153_y.webp',
      place: 'Колледж, 2 корпус, БАЗ',
      category: {
        id: 12,
        name: 'конференция',
      },
      createdAt: '2025-03-02T10:49:23.084270+06:00',
      updatedAt: '2025-03-02T10:49:23.084287+06:00',
    },
    {
      title: 'Колледж «Комтехно» — шаг в будущее!',
      slug: 'COMTEHNO-College-A-Step-into-the-Future',
      photo:
        'https://api.comtehno.kg/media/events/photos/2025/03/02/IMG_4456.webp',
      place: 'Колледж КОМТЕХНО',
      category: {
        id: 12,
        name: 'конференция',
      },
      createdAt: '2025-03-02T10:45:33.048838+06:00',
      updatedAt: '2025-03-02T10:45:33.048852+06:00',
    },
  ]
) => {
  const [activeFilter, setActiveFilter] = useState('Все')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredEvents = data?.filter((event) => {
    const matchesFilter =
      activeFilter == 'Все' || event.category.name == activeFilter
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return {
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
    filteredEvents,
  }
}
