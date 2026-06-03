import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- Import the new loader

const projectsCollection = defineCollection({
  // Replace 'type: content' with the new loader API
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string(),
    size: z.enum(['1x1', '2x1', '2x2']),
    tags: z.array(z.string()),
  })
});

export const collections = {
  'projects': projectsCollection,
};