import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  /* -------------  GitHub Pages - user site servido en la raiz del dominio https://danielpinedam.github.io/ ------------- */
  base: '/',

  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      /* -------------  carpeta contenedora de codigo fuente ------------- */
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
