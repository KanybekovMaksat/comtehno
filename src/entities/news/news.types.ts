export interface News {
  title: string
  slug: string
  photo: string
  category: {
    id: number
    name: string
  }
  createdAt: string
  updatedAt: string
}
