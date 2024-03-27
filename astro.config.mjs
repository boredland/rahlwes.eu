import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare({
    imageService: "compile",
  }),
  compressHTML: true,
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  trailingSlash: 'ignore',
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
})
