import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    notes: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        tags: z.array(z.string()).optional(),
        date: z.date().optional(),
        category: z.string().optional(),
      }),
    }),
  },
})
