export interface News {
  title: string
  slug: string
  photo: string
  category: {
    id: number
    name: string
  }
  content: string
  createdAt: string
  updatedAt: string
}
export interface NewsCategory {
  id: number
  name: string
}
