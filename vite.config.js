import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Inject preload hints into index.html for the initial (non-lazy)
 * JS chunks, and make the main CSS non-render-blocking (the splash's
 * inline CSS covers first paint; the stylesheet swaps in on load).
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

      // Convert Vite's render-blocking stylesheet link into a
      // preload + non-blocking swap pattern.
      html = html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
        '<link rel="preload" as="style" href="$1">' +
          '<link rel="stylesheet" href="$1" media="print" onload="this.media=\'all\'">' +
          '<noscript><link rel="stylesheet" href="$1"></noscript>',
      )

      return html.replace('</head>', `${jsPreloads}</head>`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), injectPreloads()],
})
