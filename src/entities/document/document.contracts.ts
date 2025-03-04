import { z } from 'zod'

export const DocumenListSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  subtitle: z.string(),
  photo: z.string(),
})
export const DocumentCollectionItemSchema = z.object({
  name: z.string(),
  document: z.string(),
})

export const DocumentCollectionSchema = z.object({
  name: z.string(),
  documentCollectionItems: z.array(DocumentCollectionItemSchema),
})

export const DocumentSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  subtitle: z.string(),
  photo: z.string(),
  content: z.string(),
  documentCollections: z.array(DocumentCollectionSchema),
})
