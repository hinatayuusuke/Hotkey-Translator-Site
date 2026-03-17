import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repositoryName = 'Hotkey-Translator-Site'

export default defineConfig(({ mode }) => ({
  // WHY: GitHub Pages project sites are served from /<repo>/ in production,
  // while local development should continue to work from the root path.
  base: mode === 'production' ? `/${repositoryName}/` : '/',
  plugins: [react(), tailwindcss()],
}))
