import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import solid from '@astrojs/solid-js'

export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ['fsevents']
    }
  },
  integrations: [solid()],
  output: "server",
  adapter: vercel()
});
