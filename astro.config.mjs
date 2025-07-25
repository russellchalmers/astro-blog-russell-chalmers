import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  //site: 'http://localhost:4321',
  site: 'https://astro-blog-russell-chalmers.russell-chalmers.workers.dev',
  output: 'server',
  adapter: cloudflare(),
  integrations: [tailwind()],
});