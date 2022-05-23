import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as fs from 'fs'

const viteEnv = {}
Object.keys(process.env).forEach((key) => {
  if (key.startsWith(`VITE_`)) {
    viteEnv[`import.meta.env.${key}`] = process.env[key]
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: viteEnv,
  server: {
    https: {
      cert: fs.readFileSync('./certificates/localhost.pem'),
      key: fs.readFileSync('./certificates/localhost-key.pem')
    }
  }
})
