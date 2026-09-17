import { Link, useLocation } from 'react-router-dom'
import Reveal, { stagger } from '@/components/Reveal'
import { Button, Section, cx } from '@/components/primitives'
import { LEGAL_DOCS, LEGAL_TABS } from '@/data/legal'

/**
 * One component, three routes.
 *
 * `/privacy`, `/terms` and `/refund` share a layout, so they share a component
 * and differ only in the document passed to it. Three near-identical page files
 * would guarantee they drift apart on the first edit.
 */
export default function Legal({ slug }) {
  const doc = LEGAL_DOCS[slug]
  const { pathname } = useLocation()

  // Anchor ids are derived from the section number, so the contents rail and the
  // headings can never disagree about what links where.
  const anchorId = (n) => `s-${n}`

  return (
    <Section className="pb-[90px] pt-14">
      {/* Sibling documents — a reader who wants the refund rule shouldn't have
          to go back to the footer to find it. */}
      <nav className="flex flex-wrap gap-2" aria-label="Legal documents">
        {LEGAL_TABS.map((t) => (
          <Link
            key={t.to}
            to={t.to}
            className={cx(
              'chip !rounded-[11px] !px-4 !py-2.5 !text-[13px] no-underline',
              pathname === t.to && 'pointer-events-none'
            )}
            data-on={pathname === t.to}
            aria-current={pathname === t.to ? 'page' : undefined}
          >
            {t.label}
          </Link>
        ))}
      </nav>

      <h1 className="mt-8 max-w-[760px] text-[34px] font-extrabold leading-[1.06] tracking-[-0.045em] sm:text-[46px]">
        {doc.title}
      </h1>

      <div className="mt-4 flex items-center gap-4 text-[12.5px] text-[var(--t-50)]">
        <span>Last updated {doc.updated}</span>
        <span className="h-3 w-px bg-white/[.16]" />
        <span>{doc.reading}</span>
      </div>

      <p className="mt-[22px] max-w-[680px] text-[15px] leading-[1.65] text-pretty text-[var(--t-70)] sm:text-[16px]">
        {doc.intro}
      </p>

      <div className="mt-11 grid items-start gap-8 lg:grid-cols-[240px_1fr] lg:gap-11">
        {/* Contents */}
        <nav
          aria-label="On this page"
          className="rounded-[18px] border border-white/10 bg-white/[.05] p-5 backdrop-blur-xl lg:sticky lg:top-24"
        >
          <div className="mb-3 text-[10.5px] font-bold uppercase tracking-[0.13em] text-[var(--t-40)]">
            On this page
          </div>
          <ol className="grid gap-[7px]">
            {doc.sections.map((s) => (
              <li key={s.n}>
                <a
                  href={`#${anchorId(s.n)}`}
                  className="block text-[12.5px] leading-[1.45] text-[rgba(243,242,242,.62)] no-underline transition-colors hover:text-flame-200"
                >
                  {s.n}. {s.h}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Body */}
        <div className="grid max-w-[720px]">
          {doc.sections.map((s, i) => (
            <Reveal
              key={s.n}
              delay={stagger(i, 0.04)}
              id={anchorId(s.n)}
              className="scroll-mt-24 border-t border-white/10 py-[26px]"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-[12.5px] text-flame-200">{s.n}</span>
                <h2 className="text-[19px] font-extrabold tracking-[-0.03em] sm:text-[21px]">
                  {s.h}
                </h2>
              </div>

              <p className="mt-3.5 text-[14.5px] leading-[1.7] text-pretty text-[var(--t-70)]">
                {s.b}
              </p>

              {s.list && (
                <ul className="mt-4 grid gap-2.5">
                  {s.list.map((l) => (
                    <li key={l} className="flex items-start gap-3">
                      <span className="mt-2 h-[5px] w-[5px] flex-none rounded-full bg-flame-500" />
                      <span className="text-[14px] leading-[1.6] text-[var(--t-60)]">{l}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          <div
            className="mt-8 rounded-[20px] border border-white/[.11] p-[26px]"
            style={{
              background: 'linear-gradient(150deg,rgba(255,255,255,.08),rgba(255,255,255,.026))',
            }}
          >
            <div className="text-[15px] font-bold">Questions about this policy?</div>
            <p className="mb-4 mt-2.5 max-w-[460px] text-[13.5px] leading-[1.6] text-[var(--t-60)]">
              Write to legal@cohort.dev, or use the contact form and mark it as a policy question. A
              human answers.
            </p>
            <Button to="/contact" variant="primary" size="md" className="!font-bold">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
