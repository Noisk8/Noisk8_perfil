// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
const isVercel = Boolean(process.env.VERCEL);
const site =
  process.env.ASTRO_SITE ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://dennisklappe.github.io');
const allowEnvBaseOnVercel = process.env.ASTRO_BASE_ALLOW_VERCEL === '1';
const base = isVercel && !allowEnvBaseOnVercel ? '/' : process.env.ASTRO_BASE ?? '/';

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'css-variables',
      langs: [],
      wrap: true,
    },
  },
});
