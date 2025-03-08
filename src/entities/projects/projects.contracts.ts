import { z } from 'zod'

export const ProjectsListSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  subtitle: z.string(),
  photo: z.string(),
})
export const ProjectsCollectionItemSchema = z.object({
  name: z.string(),
  projects: z.string(),
})

export const ProjectsCollectionSchema = z.object({
  name: z.string(),
  documentCollectionItems: z.array(ProjectsCollectionItemSchema),
})

export const ProjectsSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  subtitle: z.string(),
  photo: z.string(),
  content: z.string(),
  documentCollections: z.array(ProjectsCollectionSchema),
})
