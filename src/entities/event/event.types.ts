export type EventCategory = {
  id: number
  name: string
}

export type Event = {
  title: string
  slug: string
  photo: string
  place: string
  category: EventCategory
  content: string
  createdAt: string
  updatedAt: string
}
