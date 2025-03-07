import { apiClient } from '~shared/lib/api'
import { EventApi } from './event.data'

export const fetchEvents = async () => {
  try {
    const response = await apiClient.get<EventApi[]>('/events/')
    return response.data.map(mapEventFromApi)
  } catch (error) {
    console.error('Error fetching events:', error)
    throw error
  }
}

const mapEventFromApi = (event: EventApi) => ({
  title: event.title,
  slug: event.slug,
  photo: event.photo,
  category: event.category.name,
  date: new Date(event.createdAt).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }),
  location: event.place,
  bgCategory: getCategoryColor(event.category.name),
})

// Вспомогательная функция для цветов категорий
const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    концерт: 'bg-purple-500',
    выставка: 'bg-blue-500',
    'мастер-класс': 'bg-orange-500',
    фестиваль: 'bg-green-500',
  }
  return colors[category.toLowerCase()] || 'bg-gray-400'
}
