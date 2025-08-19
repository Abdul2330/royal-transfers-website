import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/royal-transfers-website/", // 👈 your GitHub repo name here
  plugins: [react()],
})
