import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Porta do servidor
    open: true, // Abre automaticamente no navegador
  },
  build: {
    outDir: 'dist', // Diretório de saída para builds
    sourcemap: true, // Gera mapas de origem para facilitar o debug
  },
  resolve: {
    alias: {
      '@': '/src', // Alias para facilitar importações
    },
  },
});
