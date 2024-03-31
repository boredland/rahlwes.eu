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
        fields: [
          {
            name: "lang",
            label: "Language",
            type: "string",
            options: [
              { label: "English", value: "en" },
              { label: "German", value: "de" },
            ],
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "posted",
            label: "Publication Date",
            type: "datetime",
            required: true,
          },
          {
            name: "description",
            label: "Description",
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
