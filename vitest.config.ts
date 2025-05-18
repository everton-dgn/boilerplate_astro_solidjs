import { getViteConfig } from 'astro/config'

import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import solid from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'

export default getViteConfig({
  plugins: [
    tsconfigPaths(),
    solid(),
    Icons({
      compiler: 'solid',
      customCollections: {
        'my-icons': FileSystemIconLoader('./src/assets/icons'),
        'my-images': FileSystemIconLoader('./src/assets/images')
      }
    })
  ],
  resolve: {
    conditions: ['development', 'browser']
  },
  test: {
    deps: {
      optimizer: {
        web: {
          include: ['solid-js']
        }
      }
    },
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/assets/', 'src/tests/']
    },
    globals: true,
    passWithNoTests: true,
    clearMocks: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/__tests__/*.test.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/playwright/**'],
    pool: 'forks',
    poolOptions: {
      forks: {
        isolate: false
      }
    }
  }
})
