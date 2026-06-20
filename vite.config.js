import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vapid-leads v1.1
export default defineConfig({
  plugins: [react()],
  base: '/vapid-leads/',
})
