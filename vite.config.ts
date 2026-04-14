import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // Make sure this is your actual repo name! 
  base: '/Thiran-Wijesingha-portfolio/', 
  
  plugins: [react(), tailwindcss()],
  
  resolve: {
    alias: {
      // Changed from './src' back to '.' to fix the double src issue
      '@': path.resolve(__dirname, '.'),
    },
  },
  
  build: {
    outDir: 'dist',
  }
});
