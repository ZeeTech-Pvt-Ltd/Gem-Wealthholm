import Link from 'next/link'
import Main from '../components/Main'
import SeoScripts from '../components/SeoScripts'
import DeferredHomeBody from '../components/DeferredHomeBody'
import ActivityTicker from '../components/ActivityTicker'
import RegistrationForm from '../components/RegistrationForm'
import { buildMetadata } from '../lib/seo'
import { ArrowRightIcon } from '../components/Icons'

export const metadata = buildMetadata('/')

export default function Home() {
  return (
    <Main home>
      <SeoScripts route="/" />
      {/* Hero */}
      <section className="hero">
        <span className="hero__ghost" aria-hidden="true">
          WEALTHHOLM
        </span>
        <div className="container">
          <div className="hero__row">
            <div className="hero__main">
              <p className="eyebrow">Gem Wealthholm - AI market intelligence</p>
              <h1 className="hero__title">
                Gem Wealthholm - see the market with <mark>clarity</mark>
              </h1>
              <p className="hero__subtitle">
                An AI engine that scans markets around the clock, turns dense
                data into clear signals, and helps you act with more confidence
                - whatever your experience level.
              </p>
              <div className="hero__actions">
                <a href="#join" className="btn btn--ink">
                  Open an account
                </a>
                <Link href="/about-us" className="link-arrow">
                  Explore the platform
                  <ArrowRightIcon />
                </Link>
              </div>
              <ul className="hero__meta">
                <li>
                  <span className="hero__meta-val">24/7</span>
                  <span className="hero__meta-label">Monitoring</span>
                </li>
                <li>
                  <span className="hero__meta-val">65+</span>
                  <span className="hero__meta-label">Markets</span>
                </li>
                <li>
                  <span className="hero__meta-val">0.4s</span>
                  <span className="hero__meta-label">Signal latency</span>
                </li>
              </ul>
            </div>
            <div className="hero__side">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Live market ticker - right below the hero */}
      <ActivityTicker />

      <DeferredHomeBody />
    </Main>
  )
}
