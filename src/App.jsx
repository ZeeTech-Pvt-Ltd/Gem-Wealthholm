import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/variables.css'
import './styles/base.css'
import './styles/components.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Per-route canonical URL on https://gemwealth-holm.com
function Canonical() {
  const { pathname } = useLocation()

  useEffect(() => {
    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    const slug = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
    link.href = `https://gemwealth-holm.com${slug}`
  }, [pathname])

  return null
}

// Per-route title + meta description, built around the
// primary keyword "Gem Wealthholm".
const SEO_ROUTES = {
  '/': {
    title: 'Gem Wealthholm — AI Market Insights & Smarter Investing',
    description:
      'Gem Wealthholm is an AI-powered platform with real-time market insights, live trading signals, copy trading and 24/7 monitoring. Invest with clarity.',
  },
  '/about-us': {
    title: 'About Gem Wealthholm — AI Market Intelligence Platform',
    description:
      'Learn about Gem Wealthholm: the AI engine, market analysis tools, copy trading and the security-first approach behind the platform.',
  },
  '/contact-us': {
    title: 'Contact Gem Wealthholm — Support & Assistance',
    description:
      'Get in touch with the Gem Wealthholm team. Questions about the platform, your account or partnerships — we are happy to help.',
  },
  '/faqs': {
    title: 'Gem Wealthholm FAQs — Frequently Asked Questions',
    description:
      'Answers to the most common questions about Gem Wealthholm: the AI engine, security, deposits, withdrawals and how to get started.',
  },
  '/login': {
    title: 'Gem Wealthholm — Join & Access Your Account',
    description:
      'Open your Gem Wealthholm account in minutes. AI-powered market insights, live signals and copy trading — free to join.',
  },
  '/terms-of-use': {
    title: 'Gem Wealthholm — Terms of Use',
    description:
      'The terms of use that govern your access to the Gem Wealthholm platform and services.',
  },
  '/privacy-policy': {
    title: 'Gem Wealthholm — Privacy Policy',
    description:
      'How Gem Wealthholm collects, uses and protects your personal information across the platform.',
  },
  '/risk-disclosure': {
    title: 'Gem Wealthholm — Risk Disclosure',
    description:
      'The risks you should understand before using the Gem Wealthholm platform, including market volatility and the limits of AI tools.',
  },
  '/cookie-policy': {
    title: 'Gem Wealthholm — Cookie Policy',
    description:
      'How Gem Wealthholm uses cookies and similar technologies, and how you can manage them.',
  },
  '/thank-you': {
    title: 'Thank You — Gem Wealthholm',
    description:
      'Your Gem Wealthholm request has been received. Our team will be in touch with you shortly.',
  },
}

function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo =
      SEO_ROUTES[pathname] ||
      (pathname.startsWith('/404')
        ? null
        : {
            title: 'Page Not Found — Gem Wealthholm',
            description: 'The page you are looking for could not be found on Gem Wealthholm.',
          })

    if (seo) {
      document.title = seo.title
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
      }
      meta.content = seo.description
    }
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Canonical />
      <Seo />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
