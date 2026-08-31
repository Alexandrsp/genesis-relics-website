import http from 'node:http'
import { Readable } from 'node:stream'
import app from './dist/server/server.js'

const HOST = '0.0.0.0'
const PORT = 3000

const server = http.createServer(async (req, res) => {
  try {
    const host = req.headers.host || `localhost:${PORT}`
    const url = `http://${host}${req.url || '/'}`

    const headers = new Headers()

    for (const [key, value] of Object.entries(req.headers)) {
      if (value === undefined) continue

      if (Array.isArray(value)) {
        headers.set(key, value.join(', '))
      } else {
        headers.set(key, value)
      }
    }

    const method = req.method || 'GET'

    let body

    if (method !== 'GET' && method !== 'HEAD') {
      body = Readable.toWeb(req)
    }

    const requestInit = {
      method,
      headers,
      body,
    }

    if (body) {
      requestInit.duplex = 'half'
    }

    const request = new Request(url, requestInit)

    const pathname = new URL(req.url || '/', url).pathname

    // Serve Vite production assets directly from dist/client.
    if (
      (method === 'GET' || method === 'HEAD') &&
      pathname.startsWith('/assets/')
    ) {
      const fs = await import('node:fs/promises')
      const path = await import('node:path')

      const relativePath = pathname.replace(/^\/assets\//, '')
      const clientRoot = path.resolve('dist/client')
      const filePath = path.resolve(clientRoot, 'assets', relativePath)

      // Prevent path traversal outside dist/client.
      if (!filePath.startsWith(path.join(clientRoot, path.sep))) {
        res.statusCode = 403
        res.end('Forbidden')
        return
      }

      try {
        const content = await fs.readFile(filePath)

        const ext = path.extname(filePath).toLowerCase()
        const contentTypes = {
          '.webp': 'image/webp',
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.jpeg': 'image/jpeg',
          '.svg': 'image/svg+xml',
          '.js': 'application/javascript; charset=utf-8',
          '.css': 'text/css; charset=utf-8',
          '.woff': 'font/woff',
          '.woff2': 'font/woff2',
        }

        res.statusCode = 200
        res.setHeader(
          'Content-Type',
          contentTypes[ext] || 'application/octet-stream'
        )
        res.setHeader('Content-Length', content.byteLength)
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')

        if (method === 'HEAD') {
          res.end()
        } else {
          res.end(content)
        }
        return
      } catch (error) {
        if (error.code !== 'ENOENT') throw error
        // Let SSR handle unknown paths.
      }
    }

    const staticFiles = {
      '/robots.txt': ['public/robots.txt', 'text/plain; charset=utf-8'],
      '/sitemap.xml': ['public/sitemap.xml', 'application/xml; charset=utf-8'],
    }

    const staticFile = staticFiles[pathname]

    if (staticFile && (method === 'GET' || method === 'HEAD')) {
      const file = await import('node:fs/promises')
      const content = await file.readFile(staticFile[0])

      res.statusCode = 200
      res.setHeader('Content-Type', staticFile[1])
      res.setHeader('Content-Length', content.byteLength)

      if (method === 'HEAD') {
        res.end()
      } else {
        res.end(content)
      }
      return
    }

    const response = await app.fetch(request)

    res.statusCode = response.status

    response.headers.forEach((value, key) => {
      res.setHeader(key, value)
    })

    if (method === 'HEAD' || !response.body) {
      res.end()
      return
    }

    Readable.fromWeb(response.body).pipe(res)

  } catch (error) {
    console.error('SERVER ERROR:', error)

    if (!res.headersSent) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end('Internal Server Error')
    } else {
      res.destroy(error)
    }
  }
})

server.keepAliveTimeout = 65000
server.headersTimeout = 66000
server.requestTimeout = 120000

server.listen(PORT, HOST, () => {
  console.log(`Genesis Relics server listening on http://${HOST}:${PORT}`)
})
