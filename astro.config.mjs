import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    site: 'https://noisk8.xyz',
    integrations: [sitemap()]
    
});
