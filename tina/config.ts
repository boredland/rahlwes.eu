import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.CF_PAGES_BRANCH ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        format: "md",
        fields: [
          {
            label: 'Draft',
            name: 'draft',
            type: 'boolean',
            description: 'If this is checked the post will not be published',
          },
          {
            label: "Language",
            name: "lang",
            type: "string",
            options: [
              { label: "English", value: "en" },
              { label: "German", value: "de" },
            ],
          },
          {
            label: "Title",
            name: "title",
            type: "string",
            isTitle: true,
            required: true,
          },
          {
            label: "Publication Date",
            name: "posted",
            type: "datetime",
            required: true,
          },
          {
            label: "Description",
            name: "description",
            type: "string",
            required: true,
            description: "A short preview of the post",
          },
          {
            name: "author",
            label: "Author",
            type: "string",
            required: true,
          },
          {
            name: "image",
            label: "Image",
            type: "image",
            required: true,
            description: "URL to the post's main image",
          },
          {
            name: "tags",
            label: "Tags",
            type: "string",
            options: ["exhibit", "museum", "research", "inclusion", "storytelling", "education", "tutorial"],
            required: true,
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
