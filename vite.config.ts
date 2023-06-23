import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setup.ts',
  },
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      workbox: {
        globPatterns: ['**/*.{js,html,png,svg,jpeg,css,woff,woff2,gif,otf}'],
        maximumFileSizeToCacheInBytes: 10000000,
      },
      registerType: 'autoUpdate',
      manifest: {
        description: 'HarryPotter API HOla padrinos',
        start_url: '/',
        scope: '/',
        orientation: 'portrait',
        name: 'Harry Potter app',
        short_name: 'Harry Potter app',
        theme_color: '#ffffff',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [],
      },
    }),
  ],
})