import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date(),
        draft: z.boolean().optional(),
        category: z.enum(["tech", "daily"]).default("daily"),
    }),
});

export const collections = { blog };
