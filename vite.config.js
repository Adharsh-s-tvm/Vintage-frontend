import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  base:'./',
  plugins: [
    react(),
    visualizer({
      open: true, // opens browser automatically
      gzipSize: true,
      brotliSize: true
    })
    ],
  build: {
    
    minify: false,
    rollupOptions: {
      // output: {
      //   manualChunks(id) {
      //     if (id.includes('node_modules')) {
      //       if (id.includes('react')) return 'vendor_react';
      //       if (id.includes('axios')) return 'vendor_axios';
      //       return 'vendor';
      //     }
      //   },
      // },
    },
  },
  server: {
    port: 3000, 
    '/api' : {
      changeOrigin : true ,
      secure : false

    } 
  },
})
