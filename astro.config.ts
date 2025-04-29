import solid from '@astrojs/solid-js'
import { defineConfig } from 'astro/config'

export default defineConfig({
  experimental: {
    serializeConfig: true
  },
  publicDir: 'public',
  // site: 'https://example.com',
  prefetch: {
    prefetchAll: false
  },
  vite: {
    optimizeDeps: {
      exclude: ['fsevents']
    }
  },
  integrations: [solid()],
  output: 'static'
})
