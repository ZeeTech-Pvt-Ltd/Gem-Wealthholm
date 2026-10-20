'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GemLogo from './GemLogo'

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Segment-boundary active check (like React Router's NavLink):
  // /about-us matches "About us", /about-us2 does not.
  const isActive = (path) =>
    pathname === null
      ? false
      : path === '/'
        ? pathname === '/'
        : pathname === path || pathname.startsWith(path + '/')

  const navClass = (path) => `header__link${isActive(path) ? ' header__link--active' : ''}`

  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" aria-label="Gem Wealthholm - home">
          <GemLogo />
        </Link>

        <button
          className={`header__hamburger${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav${open ? ' is-open' : ''}`} aria-label="Main navigation">
          <Link href="/" className={navClass('/')}>
            Home
          </Link>
          <Link href="/about-us" className={navClass('/about-us')}>
            About us
          </Link>
          <Link href="/how-it-works" className={navClass('/how-it-works')}>
            How it works
          </Link>
          <Link href="/features" className={navClass('/features')}>
            Features
          </Link>
          <Link href="/reviews" className={navClass('/reviews')}>
            Reviews
          </Link>
          <Link href="/contact-us" className={navClass('/contact-us')}>
            Contact us
          </Link>
          <Link href="/faqs" className={navClass('/faqs')}>
            FAQ
          </Link>
          <Link href="/login" className="header__link header__cta btn btn--ink">
            Sign up
          </Link>
        </nav>
      </div>
    </header>
  )
}
