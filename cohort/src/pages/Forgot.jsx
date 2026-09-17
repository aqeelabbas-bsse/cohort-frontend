import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Lock, Mail } from 'lucide-react'
import { Button, Glass, IconTile } from '@/components/primitives'

export default function Forgot() {
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState('marta@northbeam.dev')

  return (
    <div className="mx-auto w-full max-w-[520px] px-5 pb-28 pt-20 sm:px-8 sm:pt-24">
      <Glass weight="strong" className="rounded-[24px] p-7 sm:p-[34px]">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="sent"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
              className="py-2.5 text-center"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[rgba(143,215,176,.4)] bg-[rgba(143,215,176,.16)]">
                <Mail size={26} strokeWidth={2} className="text-mint" />
              </div>
              <h1 className="mt-5 text-[22px] font-extrabold tracking-[-0.03em]">
                Check your inbox
              </h1>
              <p className="mx-auto mt-3 max-w-[340px] text-[13.5px] leading-[1.6] text-[var(--t-60)]">
                We sent a reset link to{' '}
                <span className="font-semibold text-flame-200">{email}</span>. It expires in 30
                minutes and can be used once.
              </p>

              <Button to="/login" variant="primary" size="md" className="mt-[26px] w-full">
                Back to log in
              </Button>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-3.5 text-[12.5px] text-[var(--t-50)] hover:text-white"
              >
                Didn't arrive? Send again
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <IconTile size={44} radius={14}>
                <Lock size={20} strokeWidth={1.9} />
              </IconTile>

              <h1 className="mt-[22px] text-[26px] font-extrabold leading-[1.1] tracking-[-0.035em] sm:text-[30px]">
                Reset your password
              </h1>
              <p className="mt-3 text-[14px] leading-[1.6] text-[var(--t-60)]">
                Enter the email on your Cohort account. If a live cohort is attached to it, the
                counter is unaffected by a reset.
              </p>

              <div className="mt-6">
                <label className="field-label" htmlFor="fp-email">
                  Email
                </label>
                <input
                  id="fp-email"
                  type="email"
                  autoComplete="email"
                  className="field-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary mt-[22px] w-full rounded-[14px] py-[15px] text-[15px] font-bold"
              >
                Send reset link
              </button>

              <p className="mt-5 text-center text-[13px] text-[var(--t-50)]">
                Remembered it?{' '}
                <Link to="/login" className="font-bold text-flame-200 no-underline">
                  Back to log in
                </Link>
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </Glass>
    </div>
  )
}
