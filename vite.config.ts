import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'
import checker from 'vite-plugin-checker'

// import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [vue(), svgLoader(), checker({ typescript: true })],
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
