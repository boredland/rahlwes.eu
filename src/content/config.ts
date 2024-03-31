import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      lang: z.enum(['en', 'de']),
      title: z.string(),
      posted: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.string().url(),
      tags: z.array(z.string())
    })
});

export const collections = {
  posts: postsCollection,
};