import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages for this repo is served at /sale/ (owner/bydowaybienhoa, repo/sale)
  // set base to the repository name so built assets reference the correct path
  base: '/sale/',
})
