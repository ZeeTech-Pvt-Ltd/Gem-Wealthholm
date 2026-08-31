import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Inject preload hints into index.html for the initial (non-lazy)
 * JS chunks and all CSS, so they start downloading immediately
 * instead of waiting behind font requests on slow connections.
 */
function injectPreloads() {
  return {
    name: 'inject-preloads',
    transformIndexHtml(html, ctx) {
      if (!ctx.bundle) return html

      const chunks = Object.values(ctx.bundle)
      const jsPreloads = chunks
        .filter((c) => c.type === 'chunk' && (c.isEntry || !c.isDynamicEntry) && c.fileName.endsWith('.js'))
        .map((c) => `<link rel="modulepreload" crossorigin href="/${c.fileName}">`)
        .join('')

      return html.replace('</head>', `${jsPreloads}</head>`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), injectPreloads()],
})
