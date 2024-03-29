import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  prefetch: true,
  adapter: cloudflare({
    imageService: "compile",
  }),
  trailingSlash: 'ignore',
  compressHTML: true,
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
    react()
  ],
  trailingSlash: 'ignore',
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
})
