import { z } from 'zod'
import { ProjectsSchema, ProjectsListSchema } from './projects.contracts'

export type ProjectsSchema = z.infer<typeof ProjectsSchema>
export type ProjectsListSchema = z.infer<typeof ProjectsListSchema>
