import Link from 'next/link'
import Main from '../components/Main'
import { ArrowRightIcon } from '../components/Icons'

export const metadata = {
  title: 'Page Not Found - Gem Wealthholm',
  description: 'The page you are looking for could not be found on Gem Wealthholm.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <Main>
      <section className="page-hero notfound">
        <span className="page-hero__ghost" aria-hidden="true">
          404
        </span>
        <div className="container">
          <p className="eyebrow">Error - 404</p>
          <h1 className="page-hero__title">
            Page not <mark>found</mark>
          </h1>
          <p className="page-hero__text">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
            Let&apos;s get you back on track.
          </p>
          <div className="notfound__actions">
            <Link className="btn btn--ink" href="/">
              Back to homepage
            </Link>
            <Link className="btn btn--ghost" href="/contact-us">
              Contact us
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>
    </Main>
  )
}
