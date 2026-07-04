import path from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api/instagram': {
        target: 'https://www.instagram.com/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/instagram/, ''),
        headers: {
          'X-IG-App-ID': '936619743392459',
          Referer: 'https://www.instagram.com/',
        },
      },
    },
  },
});
