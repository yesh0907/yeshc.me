import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yeshc.me',
  base: '/v2',
  publicDir: './static',
  integrations: [
    mdx(),
    sitemap({
      filter: page => page !== 'https://yeshc.me/v2',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
