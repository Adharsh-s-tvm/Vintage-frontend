import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ],
  build: {
    minify: false,
    rollupOptions: {
      // Customize chunking if needed
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        changeOrigin: true,
        secure: false
      }
    }
  },
  // ✨ ADD THIS FOR SPA SUPPORT
  preview: {
    port: 4173,
    strictPort: true,
    open: true,
    // This fallback is crucial for direct URL access to routes
    fallback: 'index.html'
  }
})
