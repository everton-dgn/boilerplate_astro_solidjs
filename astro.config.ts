import { defineConfig } from 'astro/config'
import solid from '@astrojs/solid-js'

export default defineConfig({
  security: {
    checkOrigin: true
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
