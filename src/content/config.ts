import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    subtitle: z.string(),
    status: z.string(),
    focus: z.array(z.string()),
    methods: z.array(z.string()),
    previewLabel: z.string(),
    previewSrc: z.string().optional(),
    fullDemoUrl: z.string().optional(),
    privacyNote: z.string()
  })
});

export const collections = { projects };
