import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import auth from 'auth-astro';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [auth(), tailwind()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
});
