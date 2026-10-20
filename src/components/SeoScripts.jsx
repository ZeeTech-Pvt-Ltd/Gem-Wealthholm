import { faqItems } from '../data/faq'
import { breadcrumbJsonLd, faqPageJsonLd } from '../lib/seo'

/**
 * Server-rendered structured data (replaces the client-injected
 * JSON-LD from the old Seo component): FAQPage schema on the FAQ
 * surfaces, BreadcrumbList on every route.
 */
export default function SeoScripts({ route, name }) {
  const isFaq = route === '/' || route === '/faqs'
  const faq = isFaq ? faqPageJsonLd(route === '/' ? faqItems.slice(0, 6) : faqItems) : null
  const breadcrumb = breadcrumbJsonLd(route, name)

  return (
    <>
      {faq && (
        <script
          id="seo-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      )}
      <script
        id="seo-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}
