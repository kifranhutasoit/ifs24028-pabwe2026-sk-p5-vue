import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import webfontDownload from 'vite-plugin-webfont-dl'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    webfontDownload()   // ← tambahkan ini
  ],
  // ... sisanya biarkan sama
})