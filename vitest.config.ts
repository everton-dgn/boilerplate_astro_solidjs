// @ts-nocheck
/// <reference types="vitest" />
import { getViteConfig } from 'astro/config'

const config = getViteConfig({
  test: {
    deps: {
      optimizer: {
        web: {
          include: ['solid-js']
        }
      }
    },
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/assets/', 'src/tests/']
    },
    environment: 'jsdom',
    globals: true,
    passWithNoTests: true,
    setupFiles: ['./vitest.setup.ts'],
    testTransformMode: { web: ['\\.tsx?$'] },
    include: ['src/**/__tests__/*.test.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/playwright/**'],
    pool: 'forks',
    poolOptions: {
      forks: {
        isolate: false
      }
    }
  },
  resolve: {
    conditions: ['development', 'browser']
  }
})

export default config
