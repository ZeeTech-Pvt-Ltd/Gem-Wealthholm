/** @type {import('next').NextConfig} */
const nextConfig = {
  // Legacy slug redirects (previously client-side <Navigate>).
  async redirects() {
    return [
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/contact', destination: '/contact-us', permanent: true },
      { source: '/faq', destination: '/faqs', permanent: true },
      { source: '/terms', destination: '/terms-of-use', permanent: true },
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/cookies', destination: '/cookie-policy', permanent: true },
    ]
  },
  // Replaces vercel.json: ai-catalog Link header on every response.
  // Immutable caching of hashed /_next/static assets is handled by Next itself.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Link', value: '</.well-known/ai-catalog.json>; rel="ai-catalog"' },
        ],
      },
    ]
  },
}

export default nextConfig
