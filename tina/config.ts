import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.CF_PAGES_BRANCH ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
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
