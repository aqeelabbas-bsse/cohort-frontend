import { Link } from 'react-router-dom'
import Reveal, { stagger } from '@/components/Reveal'
import { Button, DayStrip, Glass, Section } from '@/components/primitives'
import { MY_TASKS, OPEN_APPS } from '@/data/app'

export default function Testers() {
  return (
    <Section className="grid items-start gap-6 pb-[90px] pt-12 lg:grid-cols-[1fr_.62fr]">
      {/* Open slots */}
      <div>
        <div className="kicker">Tester portal</div>
        <h1 className="mt-3 text-[30px] font-extrabold tracking-[-0.04em] sm:text-[38px]">
          Six apps need you today
        </h1>
        <p className="mt-2.5 max-w-[520px] text-[14.5px] text-[var(--t-60)]">
          Claim a slot, open the app once a day for 14 days, and bank 10 points per verified day.
        </p>

        <div className="mt-[30px] grid gap-3">
          {OPEN_APPS.map((a, i) => (
            <Reveal key={a.name} delay={stagger(i)}>
              <Glass
                hover
                className="flex flex-wrap items-center gap-4 rounded-[20px] px-5 py-[18px] sm:flex-nowrap sm:gap-[18px]"
              >
                <div
                  className="h-[46px] w-[46px] flex-none rounded-[14px]"
                  style={{ background: a.icon, boxShadow: '0 4px 14px rgba(0,0,0,.4)' }}
                />

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[15.5px] font-bold tracking-[-0.02em]">{a.name}</span>
                    <span className="rounded-full bg-white/[.09] px-2 py-[3px] text-[10px] font-bold uppercase tracking-[0.05em] text-[var(--t-70)]">
                      {a.cat}
                    </span>
                  </div>
                  <div className="mt-1 text-[12.5px] text-[rgba(243,242,242,.52)]">{a.task}</div>
                </div>

                <div className="flex-none text-right">
                  <div className="text-[17px] font-extrabold tracking-[-0.02em] text-flame-200">
                    {a.pts}
                  </div>
                  <div className="text-[10.5px] text-[var(--t-40)]">{a.slots}</div>
                </div>

                <Button to="/task" variant="primary" size="sm" className="!font-bold">
                  Claim slot
                </Button>
              </Glass>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Sticky rail */}
      <div className="grid gap-4 lg:sticky lg:top-[88px]">
        {/* Points — the reason a tester is here at all, so it leads */}
        <div
          className="rounded-[22px] border p-[26px]"
          style={{
            background: 'linear-gradient(150deg,rgba(236,48,19,.22),rgba(255,255,255,.03))',
            borderColor: 'rgba(255,98,71,.3)',
            backdropFilter: 'blur(28px) saturate(155%)',
            WebkitBackdropFilter: 'blur(28px) saturate(155%)',
            boxShadow: '0 1px 0 rgba(255,255,255,.2) inset, 0 24px 56px rgba(0,0,0,.45)',
          }}
        >
          <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[rgba(255,196,184,.8)]">
            Your points
          </div>
          <div className="mt-2 text-[44px] font-extrabold leading-none tracking-[-0.045em]">
            1,240
          </div>
          <div className="mt-1 text-[12.5px] text-[rgba(255,214,206,.85)]">
            = 8 tester slots · 440 to a full cohort
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-black/35">
            <div
              className="h-full rounded-full"
              style={{ width: '74%', background: 'linear-gradient(90deg,#ffc4b8,#ff563c)' }}
            />
          </div>
          <Button
            to="/submit"
            size="md"
            className="mt-[18px] w-full !bg-white !text-ink-900 hover:!bg-[#ffe0d9]"
          >
            Spend on my app
          </Button>
        </div>

        {/* Active commitments */}
        <div className="rounded-[20px] border border-white/10 bg-white/[.05] p-[22px] backdrop-blur-xl">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[rgba(243,242,242,.45)]">
            Active commitments
          </div>
          <div className="mt-4 grid gap-3">
            {MY_TASKS.map((m) => (
              <Link key={m.name} to="/task" className="block no-underline">
                <div className="flex items-center gap-2.5">
                  <div
                    className="h-[26px] w-[26px] flex-none rounded-lg"
                    style={{ background: m.icon }}
                  />
                  <span className="flex-1 text-[13px] font-semibold text-bone">{m.name}</span>
                  <span className="text-[11.5px] font-bold" style={{ color: m.color }}>
                    {m.state}
                  </span>
                </div>
                <div className="mt-2">
                  <DayStrip
                    days={m.days}
                    height={8}
                    gap={3}
                    radius={3}
                    label={`${m.name}: ${m.state}`}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Standing */}
        <div className="rounded-[20px] border border-white/10 bg-white/[.05] p-[22px] backdrop-blur-xl">
          <div className="text-[13px] font-bold">Tester standing: Gold</div>
          <p className="mt-2.5 text-[12.5px] leading-[1.55] text-[var(--t-50)]">
            98% proof acceptance over 6 cohorts. Gold testers see new apps 12 hours before everyone
            else.
          </p>
        </div>
      </div>
    </Section>
  )
}
