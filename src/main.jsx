import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Login from './pages/Login'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import RiskDisclosure from './pages/RiskDisclosure'
import Cookies from './pages/Cookies'
import NotFound from './pages/NotFound'
import ThankYou from './pages/ThankYou'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </StrictMode>,
)
