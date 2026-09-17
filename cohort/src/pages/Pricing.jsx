import { Check } from 'lucide-react'
import Reveal, { stagger } from '@/components/Reveal'
import { Button, Glass, Section, cx } from '@/components/primitives'
import { CHECKOUT_LINES, PLANS } from '@/data/app'

export default function Pricing() {
  return (
    <>
      <Section className="pb-6 pt-16">
        <div className="kicker">Pricing</div>
        <h1 className="mt-4 max-w-[640px] text-[36px] font-extrabold leading-[1.06] tracking-[-0.045em] sm:text-[46px]">
          Earn your cohort, or skip the queue entirely.
        </h1>
        <p className="mt-4 max-w-[560px] text-[15px] text-[var(--t-60)] sm:text-[16px]">
          Free accounts fund slots with points and wait behind paid ones. Paid plans draw from the
          priority pool — the testers, checks and evidence are identical.
        </p>
      </Section>

      {/* Plans */}
      <Section tight className="grid items-start gap-[18px] md:grid-cols-3">
        {PLANS.map((p, i) => (
          <Reveal key={p.name} delay={stagger(i)} className="h-full">
            <div
              className={cx(
                'relative h-full rounded-[24px] border px-[26px] py-[30px]',
                p.featured ? 'border-[rgba(255,98,71,.42)]' : 'border-white/[.11]'
              )}
              style={{
                background: p.featured
                  ? 'linear-gradient(150deg,rgba(236,48,19,.24),rgba(255,255,255,.035))'
                  : 'linear-gradient(155deg,rgba(255,255,255,.075),rgba(255,255,255,.025))',
                backdropFilter: 'blur(28px) saturate(155%)',
                WebkitBackdropFilter: 'blur(28px) saturate(155%)',
                boxShadow: p.featured
                  ? '0 1px 0 rgba(255,255,255,.22) inset, 0 26px 60px rgba(236,48,19,.22)'
                  : '0 1px 0 rgba(255,255,255,.14) inset',
              }}
            >
              {p.featured && (
                <span className="absolute -top-[11px] left-[26px] rounded-full border border-white/20 bg-ink-900 px-[11px] py-[5px] text-[10px] font-extrabold uppercase tracking-[0.1em] text-flame-200">
                  Most chosen
                </span>
              )}

              <div
                className={cx(
                  'text-[13px] font-extrabold uppercase tracking-[0.04em]',
                  p.featured ? 'text-flame-200' : 'text-[var(--t-60)]'
                )}
              >
                {p.name}
              </div>

              <div className="mt-4 flex items-baseline gap-[7px]">
                <span className="text-[40px] font-extrabold tracking-[-0.05em] sm:text-[44px]">
                  {p.price}
                </span>
                <span className="text-[13.5px] text-[var(--t-50)]">{p.per}</span>
              </div>

              <p className="mt-2 min-h-[38px] text-[13px] leading-[1.5] text-[var(--t-60)]">
                {p.blurb}
              </p>

              <Button
                to={p.name === 'Studio' ? '/contact' : '/signup'}
                variant={p.featured ? 'primary' : 'glass'}
                size="md"
                className="mt-5 w-full"
              >
                {p.cta}
              </Button>

              <hr className="my-6 border-0 border-t border-white/10" />

              <ul className="grid gap-[11px]">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-[11px]">
                    <Check
                      size={15}
                      strokeWidth={2.6}
                      className="mt-0.5 flex-none text-flame-200"
                    />
                    <span className="text-[13px] leading-[1.5] text-[rgba(243,242,242,.75)]">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </Section>

      {/* Checkout */}
      <Section className="pb-[90px]">
        <Reveal>
          <Glass className="grid items-start gap-9 rounded-[24px] p-7 sm:p-[30px] lg:grid-cols-[1fr_.62fr]">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[rgba(243,242,242,.45)]">
                Checkout
              </div>
              <h2 className="mt-3 text-[24px] font-extrabold tracking-[-0.03em]">
                Pro · one cohort of 12
              </h2>

              <div className="mt-6 grid max-w-[460px] gap-4">
                <div>
                  <label className="field-label" htmlFor="card">
                    Card number
                  </label>
                  <input
                    id="card"
                    className="field-input is-mono"
                    defaultValue="4242 4242 4242 4242"
                    inputMode="numeric"
                    autoComplete="cc-number"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3.5">
                  <div>
                    <label className="field-label" htmlFor="exp">
                      Expiry
                    </label>
                    <input
                      id="exp"
                      className="field-input is-mono"
                      defaultValue="09 / 29"
                      autoComplete="cc-exp"
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="cvc">
                      CVC
                    </label>
                    <input
                      id="cvc"
                      className="field-input is-mono"
                      defaultValue="411"
                      autoComplete="cc-csc"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-well rounded-[20px] p-6">
              <dl className="grid gap-3 text-[13.5px]">
                {CHECKOUT_LINES.map((l) => (
                  <div key={l.label} className="flex justify-between">
                    <dt className="text-[var(--t-60)]">{l.label}</dt>
                    <dd className="font-bold" style={{ color: l.tone }}>
                      {l.value}
                    </dd>
                  </div>
                ))}
                <div className="h-px bg-white/10" />
                <div className="flex items-baseline justify-between">
                  <dt className="text-[var(--t-60)]">Due today</dt>
                  <dd className="text-[26px] font-extrabold tracking-[-0.035em]">$44.60</dd>
                </div>
              </dl>

              <Button to="/dashboard" variant="primary" size="lg" className="mt-5 w-full">
                Pay and start day 1
              </Button>
              <p className="mt-3.5 text-[11.5px] leading-[1.55] text-[var(--t-40)]">
                Full refund if we cannot fill 12 compliant slots within 72 hours.
              </p>
            </div>
          </Glass>
        </Reveal>
      </Section>
    </>
  )
}
