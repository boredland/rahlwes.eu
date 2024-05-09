import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	type: "content",
	schema: z.object({
		lang: z.enum(["en", "de"]),
		title: z.string(),
		posted: z.date(),
		description: z.string(),
		author: z.string(),
		image: z.string(),
		tags: z.array(z.string()),
		draft: z.boolean().optional().default(false),
	}),
});

export const collections = {
	posts: postsCollection,
};
