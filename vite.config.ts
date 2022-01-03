import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'
import checker from 'vite-plugin-checker'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Icons from 'unplugin-icons/vite'
// import IconsResolver from 'unplugin-icons/resolver'
// import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    checker({ typescript: true }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [resolve(__dirname, 'locales/**')],
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue-i18n', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
    }),
    Pages(),
    Layouts(),
    Icons(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      FD: resolve(__dirname, 'src/components/UI'),
      '@ICON': resolve(__dirname, 'src/assets/svg'),
    },
  },
  server: {
    open: false,
    fs: {
      strict: false,
    },
    port: 3001,
  },
  envDir: './',
})
