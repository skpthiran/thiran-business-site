import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // Updated to match your EXACT GitHub repository name
  base: '/thiran-business-site/', 
  
  plugins: [react(), tailwindcss()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  
  build: {
    outDir: 'dist',
  }
});
