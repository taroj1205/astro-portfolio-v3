import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import playformCompress from "@playform/compress"

// https://astro.build/config
export default defineConfig({
  site: 'https://taroj.netlify.app/',
  image: {
    service: {
       entrypoint: 'astro/assets/services/sharp',
       config: {
         limitInputPixels: false,
      },
    }
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    playformCompress(),
  ],
})
