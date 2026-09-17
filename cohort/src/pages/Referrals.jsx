import { useEffect, useRef, useState } from 'react'
import Reveal, { stagger } from '@/components/Reveal'
import { Avatar, Badge, Glass, IconTile, Section } from '@/components/primitives'
import { LEADERS, REF_ROWS, REF_STEPS } from '@/data/site'
import { iconFor } from '@/lib/icons'

const REF_LINK = 'cohort.dev/r/marta-b7f4'

const HEADLINE_STATS = [
  { value: '300', label: 'Points to you' },
  { value: '150', label: 'Points to them' },
  { value: '∞', label: 'No referral cap' },
]

const FUNNEL = [
  { value: '14', label: 'Signed up' },
  { value: '9', label: 'Ran a cohort' },
  { value: '2,700', label: 'Points earned', tone: '#a8e6c4' },
]

export default function Referrals() {
  return (
    <>
      <Section className="grid items-center gap-10 pb-8 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
        <div>
          <div className="kicker">Referrals</div>
          <h1 className="mt-4 text-[34px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[44px] lg:text-[52px]">
            Bring a developer, bank 300 points.
          </h1>
          <p className="mt-5 max-w-[520px] text-[15.5px] leading-[1.6] text-[var(--t-70)] sm:text-[16.5px]">
            They get 150 points on signup and skip to the front of the free queue for their first
            cohort. You get 300 when their first cohort reaches day one — that is two free tester
            slots for a link.
          </p>

          <dl className="mt-8 flex flex-wrap gap-6">
            {HEADLINE_STATS.map((s, i) => (
              <div key={s.label} className="flex gap-6">
                {i > 0 && <div className="w-px bg-white/[.12]" />}
                <div>
                  <dt className="text-[26px] font-extrabold tracking-[-0.04em] text-flame-200 sm:text-[30px]">
                    {s.value}
                  </dt>
                  <dd className="mt-[3px] text-[12.5px] text-[var(--t-50)]">{s.label}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <ReferralCard />
      </Section>

      {/* How it pays */}
      <Section tight className="grid gap-4 md:grid-cols-3">
        {REF_STEPS.map((r, i) => {
          const Icon = iconFor(r.icon)
          return (
            <Reveal key={r.n} delay={stagger(i)}>
              <Glass className="h-full rounded-[22px] px-[26px] py-7">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold tracking-[0.1em] text-[var(--t-40)]">
                    {r.n}
                  </span>
                  <IconTile>
                    <Icon size={17} strokeWidth={1.8} />
                  </IconTile>
                </div>
                <div className="mt-[18px] text-[17px] font-bold tracking-[-0.02em]">{r.title}</div>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-[var(--t-60)]">{r.body}</p>
              </Glass>
            </Reveal>
          )
        })}
      </Section>

      {/* Ledger + leaderboard */}
      <Section className="grid items-start gap-6 pb-[90px] lg:grid-cols-[1.1fr_.9fr]">
        <Glass className="rounded-[24px] p-6 sm:p-7">
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[rgba(243,242,242,.45)]">
            Your referrals
          </div>
          <div className="mt-4 grid gap-0.5">
            {REF_ROWS.map((r) => (
              <div
                key={r.name}
                className="grid grid-cols-[1fr_110px_70px] items-center gap-3.5 rounded-[10px] px-2 py-3 transition-colors hover:bg-white/[.05] sm:grid-cols-[1fr_130px_90px]"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <Avatar gradient={r.av} size={26} />
                  <div className="min-w-0">
                    <div className="truncate text-[13.5px] font-semibold">{r.name}</div>
                    <div className="text-[11px] text-[var(--t-40)]">{r.when}</div>
                  </div>
                </div>
                <Badge
                  bg={r.live ? 'rgba(143,215,176,.16)' : 'rgba(255,255,255,.09)'}
                  fg={r.live ? '#a8e6c4' : 'rgba(243,242,242,.7)'}
                >
                  {r.status}
                </Badge>
                <div
                  className="text-right text-[13.5px] font-bold"
                  style={{ color: r.live ? '#a8e6c4' : 'rgba(243,242,242,.45)' }}
                >
                  {r.pts}
                </div>
              </div>
            ))}
          </div>
        </Glass>

        <Glass className="rounded-[24px] p-6 sm:p-7">
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[rgba(243,242,242,.45)]">
            Top referrers this month
          </div>
          <ol className="mt-4 grid gap-2.5">
            {LEADERS.map((l) => (
              <li key={l.rank} className="flex items-center gap-3">
                <span
                  className="w-6 font-mono text-[12px] font-bold"
                  style={{ color: l.top ? '#ff8a75' : 'rgba(243,242,242,.5)' }}
                >
                  {l.rank}
                </span>
                <Avatar gradient={l.av} size={26} />
                <span className="flex-1 truncate text-[13px] font-semibold">{l.name}</span>
                <div className="h-1.5 flex-[1.4] overflow-hidden rounded-full bg-white/[.08]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: l.pct,
                      background: 'linear-gradient(90deg,#ff8a75,#dd2b0f)',
                    }}
                  />
                </div>
                <span className="w-[52px] text-right text-[12.5px] font-bold">{l.count}</span>
              </li>
            ))}
          </ol>
        </Glass>
      </Section>
    </>
  )
}

/** The link card. Copy state resets itself after 1.8s. */
function ReferralCard() {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  // Clear the timeout on unmount — otherwise setState fires on a dead component
  // if you navigate away within the 1.8s window.
  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`https://${REF_LINK}`)
    } catch {
      // Clipboard API needs a secure context; failing silently is fine here
      // because the link is visible and selectable either way.
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div
      className="rounded-[24px] border p-7 sm:p-[30px]"
      style={{
        background: 'linear-gradient(150deg,rgba(236,48,19,.22),rgba(255,255,255,.035))',
        borderColor: 'rgba(255,98,71,.32)',
        backdropFilter: 'blur(30px) saturate(160%)',
        WebkitBackdropFilter: 'blur(30px) saturate(160%)',
        boxShadow: '0 1px 0 rgba(255,255,255,.2) inset, 0 30px 70px rgba(0,0,0,.5)',
      }}
    >
      <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[rgba(255,196,184,.8)]">
        Your referral link
      </div>

      <div className="mt-4 flex gap-2.5">
        <div className="min-w-0 flex-1 truncate rounded-[13px] border border-white/[.14] bg-black/40 px-[15px] py-3.5 font-mono text-[12.5px] text-[var(--t-80)]">
          {REF_LINK}
        </div>
        <button
          type="button"
          onClick={copy}
          className="whitespace-nowrap rounded-[13px] px-[18px] py-3.5 text-[13.5px] font-bold text-ink-900 transition-colors"
          style={{ background: copied ? 'rgba(143,215,176,.9)' : '#fff' }}
        >
          {copied ? 'Copied' : 'Copy link'}
        </button>
      </div>

      <dl className="mt-5 grid grid-cols-3 gap-2.5">
        {FUNNEL.map((f) => (
          <div key={f.label} className="rounded-[14px] border border-white/10 bg-black/30 p-4">
            <dt className="text-[22px] font-extrabold tracking-[-0.035em]" style={{ color: f.tone }}>
              {f.value}
            </dt>
            <dd className="mt-0.5 text-[11px] text-[var(--t-50)]">{f.label}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-[18px] h-1.5 overflow-hidden rounded-full bg-black/40">
        <div
          className="h-full rounded-full transition-[width] duration-700"
          style={{ width: '64%', background: 'linear-gradient(90deg,#ffc4b8,#ff563c)' }}
        />
      </div>
      <div className="mt-2.5 text-[11.5px] text-[rgba(255,214,206,.8)]">
        64% of referrals convert to a live cohort — 5 pending
      </div>
    </div>
  )
}
