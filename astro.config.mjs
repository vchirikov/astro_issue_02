import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '',
  trailingSlash: 'never',
  output: 'server',
  i18n: {
    routing: 'manual',
    locales: ['en', 'ru'],
    defaultLocale: 'en'
  },
  devToolbar: {
    enabled: false,
  },
  experimental: {
    rewriting: true
  }
});
