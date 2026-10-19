import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './consts';

const slugs = CATEGORIES.map((c) => c.slug) as [string, ...string[]];

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    pubDate: z.coerce.date(),
    author: z.string(),
    category: z.enum(slugs),
    image: z.string(), // public/ papkasidagi yoʻl, masalan: /images/uyqu.svg
    imageAlt: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
