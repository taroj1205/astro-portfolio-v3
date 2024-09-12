import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import playformCompress from "@playform/compress"
import purgecss from "astro-purgecss"

// https://astro.build/config
export default defineConfig({
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
    purgecss(),
    playformCompress(),
  ],
})
