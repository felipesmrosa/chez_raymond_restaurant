import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react'; // Adicionado o plugin React

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()], // Plugin React adicionado
});
