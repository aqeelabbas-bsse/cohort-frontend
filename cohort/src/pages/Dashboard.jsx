import { Link, NavLink } from 'react-router-dom'
import { CreditCard, LineChart, Plus, TriangleAlert, Users } from 'lucide-react'
import Reveal, { stagger } from '@/components/Reveal'
import { Avatar, Badge, Button, DayStrip, Glass, cx } from '@/components/primitives'
import { DASH_TILES, DAY_LEGEND, PROOF_QUEUE, ROSTER } from '@/data/app'

const SIDE_LINKS = [
  { label: 'Overview', to: '/dashboard', icon: LineChart, end: true },
  { label: 'New cohort', to: '/submit', icon: Plus },
  { label: 'Tester portal', to: '/testers', icon: Users },
  { label: 'Billing', to: '/payments', icon: CreditCard },
]

export default function Dashboard() {
  return (
    // Wider than the marketing measure — a data screen earns the extra room.
    <div className="mx-auto grid w-full max-w-[1400px] items-start gap-6 px-5 pb-[70px] pt-7 sm:px-8 lg:grid-cols-[232px_1fr]">
      <Sidebar />

      <div className="grid gap-5">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="text-[26px] font-extrabold tracking-[-0.04em] sm:text-[32px]">
              Good evening, Marta
            </h1>
            <p className="mt-[7px] text-[14px] text-[var(--t-50)]">
              One cohort running · day 9 of 14 · all 12 slots compliant
            </p>
          </div>
          <Button to="/submit" variant="primary" size="md" className="!font-bold">
            New cohort
          </Button>
        </div>

        {/* KPI tiles */}
        <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4">
          {DASH_TILES.map((t, i) => (
            <Reveal key={t.label} delay={stagger(i)}>
              <Glass className="h-full rounded-[20px] p-5">
                <div className="text-[11px] font-bold uppercase tracking-[0.11em] text-[rgba(243,242,242,.45)]">
                  {t.label}
                </div>
                <div className="mt-2.5 flex items-baseline gap-2">
                  <span className="text-[30px] font-extrabold tracking-[-0.04em]">{t.value}</span>
                  <span className="text-[12px] font-semibold" style={{ color: t.deltaColor }}>
                    {t.delta}
                  </span>
                </div>
                <div className="mt-1 text-[12px] text-[var(--t-50)]">{t.note}</div>
              </Glass>
            </Reveal>
          ))}
        </div>

        {/* Cohort detail */}
        <Glass className="rounded-[24px] p-6 sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[rgba(243,242,242,.45)]">
                Cohort TK-4471
              </div>
              <div className="mt-[5px] font-mono text-[18px] font-extrabold tracking-[-0.03em] sm:text-[21px]">
                com.northbeam.trailkit
              </div>
              <div className="mt-[5px] text-[12.5px] text-[var(--t-50)]">
                Started 29 Jul · production eligible 12 Aug · 1 replacement used
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="quiet" size="sm">
                Message cohort
              </Button>
              <Button variant="quiet" size="sm">
                Export compliance PDF
              </Button>
            </div>
          </div>

          <div className="mt-6 grid items-start gap-6 xl:grid-cols-[1.6fr_1fr]">
            {/* Roster */}
            <div>
              <div className="grid grid-cols-[120px_1fr_54px] gap-3 px-1 pb-2.5 text-[10.5px] font-bold uppercase tracking-[0.11em] text-[var(--t-40)] sm:grid-cols-[150px_1fr_62px]">
                <span>Tester</span>
                <span>D1 → D14</span>
                <span className="text-right">Streak</span>
              </div>

              <div className="grid gap-0.5">
                {ROSTER.map((r) => (
                  <div
                    key={r.name}
                    className="grid grid-cols-[120px_1fr_54px] items-center gap-3 rounded-[9px] px-1 py-[7px] transition-colors hover:bg-white/[.05] sm:grid-cols-[150px_1fr_62px]"
                  >
                    <div className="flex min-w-0 items-center gap-2.5">
                      <Avatar gradient={r.av} size={22} />
                      <div className="min-w-0">
                        <div className="truncate text-[12.5px] font-semibold">{r.name}</div>
                        <div className="truncate text-[10.5px] text-[var(--t-40)]">{r.device}</div>
                      </div>
                    </div>
                    <DayStrip
                      days={r.days}
                      height={18}
                      gap={3}
                      radius={4}
                      label={`${r.name}: ${r.streak} streak`}
                    />
                    <div
                      className="text-right text-[12px] font-bold"
                      style={{ color: r.streakColor }}
                    >
                      {r.streak}
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend — the strip means nothing without it */}
              <div className="mt-4 flex flex-wrap gap-4 border-t border-white/[.09] pt-3.5 text-[11px] text-[var(--t-50)]">
                {DAY_LEGEND.map((l) => (
                  <span key={l.label} className="flex items-center gap-1.5">
                    <span
                      className="h-[11px] w-[11px] rounded-[3px]"
                      style={{ background: l.color }}
                    />
                    {l.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Side rail */}
            <div className="grid gap-3">
              <div className="glass-well rounded-[18px] p-5">
                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[rgba(243,242,242,.45)]">
                  Today's proof queue
                </div>
                <div className="mt-3.5 grid gap-2.5">
                  {PROOF_QUEUE.map((p) => (
                    <Link
                      key={p.name}
                      to="/task"
                      className="flex items-center gap-3 rounded-xl border border-white/[.09] bg-white/[.05] p-2.5 no-underline transition-colors hover:bg-white/10"
                    >
                      <div
                        className="h-11 w-[34px] flex-none rounded-md border border-white/[.16]"
                        style={{ background: p.thumb }}
                      />
                      <div className="min-w-0 flex-1">
                        <div className="text-[12.5px] font-semibold text-bone">{p.name}</div>
                        <div className="text-[11px] text-[var(--t-40)]">{p.time}</div>
                      </div>
                      <Badge bg={p.badgeBg} fg={p.badgeFg}>
                        {p.badge}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-[18px] border border-[rgba(255,98,71,.3)] bg-[rgba(255,98,71,.1)] p-5">
                <div className="flex items-center gap-2.5">
                  <TriangleAlert size={16} strokeWidth={2} className="text-flame-200" />
                  <span className="text-[13px] font-bold">1 slot at risk</span>
                </div>
                <p className="mt-2.5 text-[12.5px] leading-[1.55] text-[rgba(255,214,206,.9)]">
                  Priya S. has missed one day. One more and auto-replace triggers from the priority
                  pool — no action needed from you.
                </p>
              </div>
            </div>
          </div>
        </Glass>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <Glass
      as="aside"
      className="rounded-[22px] p-[18px] lg:sticky lg:top-[88px]"
      style={{ background: 'linear-gradient(170deg,rgba(255,255,255,.085),rgba(255,255,255,.03))' }}
    >
      <div className="px-1.5 pb-3 text-[10.5px] font-bold uppercase tracking-[0.13em] text-[var(--t-40)]">
        Workspace
      </div>

      <nav className="grid gap-[3px]">
        {SIDE_LINKS.map(({ label, to, icon: Icon, end }) => (
          <NavLink
            key={label}
            to={to}
            end={end}
            className={({ isActive }) =>
              cx(
                'flex items-center gap-[11px] rounded-xl px-3 py-[11px] text-[13.5px] no-underline transition-colors',
                isActive
                  ? 'border border-[rgba(255,98,71,.32)] bg-[rgba(236,48,19,.18)] font-semibold text-white'
                  : 'font-medium text-[var(--t-70)] hover:bg-white/[.07] hover:text-white'
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  size={16}
                  strokeWidth={1.9}
                  className={isActive ? 'text-flame-200' : undefined}
                />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="glass-well mt-[22px] rounded-2xl p-4">
        <div className="text-[10.5px] font-bold uppercase tracking-[0.11em] text-[var(--t-40)]">
          Point balance
        </div>
        <div className="mt-1.5 text-[28px] font-extrabold tracking-[-0.04em]">1,240</div>
        <div className="mt-0.5 text-[11.5px] text-[var(--t-50)]">8 slots fundable</div>
        <div className="mt-3 h-[5px] overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full"
            style={{ width: '74%', background: 'linear-gradient(90deg,#ff8a75,#dd2b0f)' }}
          />
        </div>
      </div>
    </Glass>
  )
}
