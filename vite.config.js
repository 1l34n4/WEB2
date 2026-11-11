import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/WEB2/', // <-- ¡Agregá esta línea!
  esbuild: {
    jsxInject: `import React from 'react'`
  }
})