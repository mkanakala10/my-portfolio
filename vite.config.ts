import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Project site: https://mkanakala10.github.io/my-portfolio/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/my-portfolio/',
  plugins: [react(), tailwindcss()],
}))
