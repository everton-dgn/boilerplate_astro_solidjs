import solid from '@astrojs/solid-js'
import { defineConfig } from 'astro/config'

import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  experimental: {
    contentIntellisense: true
  },
  publicDir: 'public',
  // site: 'https://yoursite.com',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  vite: {
    optimizeDeps: {
      exclude: ['fsevents']
    },
    esbuild: {
      jsxInject: `import { clsx } from 'clsx'`
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('clsx')) return 'vendor'
          }
        }
      }
    },
    plugins: [
      Icons({
        compiler: 'solid',
        customCollections: {
          'my-icons': FileSystemIconLoader('./src/assets/icons'),
          'my-images': FileSystemIconLoader('./src/assets/images')
        }
      })
    ]
  },
  integrations: [solid()],
  output: 'static'
})
