import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'

export default defineConfig({
  site: process.env.CF_PAGES_URL,
  output: 'hybrid',
  prefetch: true,
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
  trailingSlash: 'ignore',
  compressHTML: true,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
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
