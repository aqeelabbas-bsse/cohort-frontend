import { Check } from 'lucide-react'
import Reveal, { stagger } from '@/components/Reveal'
import { Button, Glass, Section } from '@/components/primitives'
import { NEVER_DO, PROCESS_STEPS } from '@/data/site'

export default function Process() {
  return (
    <>
      <Section className="pb-6 pt-16">
        <div className="kicker">Process</div>
        <h1 className="mt-4 max-w-[740px] text-[36px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[46px] lg:text-[54px]">
          Day zero to production access, hour by hour.
        </h1>
        <p className="mt-5 max-w-[600px] text-[16px] leading-[1.6] text-[var(--t-70)] sm:text-[17px]">
          Nothing here is manual on your side after step two. The timings below are medians across
          the last 500 cohorts.
        </p>
      </Section>

      <Section className="grid items-start gap-9 pb-[72px] lg:grid-cols-[1fr_340px]">
        {/* The sequence. Numbers earn their place — these steps are ordered. */}
        <ol className="grid">
          {PROCESS_STEPS.map((p, i) => (
            <Reveal
              as="li"
              key={p.n}
              delay={stagger(i)}
              className="grid grid-cols-[44px_1fr] gap-5 border-t border-white/10 py-[26px] sm:grid-cols-[52px_1fr] sm:gap-6"
            >
              <div className="flex flex-col items-center gap-2.5">
                <div className="grid h-11 w-11 flex-none place-items-center rounded-[14px] border border-[rgba(255,98,71,.34)] bg-[rgba(236,48,19,.16)] text-[15px] font-extrabold text-flame-200">
                  {p.n}
                </div>
                {/* Connector — fades out, so the last step doesn't dangle */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div
                    className="w-0.5 flex-1"
                    style={{
                      background: 'linear-gradient(180deg,rgba(255,98,71,.4),transparent)',
                    }}
                  />
                )}
              </div>

              <div className="pt-1">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-[19px] font-extrabold tracking-[-0.03em] sm:text-[21px]">
                    {p.title}
                  </span>
                  <span className="rounded-full border border-white/[.13] bg-white/[.07] px-2.5 py-1 font-mono text-[11px] text-mint">
                    {p.when}
                  </span>
                </div>
                <p className="mt-3 max-w-[620px] text-[14.5px] leading-[1.6] text-pretty text-[var(--t-60)]">
                  {p.body}
                </p>
                <div className="mt-3.5 flex items-center gap-2 text-[12.5px] text-[var(--t-50)]">
                  <Check size={14} strokeWidth={2.4} className="text-mint" />
                  {p.who}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* Sticky summary rail */}
        <div className="grid gap-3.5 lg:sticky lg:top-24">
          <div
            className="rounded-[22px] border p-[26px]"
            style={{
              background: 'linear-gradient(150deg,rgba(236,48,19,.2),rgba(255,255,255,.03))',
              borderColor: 'rgba(255,98,71,.3)',
              backdropFilter: 'blur(28px) saturate(155%)',
              WebkitBackdropFilter: 'blur(28px) saturate(155%)',
              boxShadow: '0 1px 0 rgba(255,255,255,.2) inset',
            }}
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[rgba(255,196,184,.8)]">
              Total elapsed
            </div>
            <div className="mt-2 text-[40px] font-extrabold leading-none tracking-[-0.045em]">
              15 days
            </div>
            <div className="mt-[5px] text-[12.5px] text-[rgba(255,214,206,.85)]">
              1 day to fill on Pro, 14 to satisfy Play, same-hour export
            </div>
            <Button
              to="/submit"
              size="md"
              className="mt-[18px] w-full !bg-white !text-ink-900 hover:!bg-[#ffe0d9]"
            >
              Start step one
            </Button>
          </div>

          <Glass className="rounded-[20px] p-[22px]">
            <div className="mb-2.5 text-[13px] font-bold">What we never do</div>
            <ul className="grid gap-2.5 text-[12.5px] leading-[1.5] text-[var(--t-60)]">
              {NEVER_DO.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </Glass>
        </div>
      </Section>
    </>
  )
}
