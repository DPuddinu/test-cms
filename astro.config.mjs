import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['test-cms-tawny.vercel.app']
  },
  site: 'https://test-cms-tawny.vercel.app/',
  integrations: [mdx(), sitemap()]
});
