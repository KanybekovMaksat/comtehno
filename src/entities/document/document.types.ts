import { z } from 'zod'
import { DocumentSchema, DocumenListSchema } from './document.contracts'

export type DocumentSchema = z.infer<typeof DocumentSchema>
export type DocumenListSchema = z.infer<typeof DocumenListSchema>
