import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Check, CirclePlus } from 'lucide-react'
import { Glass, Section, cx } from '@/components/primitives'

const SINCE_LAST = [
  { label: 'Proofs verified', value: '24', tone: '#a8e6c4' },
  { label: 'Testers auto-replaced', value: '1' },
  { label: 'Days remaining', value: '5' },
]

export default function Login() {
  const [remember, setRemember] = useState(true)
  const navigate = useNavigate()

  return (
    <Section className="grid items-center gap-12 pb-24 pt-16 lg:grid-cols-[1fr_.82fr] lg:gap-16 lg:pt-[78px]">
      <div>
        <div className="kicker">Welcome back</div>
        <h1 className="mt-4 text-[34px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[44px] lg:text-[52px]">
          Your counter kept running while you were gone.
        </h1>

        {/* Not decoration — this is the reason to log in. */}
        <Glass className="mt-[34px] max-w-[420px] rounded-[20px] p-6">
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[rgba(243,242,242,.45)]">
            Since your last login
          </div>
          <dl className="mt-3.5 grid gap-[11px] text-[13.5px]">
            {SINCE_LAST.map((s) => (
              <div key={s.label} className="flex justify-between">
                <dt className="text-[rgba(243,242,242,.65)]">{s.label}</dt>
                <dd className="font-bold" style={{ color: s.tone }}>
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Glass>
      </div>

      <Glass
        weight="strong"
        as="form"
        className="rounded-[24px] p-7 sm:p-8"
        onSubmit={(e) => {
          e.preventDefault()
          navigate('/dashboard')
        }}
      >
        <h2 className="text-[22px] font-extrabold tracking-[-0.03em]">Log in</h2>

        <div className="mt-[22px] grid gap-4">
          <div>
            <label className="field-label" htmlFor="li-email">
              Email
            </label>
            <input
              id="li-email"
              type="email"
              autoComplete="email"
              className="field-input"
              defaultValue="marta@northbeam.dev"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="field-label !mb-0" htmlFor="li-pw">
                Password
              </label>
              <Link to="/forgot" className="text-[12px] font-semibold text-flame-200 no-underline">
                Forgot?
              </Link>
            </div>
            <input
              id="li-pw"
              type="password"
              autoComplete="current-password"
              className="field-input"
              defaultValue="hunter22reallytho"
            />
          </div>

          {/* Real checkbox, visually replaced — keeps keyboard and SR support */}
          <label className="flex cursor-pointer items-center gap-2.5">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={remember}
              onChange={() => setRemember((v) => !v)}
            />
            <span
              className={cx(
                'grid h-5 w-5 place-items-center rounded-md border transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-flame-500',
                remember ? 'border-[rgba(255,98,71,.5)]' : 'border-white/[.16] bg-black/[.34]'
              )}
              style={
                remember ? { background: 'linear-gradient(150deg,#ff6247,#dd2b0f)' } : undefined
              }
            >
              <Check
                size={12}
                strokeWidth={3}
                className={cx('text-white transition-opacity', remember ? 'opacity-100' : 'opacity-0')}
              />
            </span>
            <span className="text-[13px] text-[var(--t-70)]">
              Keep me signed in on this device
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-6 w-full rounded-[14px] py-[15px] text-[15px] font-bold"
        >
          Log in
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

        <p className="mt-[22px] text-center text-[13px] text-[var(--t-50)]">
          New here?{' '}
          <Link to="/signup" className="font-bold text-flame-200 no-underline">
            Create an account
          </Link>
        </p>
      </Glass>
    </Section>
  )
}
