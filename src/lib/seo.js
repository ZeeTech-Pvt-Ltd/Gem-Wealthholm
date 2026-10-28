// Per-route SEO data moved from the old client-side Seo component
// (src/App.jsx in the Vite app) into App Router metadata builders.

export const SITE_URL = 'https://gemwealth-holm.com'

// Breadcrumb labels for BreadcrumbList schema
export const BREADCRUMB_LABELS = {
  '/about-us': 'About Us',
  '/contact-us': 'Contact Us',
  '/features': 'Features',
  '/how-it-works': 'How It Works',
  '/reviews': 'Reviews',
  '/faqs': 'FAQs',
  '/login': 'Access',
  '/guides': 'Guides',
  '/terms-of-use': 'Terms of Use',
  '/privacy-policy': 'Privacy Policy',
  '/risk-disclosure': 'Risk Disclosure',
  '/cookie-policy': 'Cookie Policy',
  '/thank-you': 'Thank You',
}

// Per-route title + meta description, built around the
// primary keyword "Gem Wealthholm".
export const SEO_ROUTES = {
  '/': {
    title: 'Gem Wealthholm | AI Trading Platform in Australia',
    description:
      'Gem Wealthholm is a browser-based AI trading platform for Australians. Trade crypto, forex, stocks and commodities with AI insights.',
  },
  '/about-us': {
    title: 'About Gem Wealthholm - AI Market Intelligence',
    description:
      'Learn about Gem Wealthholm: the AI engine, market analysis tools, copy trading and the security-first approach behind the platform.',
  },
  '/contact-us': {
    title: 'Contact Gem Wealthholm - Support & Assistance',
    description:
      'Get in touch with the Gem Wealthholm team. Questions about the platform, your account or partnerships - we are happy to help.',
  },
  '/features': {
    title: 'Gem Wealthholm Features - AI Signals & Security',
    description:
      'Explore the Gem Wealthholm feature set: AI market scanning, real-time signals, copy trading, 24/7 monitoring and encrypted, secure channels.',
  },
  '/how-it-works': {
    title: 'How Gem Wealthholm Works - Four Steps to Clarity',
    description:
      'How Gem Wealthholm works: open an account, deposit from 347 A$, and let the AI engine scan markets around the clock.',
  },
  '/reviews': {
    title: 'Gem Wealthholm Reviews - What Members Say',
    description:
      'Gem Wealthholm reviews from members across Australia: honest feedback on the AI signals, copy trading, support and the withdrawal experience.',
  },
  '/faqs': {
    title: 'Gem Wealthholm FAQs - Frequently Asked Questions',
    description:
      'Answers to the most common questions about Gem Wealthholm: the AI engine, security, deposits, withdrawals and how to get started.',
  },
  '/login': {
    title: 'Gem Wealthholm - Join & Access Your Account',
    description:
      'Open your Gem Wealthholm account in minutes. AI-powered market insights, live signals and copy trading - free to join.',
  },
  '/terms-of-use': {
    title: 'Gem Wealthholm - Terms of Use & Platform Rules',
    description:
      'The terms of use that govern your access to the Gem Wealthholm platform: accounts, deposits, withdrawals, acceptable use and liability.',
  },
  '/privacy-policy': {
    title: 'Gem Wealthholm - Privacy Policy & Data Protection',
    description:
      'How Gem Wealthholm collects, uses, shares and protects your personal information, and the privacy rights available to you.',
  },
  '/risk-disclosure': {
    title: 'Gem Wealthholm - Risk Disclosure & Trading Risks',
    description:
      'The trading risks you should understand before using Gem Wealthholm: market volatility, limits of AI tools, liquidity and technology risks.',
  },
  '/cookie-policy': {
    title: 'Gem Wealthholm - Cookie Policy & Tracking Tech',
    description:
      'How Gem Wealthholm uses cookies and similar technologies across the platform, and how you can manage or disable them.',
  },
  '/thank-you': {
    title: 'Thank You - Gem Wealthholm',
    description:
      'Your Gem Wealthholm request has been received. Our team will be in touch with you shortly.',
  },
  '/guides': {
    title: 'Gem Wealthholm Guides - Reviews & How-To Articles',
    description:
      'Practical Gem Wealthholm guides: platform reviews, account access, getting started, and how deposits and withdrawals work.',
  },
}

const NOT_FOUND_SEO = {
  title: 'Page Not Found - Gem Wealthholm',
  description: 'The page you are looking for could not be found on Gem Wealthholm.',
}

const OG_IMAGE = { url: '/og-image.png', width: 1200, height: 630 }

/**
 * Builds the App Router `metadata` export for a static route.
 * Pass `{ title, description }` for dynamic routes (guide details).
 */
export function buildMetadata(route, { title, description } = {}) {
  const seo = title
    ? { title, description }
    : SEO_ROUTES[route] || NOT_FOUND_SEO
  const url = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`

  return {
    title: seo.title,
    description: seo.description,
    robots: route === '/thank-you' ? { index: false, follow: false } : { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      images: [OG_IMAGE],
    },
    twitter: {
      title: seo.title,
      description: seo.description,
      images: [OG_IMAGE],
    },
  }
}

/** BreadcrumbList JSON-LD, replicating the old Seo component's crumb logic. */
export function breadcrumbJsonLd(route, name) {
  const crumbs = [{ name: 'Home', path: '/' }]
  if (route !== '/') {
    if (route.startsWith('/guides/')) {
      crumbs.push({ name: 'Guides', path: '/guides' })
      crumbs.push({ name: name || 'Guide', path: route })
    } else if (route === '/guides') {
      crumbs.push({ name: 'Guides', path: '/guides' })
    } else {
      crumbs.push({
        name: BREADCRUMB_LABELS[route] || route.replace(/[-/]/g, ' '),
        path: route,
      })
    }
  }
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${crumb.path}`,
    })),
  }
}

/** FAQPage JSON-LD (items pre-sliced: 6 on home, all on /faqs). */
export function faqPageJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  }
}
