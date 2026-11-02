import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const blogImageReceiver = {
  name: 'blog-image-receiver',
  configureServer(server) {
    server.middlewares.use('/__blog-image', (request, response, next) => {
      const filename = request.url?.slice(1)
      if (
        request.method !== 'POST' ||
        !filename ||
        !/^[a-z0-9-]+(?:-thumb)?\.(?:jpg|webp)$/.test(filename)
      ) {
        next()
        return
      }

      const chunks = []
      request.on('data', (chunk) => chunks.push(chunk))
      request.on('end', () => {
        const destination = path.join(
          process.cwd(),
          'public',
          'images',
          'blog',
          filename,
        )
        fs.writeFileSync(destination, Buffer.concat(chunks))
        response.statusCode = 204
        response.end()
      })
    })
  },
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    blogImageReceiver,
  ],
  build: {
    sourcemap: false,
  },
})