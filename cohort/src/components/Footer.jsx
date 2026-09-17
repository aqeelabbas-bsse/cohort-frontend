import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { FOOTER_COLS } from '@/data/content'
import { Brand } from './Navbar'

const SOCIALS = [
  { icon: Github, label: 'Cohort on GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'Cohort on LinkedIn', href: 'https://linkedin.com' },
  { icon: Twitter, label: 'Cohort on X', href: 'https://x.com' },
]

const LEGAL = [
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Refunds', to: '/refund' },
]

export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t border-white/[.09]"
      style={{
        background: 'rgba(10,9,8,.55)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="shell grid gap-8 pb-5 pt-[52px] sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(4,1fr)] lg:gap-[34px]">
        {/* Brand column */}
        <div>
          <Brand size={28} />
          <p className="mt-3.5 max-w-[280px] text-[12.5px] leading-[1.6] text-[rgba(243,242,242,.45)]">
            Closed-testing infrastructure for Android developers. Twelve verified testers, fourteen
            unbroken days, one production release. Not affiliated with Google LLC.
          </p>
          <div className="mt-[18px] flex gap-2">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer noopener"
                className="grid h-8 w-8 place-items-center rounded-[10px] border border-white/[.12] bg-white/[.06] text-[var(--t-70)] transition-colors hover:bg-white/[.13] hover:text-white"
              >
                <Icon size={15} strokeWidth={1.9} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {FOOTER_COLS.map((col) => (
          <div key={col.head}>
            <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--t-40)]">
              {col.head}
            </div>
            <div className="grid gap-2.5">
              {col.links.map((l) => (
                <Link
                  key={l.label + l.to}
                  to={l.to}
                  className="text-[13px] text-[rgba(243,242,242,.65)] transition-colors hover:text-flame-200"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Status bar */}
      <div className="shell flex flex-wrap items-center justify-between gap-5 border-t border-white/[.08] pb-10 pt-6">
        <span className="text-[12px] text-[var(--t-40)]">
          © {new Date().getFullYear()} Cohort Labs. All rights reserved.
        </span>
        <div className="flex flex-wrap items-center gap-[18px]">
          {LEGAL.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[12px] text-[var(--t-50)] transition-colors hover:text-flame-200"
            >
              {l.label}
            </Link>
          ))}
          <span className="flex items-center gap-[7px] text-[12px] text-[var(--t-50)]">
            <span
              className="h-[7px] w-[7px] rounded-full bg-mint"
              style={{ boxShadow: '0 0 0 3px rgba(143,215,176,.2)' }}
            />
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  )
}
