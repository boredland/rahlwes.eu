import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import cloudflare from '@astrojs/cloudflare'
import react from '@astrojs/react'

export default defineConfig({
  output: 'hybrid',
  prefetch: true,
  adapter: cloudflare({
    imageService: 'compile',
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
