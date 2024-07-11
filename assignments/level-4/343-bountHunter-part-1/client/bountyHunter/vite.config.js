import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/bounties": {
        target: "http://localhost:9000",
        changeOrigin: true,
        secure: false,
      },
    },
  }
})