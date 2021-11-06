import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
    plugins: [vue(), svgLoader(), eslintPlugin()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            FD: resolve(__dirname, 'src/components/UI'),
            '@ICON': resolve(__dirname, 'src/assets/svg')
        }
    },
    hmr: { overlay: false },
    server: {
        open: true,
        fs: {
            strict: false
        }
    }
})
