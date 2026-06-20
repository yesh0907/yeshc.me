import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const links = {
  github: z.url().or(z.literal('')).optional(),
  external: z.url().or(z.literal('')).optional(),
};

const jobs = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './content/jobs' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    company: z.string(),
    location: z.string(),
    range: z.string(),
    url: z.url(),
  }),
});

const featured = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './content/featured' }),
  schema: z.object({
    date: z.coerce.number(),
    title: z.string(),
    cover: z.string(),
    tech: z.array(z.string()),
    showInProjects: z.boolean(),
    ...links,
  }),
});

const archive = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/projects' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    tech: z.array(z.string()),
    showInProjects: z.boolean(),
    company: z.string().optional(),
    ios: z.url().optional(),
    android: z.url().optional(),
    ...links,
  }),
});

export const collections = { jobs, featured, archive };
