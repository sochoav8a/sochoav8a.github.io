// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://sochoav8a.github.io/',
  integrations: [
    tailwind(),
    mdx()
  ],
  markdown: {
    syntaxHighlight: 'prism'
  }
});
