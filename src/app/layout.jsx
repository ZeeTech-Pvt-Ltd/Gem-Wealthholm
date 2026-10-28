import { Inter, Space_Grotesk, Space_Mono } from 'next/font/google'
import { Suspense } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Analytics from '../components/Analytics'
import '../styles/variables.css'
import '../styles/base.css'
import '../styles/components.css'
// intl-tel-input CSS moved here from PhoneField (global CSS may only
// be imported in layouts). Order preserved from the Vite app.
import 'intl-tel-input/build/css/intlTelInput.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})
const spaceMono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata = {
  metadataBase: new URL('https://gemwealth-holm.com'),
  title: { default: 'Gem Wealthholm | AI Trading Platform in Australia' },
  description:
    'Gem Wealthholm is a browser-based AI trading platform for Australians. Trade crypto, forex, stocks and commodities with AI insights.',
  keywords: [
    'Gem Wealthholm',
    'AI trading platform Australia',
    'AI market insights',
    'trading signals',
    'copy trading',
    'crypto trading',
    'smart investing',
  ],
  robots: { index: true, follow: true },
  verification: {
    google: 'tT8Ojx0NenFzB3iFe_lCNIQZ73I-M6KvlQIMfRCDANQ',
  },
  openGraph: {
    type: 'website',
    siteName: 'Gem Wealthholm',
    locale: 'en_US',
    url: '/',
    title: 'Gem Wealthholm | AI Trading Platform in Australia',
    description:
      'Gem Wealthholm is a browser-based AI trading platform for Australians. Trade crypto, forex, stocks and commodities with AI insights.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gem Wealthholm | AI Trading Platform in Australia',
    description:
      'Gem Wealthholm is a browser-based AI trading platform for Australians. Trade crypto, forex, stocks and commodities with AI insights.',
    images: ['/og-image.png'],
  },
}

export const viewport = {
  themeColor: '#0d121b',
  width: 'device-width',
  initialScale: 1,
}

// Verbatim from the old index.html: stub first, real gtag.js on idle
// (post-first-paint load, so it never extends the critical path).
const GA_STUB = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-WJGKE38ZW1', { send_page_view: false });
var loadGA = function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-WJGKE38ZW1';
  document.head.appendChild(s);
};
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(loadGA, { timeout: 3000 });
} else {
  setTimeout(loadGA, 2500);
}`

// Verbatim from the old index.html: Organization + WebSite @graph.
const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://gemwealth-holm.com/#organization',
      name: 'Gem Wealthholm',
      url: 'https://gemwealth-holm.com/',
      logo: 'https://gemwealth-holm.com/og-image.png',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://gemwealth-holm.com/#website',
      name: 'Gem Wealthholm',
      url: 'https://gemwealth-holm.com/',
      publisher: { '@id': 'https://gemwealth-holm.com/#organization' },
      inLanguage: 'en',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body>
        {/* #root wrapper keeps base.css's flex-column sticky-footer
            rules working without CSS changes */}
        <div id="root">
          <Header />
          {children /* each page supplies its own <Main> */}
          <Footer />
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          <script dangerouslySetInnerHTML={{ __html: GA_STUB }} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
          />
          {/* React 19 hoists these <link>s into <head> */}
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <link rel="ai-catalog" type="application/ai-catalog+json" href="/.well-known/ai-catalog.json" />
        </div>
      </body>
    </html>
  )
}
