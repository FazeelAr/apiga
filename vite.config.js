import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycbzO--LnrfgZBEx0_SwcAUFfahdM9HkYyNlK3G2igqLN7fxrsFn-X5tSojQIJNpjkPGc/exec',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

