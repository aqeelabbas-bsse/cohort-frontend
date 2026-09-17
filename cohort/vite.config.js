import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// `@` resolves to /src so imports stay short and refactor-safe:
//   import Glass from '@/components/Glass'
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(process.cwd(), 'src') },
  },
  server: { port: 5173, open: true },
})
