import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import solid from '@astrojs/solid-js'

export default defineConfig({
  integrations: [solid()],
  output: "server",
  adapter: vercel()
});
