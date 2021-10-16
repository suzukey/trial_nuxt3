import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  srcDir: 'src',
  buildModules: [
    'nuxt-windicss'
  ],
  css: [
    // windi preflight
    'virtual:windi-base.css',
    // your stylesheets which overrides the preflight
    // '@/css/main.css',
    // windi extras
    'virtual:windi-components.css',
    'virtual:windi-utilities.css',
  ],
  windicss: {
    analyze: true
  }
})
