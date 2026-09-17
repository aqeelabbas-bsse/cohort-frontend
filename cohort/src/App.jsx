import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { pageVariants } from '@/components/Reveal'

// The landing page is what most people hit first, so it ships in the main
// bundle. Everything else is split — no reason to download the payments ledger
// in order to read the homepage.
import Landing from '@/pages/Landing'

const About = lazy(() => import('@/pages/About'))
const Services = lazy(() => import('@/pages/Services'))
const Process = lazy(() => import('@/pages/Process'))
const Portfolio = lazy(() => import('@/pages/Portfolio'))
const Pricing = lazy(() => import('@/pages/Pricing'))
const Contact = lazy(() => import('@/pages/Contact'))
const Faqs = lazy(() => import('@/pages/Faqs'))
const Signup = lazy(() => import('@/pages/Signup'))
const Login = lazy(() => import('@/pages/Login'))
const Forgot = lazy(() => import('@/pages/Forgot'))
const Submit = lazy(() => import('@/pages/Submit'))
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const Testers = lazy(() => import('@/pages/Testers'))
const Task = lazy(() => import('@/pages/Task'))
const Referrals = lazy(() => import('@/pages/Referrals'))
const Payments = lazy(() => import('@/pages/Payments'))
const Legal = lazy(() => import('@/pages/Legal'))
const NotFound = lazy(() => import('@/pages/NotFound'))

/**
 * Every route change starts at the top of the new page. React Router keeps the
 * scroll position by default, which on a long marketing page drops you into the
 * middle of the next one. In-page anchors (#s-03 on the legal pages) are left
 * alone so the contents rail still works.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

/** Wraps each route in the enter/exit transition so screens cross-fade. */
function Page({ children }) {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.main>
  )
}

/** Shown while a split chunk downloads. Deliberately quiet. */
function ChunkFallback() {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/15 border-t-flame-400" />
    </div>
  )
}

const ROUTES = [
  ['/about', About],
  ['/services', Services],
  ['/process', Process],
  ['/portfolio', Portfolio],
  ['/pricing', Pricing],
  ['/contact', Contact],
  ['/faqs', Faqs],
  ['/signup', Signup],
  ['/login', Login],
  ['/forgot', Forgot],
  ['/submit', Submit],
  ['/dashboard', Dashboard],
  ['/testers', Testers],
  ['/task', Task],
  ['/referrals', Referrals],
  ['/payments', Payments],
]

const LEGAL_ROUTES = ['privacy', 'terms', 'refund']

export default function App() {
  const location = useLocation()

  return (
    <div className="relative z-[1] flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />

      <div className="flex-1">
        <Suspense fallback={<ChunkFallback />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <Page>
                    <Landing />
                  </Page>
                }
              />

              {ROUTES.map(([path, Component]) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <Page>
                      <Component />
                    </Page>
                  }
                />
              ))}

              {/* Three documents, one component — see pages/Legal.jsx */}
              {LEGAL_ROUTES.map((slug) => (
                <Route
                  key={slug}
                  path={`/${slug}`}
                  element={
                    <Page>
                      <Legal slug={slug} />
                    </Page>
                  }
                />
              ))}

              <Route
                path="*"
                element={
                  <Page>
                    <NotFound />
                  </Page>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>

      <Footer />
    </div>
  )
}
