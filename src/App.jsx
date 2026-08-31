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

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Canonical />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
