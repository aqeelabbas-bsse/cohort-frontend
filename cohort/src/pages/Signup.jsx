import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, CirclePlus } from 'lucide-react'
import { Glass, Section, cx } from '@/components/primitives'
import { SIGNUP_PROMISES } from '@/data/content'

/**
 * Signup.
 *
 * The role toggle is the whole screen: a developer needs a Play Console
 * developer ID, a tester needs the Play account they will opt in with. Rather
 * than two separate forms, one field swaps — which keeps the two audiences on
 * the same page and makes the difference between them explicit.
 */
export default function Signup() {
  const [role, setRole] = useState('dev')
  const [email, setEmail] = useState('marta@northbeam.dev')
  const navigate = useNavigate()

  const isDev = role === 'dev'

  const thirdField = isDev
    ? { label: 'Play Console developer ID', value: '7734829105620014471' }
    : { label: 'Play account email (for opt-in)', value: 'marta.tests@gmail.com' }

  const submit = (e) => {
    e.preventDefault()
    navigate(isDev ? '/dashboard' : '/testers')
  }

  return (
    <Section className="grid items-center gap-12 pb-[90px] pt-16 lg:grid-cols-[1fr_.9fr] lg:gap-16">
      {/* Promise column */}
      <div>
        <div className="kicker">Create your account</div>
        <h1 className="mt-3.5 text-[34px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[42px] lg:text-[48px]">
          Two weeks from now,
          <br />
          you are on production.
        </h1>

        <ul className="mt-[34px] grid max-w-[440px] gap-3.5">
          {SIGNUP_PROMISES.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-[22px] w-[22px] flex-none place-items-center rounded-[7px] border border-[rgba(143,215,176,.4)] bg-[rgba(143,215,176,.18)]">
                <Check size={12} strokeWidth={3} className="text-mint" />
              </span>
              <span className="text-[14px] leading-[1.5] text-[var(--t-70)]">{p}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Form column */}
      <Glass weight="strong" as="form" onSubmit={submit} className="rounded-[24px] p-7 sm:p-8">
        {/* Role toggle */}
        <div
          className="grid grid-cols-2 gap-1.5 rounded-[14px] border border-white/[.08] p-[5px]"
          style={{ background: 'rgba(0,0,0,.32)' }}
          role="tablist"
          aria-label="Account type"
        >
          {[
            ['dev', 'I need testers'],
            ['tester', 'I want to test'],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={role === key}
              onClick={() => setRole(key)}
              className={cx(
                'rounded-[10px] p-[11px] text-[13.5px] font-bold transition-colors',
                role === key ? 'text-white' : 'text-[var(--t-60)] hover:text-white'
              )}
              style={
                role === key
                  ? { background: 'linear-gradient(150deg,#ff6247,#dd2b0f)' }
                  : undefined
              }
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-4">
          <div>
            <label className="field-label" htmlFor="su-email">
              Work email
            </label>
            <input
              id="su-email"
              type="email"
              autoComplete="email"
              className="field-input"
              placeholder="you@studio.dev"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="field-label" htmlFor="su-pw">
              Password
            </label>
            <input
              id="su-pw"
              type="password"
              autoComplete="new-password"
              className="field-input"
              defaultValue="hunter22reallytho"
            />
          </div>

          {/* The one field that depends on who you are. `key` forces a remount
              so the swapped default value actually takes effect. */}
          <div key={role}>
            <label className="field-label" htmlFor="su-third">
              {thirdField.label}
            </label>
            <input id="su-third" className="field-input is-mono" defaultValue={thirdField.value} />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-6 w-full rounded-[14px] py-[15px] text-[15px] font-bold"
        >
          {isDev ? 'Create workspace' : 'Join the tester pool'}
        </button>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-[11px] text-[var(--t-40)]">OR</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <button
          type="submit"
          className="btn btn-glass w-full rounded-[14px] py-3.5 text-[14px] font-semibold"
        >
          <CirclePlus size={17} strokeWidth={1.8} />
          Continue with Google Play Console
        </button>

        <p className="mt-5 text-[11.5px] leading-[1.55] text-[var(--t-40)]">
          By continuing you agree that testing activity is logged for compliance evidence. Cohort is
          not affiliated with Google LLC.
        </p>
      </Glass>
    </Section>
  )
}
