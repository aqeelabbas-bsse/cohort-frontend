import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronDown, Menu, X } from 'lucide-react'
import { iconFor } from '@/lib/icons'
import { MENU_LINKS, NAV_LINKS } from '@/data/content'
import { Button, cx } from './primitives'

/** Routes that live behind the "More" menu — used to keep it lit when you're on one. */
const MENU_ROUTES = MENU_LINKS.map((m) => m.to).concat('/task', '/submit')

export function Brand({ size = 30 }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Cohort — home">
      <span
        className="grid place-items-center"
        style={{
          width: size,
          height: size,
          borderRadius: 9,
          background: 'linear-gradient(150deg,#ff6b52,#dd2b0f)',
          boxShadow: '0 4px 16px rgba(236,48,19,.5), 0 1px 0 rgba(255,255,255,.35) inset',
        }}
      >
        <Check size={size * 0.53} strokeWidth={3} color="#fff" />
      </span>
      <span className="text-[17px] font-extrabold tracking-[-0.03em]">Cohort</span>
    </Link>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false) // desktop "More" dropdown
  const [sheetOpen, setSheetOpen] = useState(false) // mobile full menu
  const { pathname } = useLocation()
  const menuRef = useRef(null)

  // Any navigation closes both. Without this the dropdown survives the route
  // change and hangs over the new page.
  useEffect(() => {
    setMenuOpen(false)
    setSheetOpen(false)
  }, [pathname])

  // Click-outside and Escape for the dropdown.
  useEffect(() => {
    if (!menuOpen) return
    const onDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const inMenu = MENU_ROUTES.includes(pathname)

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/[.09] px-5 py-3.5 sm:px-8"
      style={{
        background: 'linear-gradient(180deg,rgba(10,9,8,.72),rgba(10,9,8,.35))',
        backdropFilter: 'blur(22px) saturate(150%)',
        WebkitBackdropFilter: 'blur(22px) saturate(150%)',
      }}
    >
      <nav className="mx-auto flex max-w-shell items-center gap-5" aria-label="Primary">
        <Brand />

        {/* ── Desktop links ─────────────────────────────────────────────── */}
        <div className="ml-1.5 hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                cx(
                  'whitespace-nowrap rounded-[10px] px-3 py-2 text-[13.5px] transition-colors',
                  isActive
                    ? 'bg-white/[.09] font-bold text-white'
                    : 'font-medium text-[var(--t-70)] hover:bg-white/[.09] hover:text-white'
                )
              }
            >
              {n.label}
            </NavLink>
          ))}

          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-haspopup="true"
              className={cx(
                'flex items-center gap-1.5 whitespace-nowrap rounded-[10px] px-3 py-2 text-[13.5px] font-medium transition-colors hover:bg-white/[.09] hover:text-white',
                menuOpen || inMenu ? 'bg-white/[.09] text-white' : 'text-[var(--t-70)]'
              )}
            >
              More
              <ChevronDown
                size={13}
                strokeWidth={2.4}
                className={cx('transition-transform duration-200', menuOpen && 'rotate-180')}
              />
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute left-0 top-11 z-[60] w-[252px] rounded-2xl border border-white/[.14] p-2"
                  style={{
                    background: 'rgba(18,16,15,.94)',
                    backdropFilter: 'blur(26px) saturate(160%)',
                    WebkitBackdropFilter: 'blur(26px) saturate(160%)',
                    boxShadow: '0 24px 60px rgba(0,0,0,.6)',
                  }}
                >
                  {MENU_LINKS.map((m) => {
                    const Icon = iconFor(m.icon)
                    return (
                      <Link
                        key={m.to}
                        to={m.to}
                        className="flex items-center gap-[11px] rounded-[11px] px-[11px] py-2.5 text-[13.5px] font-medium text-[rgba(243,242,242,.78)] transition-colors hover:bg-white/[.09] hover:text-white"
                      >
                        <Icon size={15} className="flex-none text-flame-200" />
                        {m.label}
                      </Link>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex-1" />

        {/* ── Account actions ───────────────────────────────────────────── */}
        <div className="hidden items-center gap-2.5 sm:flex">
          <Button to="/login" variant="quiet" size="sm">
            Log in
          </Button>
          <Button to="/signup" variant="primary" size="sm" className="!font-bold">
            Get started
          </Button>
        </div>

        {/* ── Mobile trigger ────────────────────────────────────────────── */}
        <button
          type="button"
          onClick={() => setSheetOpen((v) => !v)}
          aria-expanded={sheetOpen}
          aria-label={sheetOpen ? 'Close menu' : 'Open menu'}
          className="grid h-9 w-9 place-items-center rounded-[10px] border border-white/[.14] bg-white/[.06] lg:hidden"
        >
          {sheetOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </nav>

      {/* ── Mobile sheet ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {sheetOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-auto grid max-w-shell gap-1 pb-3 pt-4">
              {NAV_LINKS.concat(MENU_LINKS).map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === '/'}
                  className={({ isActive }) =>
                    cx(
                      'rounded-[11px] px-3 py-2.5 text-[14px] transition-colors',
                      isActive
                        ? 'bg-white/[.09] font-bold text-white'
                        : 'font-medium text-[var(--t-70)] hover:bg-white/[.07]'
                    )
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2 sm:hidden">
                <Button to="/login" variant="quiet" size="sm">
                  Log in
                </Button>
                <Button to="/signup" variant="primary" size="sm">
                  Get started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
