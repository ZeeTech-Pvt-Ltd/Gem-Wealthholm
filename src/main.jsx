import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'

// Route-level code splitting: non-home pages are their own chunks.
// The homepage is imported eagerly — it is the landing page, so it
// must not wait on an extra network round-trip before rendering.
import Home from './pages/Home'
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Faq = lazy(() => import('./pages/Faq'))
const Login = lazy(() => import('./pages/Login'))
const Terms = lazy(() => import('./pages/Terms'))
const Privacy = lazy(() => import('./pages/Privacy'))
const RiskDisclosure = lazy(() => import('./pages/RiskDisclosure'))
const Cookies = lazy(() => import('./pages/Cookies'))
const NotFound = lazy(() => import('./pages/NotFound'))
const ThankYou = lazy(() => import('./pages/ThankYou'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className="page-loader" aria-label="Loading" />}>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/login" element={<Login />} />
            <Route path="/terms-of-use" element={<Terms />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/risk-disclosure" element={<RiskDisclosure />} />
            <Route path="/cookie-policy" element={<Cookies />} />
            <Route path="/thank-you" element={<ThankYou />} />

            {/* Redirects for the old slugs */}
            <Route path="/about" element={<Navigate to="/about-us" replace />} />
            <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
            <Route path="/faq" element={<Navigate to="/faqs" replace />} />
            <Route path="/terms" element={<Navigate to="/terms-of-use" replace />} />
            <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/cookies" element={<Navigate to="/cookie-policy" replace />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
