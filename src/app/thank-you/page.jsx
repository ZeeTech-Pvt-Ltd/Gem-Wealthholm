import { Suspense } from 'react'
import Link from 'next/link'
import Main from '../../components/Main'
import SeoScripts from '../../components/SeoScripts'
import ThankYouName from '../../components/ThankYouName'
import { buildMetadata } from '../../lib/seo'
import { ArrowRightIcon, CheckIcon } from '../../components/Icons'

export const metadata = buildMetadata('/thank-you')

export default function ThankYou() {
  return (
    <Main>
      <SeoScripts route="/thank-you" />
      <section className="page-hero notfound thankyou">
        <span className="page-hero__ghost" aria-hidden="true">
          TY
        </span>
        <div className="container">
          <span className="thankyou__check" aria-hidden="true">
            <CheckIcon />
          </span>
          <p className="eyebrow">Success</p>
          <h1 className="page-hero__title">
            Thank <mark>you</mark>
            <Suspense fallback={null}>
              <ThankYouName />
            </Suspense>
            !
          </h1>
          <p className="page-hero__text">
            Your request has been received. Our team will be in touch with you
            shortly.
          </p>
          <div className="notfound__actions">
            <Link className="btn btn--ink" href="/">
              Back to homepage
            </Link>
            <Link className="btn btn--ghost" href="/faqs">
              Read the FAQ
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </Main>
  )
}
