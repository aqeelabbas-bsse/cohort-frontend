import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Minus, Plus } from 'lucide-react'
import { Button, Glass, Section } from '@/components/primitives'

const POINTS_PER_SLOT = 140
const BALANCE = 1240
const MIN = 12
const MAX = 20

export default function Submit() {
  const [size, setSize] = useState(14)

  // Everything below is derived from `size` on each render. No effects, no
  // duplicated state — the arithmetic is cheap and always correct.
  const pointsDue = size * POINTS_PER_SLOT
  const shortfall = pointsDue - BALANCE
  const covered = shortfall <= 0
  const spares = size - MIN

  const shortfallNote = covered
    ? 'Covered by your balance. The cohort enters the free queue and typically fills within 31 hours.'
    : `Short by ${shortfall.toLocaleString()} points. Test ${Math.ceil(shortfall / 10)} more days, or pay $49 on Pro and start tonight.`

  return (
    <Section className="pb-[90px] pt-12">
      <nav className="mb-5 flex items-center gap-2.5 text-[12.5px] text-[var(--t-40)]">
        <Link to="/dashboard" className="text-inherit no-underline hover:text-white">
          Dashboard
        </Link>
        <span>/</span>
        <span className="text-[var(--t-80)]">New cohort</span>
      </nav>

      <h1 className="text-[32px] font-extrabold tracking-[-0.04em] sm:text-[40px]">
        Submit an app for testing
      </h1>
      <p className="mt-3 max-w-[560px] text-[15px] text-[var(--t-60)]">
        Three fields and a cohort size. We validate the closed track before a single slot is charged.
      </p>

      <div className="mt-9 grid items-start gap-6 lg:grid-cols-[1.35fr_.65fr]">
        {/* Form */}
        <Glass className="rounded-[24px] p-7 sm:p-[30px]">
          <div className="grid gap-5">
            <div>
              <label className="field-label" htmlFor="pkg">
                Package name
              </label>
              <input id="pkg" className="field-input is-mono" defaultValue="com.northbeam.trailkit" />
            </div>

            <div>
              <label className="field-label" htmlFor="optin">
                Closed testing opt-in URL
              </label>
              <input
                id="optin"
                className="field-input is-mono !text-[13px]"
                defaultValue="https://play.google.com/apps/testing/com.northbeam.trailkit"
              />
            </div>

            {/* Validation result — the reassurance that nothing is charged blind */}
            <div className="flex items-center gap-2.5 rounded-xl border border-[rgba(143,215,176,.3)] bg-[rgba(143,215,176,.1)] px-3.5 py-3">
              <Check size={15} strokeWidth={2.4} className="flex-none text-mint" />
              <span className="text-[12.5px] text-mint">
                Track verified · open for testers · min SDK 26 · 34.2 MB
              </span>
            </div>

            <div>
              <label className="field-label" htmlFor="task">
                What should testers do each day?
              </label>
              <textarea
                id="task"
                rows={3}
                className="field-input resize-y !text-[14px]"
                defaultValue="Open the app, log one trail entry, and screenshot the summary card."
              />
            </div>

            {/* Cohort sizer */}
            <div>
              <div className="mb-3 flex items-baseline justify-between">
                <span className="field-label !mb-0">Cohort size</span>
                <span className="text-[12px] text-[var(--t-40)]">12 is Play's minimum</span>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setSize((s) => Math.max(MIN, s - 1))}
                  disabled={size <= MIN}
                  aria-label="Remove a tester slot"
                  className="grid h-[42px] w-[42px] place-items-center rounded-[13px] border border-white/[.14] bg-white/[.07] transition-colors hover:bg-white/[.13] disabled:opacity-40"
                >
                  <Minus size={18} />
                </button>

                <div className="flex-1 text-center">
                  <div
                    className="text-[38px] font-extrabold leading-none tracking-[-0.04em]"
                    aria-live="polite"
                  >
                    {size}
                  </div>
                  <div className="mt-1 text-[11.5px] text-[var(--t-50)]">
                    {spares > 0 ? `${spares} spare slots` : 'no spares — risky'}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSize((s) => Math.min(MAX, s + 1))}
                  disabled={size >= MAX}
                  aria-label="Add a tester slot"
                  className="grid h-[42px] w-[42px] place-items-center rounded-[13px] border border-white/[.14] bg-white/[.07] transition-colors hover:bg-white/[.13] disabled:opacity-40"
                >
                  <Plus size={18} />
                </button>
              </div>

              {/* Eighteen cells: the first twelve are what Play demands, the rest
                  are the buffer you chose. */}
              <div
                className="mt-[18px] grid gap-[5px]"
                style={{ gridTemplateColumns: 'repeat(18, 1fr)' }}
                role="img"
                aria-label={`${size} slots provisioned, ${MIN} required`}
              >
                {Array.from({ length: 18 }, (_, i) => (
                  <div
                    key={i}
                    className="h-[26px] rounded-md border transition-colors"
                    style={{
                      background:
                        i < MIN
                          ? 'rgba(236,48,19,.55)'
                          : i < size
                            ? 'rgba(255,255,255,.16)'
                            : 'transparent',
                      borderColor: i < size ? 'rgba(255,255,255,.22)' : 'rgba(255,255,255,.08)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Glass>

        {/* Order summary */}
        <div className="grid gap-4">
          <Glass className="rounded-[22px] p-[26px]">
            <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[rgba(243,242,242,.45)]">
              Order summary
            </div>

            <dl className="mt-[18px] grid gap-3 text-[13.5px]">
              <Row label="Tester slots" value={size} />
              <Row label="Points per slot" value={POINTS_PER_SLOT} />
              <Row label="Duration" value="14 days" />
              <div className="h-px bg-white/10" />
              <div className="flex items-baseline justify-between">
                <dt className="text-[var(--t-60)]">Points due</dt>
                <dd className="text-[24px] font-extrabold tracking-[-0.03em]">
                  {pointsDue.toLocaleString()}
                </dd>
              </div>
              <Row
                label="Your balance"
                value={BALANCE.toLocaleString()}
                tone={covered ? '#a8e6c4' : '#ffb4a3'}
              />
            </dl>

            <p
              className="mt-[18px] rounded-[14px] border border-[rgba(255,98,71,.28)] bg-[rgba(255,98,71,.1)] p-3.5 text-[12.5px] leading-[1.5] text-[rgba(255,196,184,.95)]"
              aria-live="polite"
            >
              {shortfallNote}
            </p>

            <Button to="/dashboard" variant="primary" size="md" className="mt-4 w-full">
              Launch cohort
            </Button>
            <Button to="/pricing" variant="quiet" size="md" className="mt-2.5 w-full">
              Pay with card instead
            </Button>
          </Glass>

          <div className="rounded-[20px] border border-white/10 bg-white/[.045] p-[22px] backdrop-blur-xl">
            <div className="mb-2.5 text-[13px] font-bold">Free accounts are queued</div>
            <p className="text-[12.5px] leading-[1.55] text-[var(--t-50)]">
              Point-funded cohorts fill after paid ones. Current wait for the free queue is about 31
              hours; Pro fills in under 6.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Row({ label, value, tone }) {
  return (
    <div className="flex justify-between">
      <dt className="text-[var(--t-60)]">{label}</dt>
      <dd className="font-bold" style={{ color: tone }}>
        {value}
      </dd>
    </div>
  )
}
