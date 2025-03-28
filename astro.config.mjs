import { defineConfig } from 'astro/config';
// Import commented out temporarily to fix build issues
// import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://noisk8.xyz',
    // Sitemap integration commented out temporarily to fix build issues
    integrations: [
        // sitemap({
        //     filter: (page) => page !== 'https://noisk8.xyz/404/' && page !== 'https://noisk8.xyz/404',
        //     changefreq: 'weekly',
        //     priority: 0.7,
        //     lastmod: new Date()
        // })
    ]
});
