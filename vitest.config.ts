import { getViteConfig } from 'astro/config';
import solid from 'vite-plugin-solid'

export default getViteConfig({
  plugins: [solid()],
  test: {
    coverage: {
      provider: 'v8'
    },
    environment: 'jsdom',
    globals: true,
    passWithNoTests: true,
    setupFiles: ['./vitest.setup.ts'],
    testTransformMode: { web: ["/\.tsx?$/"] },
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/playwright/**'],
    deps: {
      optimizer: {
        web: {
          include: ['solid-js']
        }
      }
    },
  },
  resolve: {
    conditions: ['development', 'browser'],
  }
})
