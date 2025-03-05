import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  site: 'https://taroj.pages.dev/',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    directory: 'src/i18n',
    fallbackLocale: 'en',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
      ...(process.env.NODE_ENV === 'production'
        ? { cssnano: {}, compress }
        : {}),
    }),
    sitemap(),
    compress(),
  ],
  vite: {
    build: {
      assetsInlineLimit: 1024,
      inlineStylesheets: 'never',
      cssMinify: 'lightningcss',
      minify: 'terser',
      cssCodeSplit: true,
    },
  },
})
