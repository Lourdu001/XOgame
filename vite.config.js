import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/XOgame/',  // 👈 Add this line (repo name with slashes)
  plugins: [react()],
})
