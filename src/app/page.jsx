import Main from '../components/Main'
import SeoScripts from '../components/SeoScripts'
import DeferredHomeBody from '../components/DeferredHomeBody'
import ActivityTicker from '../components/ActivityTicker'
import RegistrationForm from '../components/RegistrationForm'
import { buildMetadata } from '../lib/seo'
import { CardsIcon, SparkIcon, ShieldIcon, ClockIcon } from '../components/Icons'

const trustItems = [
  { icon: CardsIcon, title: 'Start from 347 A$', text: 'A small, sensible first step' },
  { icon: SparkIcon, title: 'No app needed', text: 'Works in any web browser' },
  { icon: ShieldIcon, title: 'Bank-level encryption', text: 'Your details stay protected' },
  { icon: ClockIcon, title: 'Support on Aussie hours', text: 'Real help when you need it' },
]

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
              <p className="eyebrow">Made for Australia</p>
              <h1 className="hero__title">
                The AI Trading Platform Australia Can <mark>Count On</mark>
              </h1>
              <p className="hero__subtitle">
                A straightforward AI trading platform for Australians. It
                studies the markets, highlights opportunities, and leaves the
                final call to you.
              </p>
              <div className="hero__actions">
                <a href="#join" className="btn btn--ink">
                  Open an account
                </a>
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
              <RegistrationForm
                title="Create Your Free Account"
                sub="Free sign-up - takes under 2 minutes"
                submitLabel="Get Started Free"
                note="Free sign-up · Takes under 2 minutes · Secure registration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live market ticker - right below the hero */}
      <ActivityTicker />

      {/* Trust strip */}
      <section className="trust-strip" aria-label="Why Gem Wealthholm">
        <div className="container">
          <div className="trust-strip__grid">
            {trustItems.map((item) => {
              const Icon = item.icon
              return (
                <div className="trust-strip__item" key={item.title}>
                  <span className="trust-strip__icon">
                    <Icon />
                  </span>
                  <span className="trust-strip__text">
                    <b>{item.title}</b>
                    {item.text}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <DeferredHomeBody />
    </Main>
  )
}
