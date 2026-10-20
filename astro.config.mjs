import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// DIQQAT: quyidagi ikki qatorni oʻzingizning GitHub maʼlumotlaringizga almashtiring.
// site  = https://<GITHUB-USERNAME>.github.io
// base  = /<REPOZITORIYA-NOMI>   (agar repozitoriya nomi <username>.github.io boʻlsa, base: '/' qiling)
export default defineConfig({
  site: 'https://esamurodovkhasan06-tech.github.io',
  base: '/foydali-blog',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
