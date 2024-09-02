import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
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
  output: 'hybrid',
  adapter: vercel({
    imageService: true,
    isr: true,
    edgeMiddleware: true
  })
})
