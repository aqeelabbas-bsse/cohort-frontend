import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Reveal, { stagger } from '@/components/Reveal'
import { Button, Chip, Glass, IconTile, Section } from '@/components/primitives'
import { CONTACT_METHODS, CONTACT_TOPICS, SUPPORT_HOURS } from '@/data/site'
import { iconFor } from '@/lib/icons'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [topic, setTopic] = useState(CONTACT_TOPICS[0])

  return (
    <Section className="grid items-start gap-10 pb-[90px] pt-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-12">
      {/* Left: how to reach us */}
      <div>
        <div className="kicker">Contact</div>
        <h1 className="mt-4 max-w-[520px] text-[34px] font-extrabold leading-[1.06] tracking-[-0.045em] sm:text-[44px] lg:text-[50px]">
          Two people read every message.
        </h1>
        <p className="mt-4 max-w-[500px] text-[15.5px] leading-[1.6] text-[var(--t-70)] sm:text-[16.5px]">
          No ticket queue, no bot. If it is urgent and your cohort is live, mark it below and we will
          jump it.
        </p>

        <div className="mt-9 grid max-w-[520px] gap-3">
          {CONTACT_METHODS.map((c, i) => {
            const Icon = iconFor(c.icon)
            return (
              <Reveal key={c.title} delay={stagger(i)}>
                <Glass hover className="flex items-center gap-4 rounded-[18px] p-5">
                  <IconTile size={40} radius={13}>
                    <Icon size={18} strokeWidth={1.8} />
                  </IconTile>
                  <div className="min-w-0 flex-1">
                    <div className="text-[14.5px] font-bold">{c.title}</div>
                    <div className="mt-[3px] text-[12.5px] text-[var(--t-50)]">{c.body}</div>
                  </div>
                  <div className="whitespace-nowrap font-mono text-[12px] text-mint">{c.sla}</div>
                </Glass>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-[30px] max-w-[520px] rounded-[18px] border border-white/10 bg-white/[.045] p-[22px]">
          <div className="mb-2.5 text-[13px] font-bold">Support hours</div>
          <dl className="grid gap-2 text-[12.5px] text-[var(--t-60)]">
            {SUPPORT_HOURS.map((h) => (
              <div key={h.label} className="flex justify-between gap-4">
                <dt>{h.label}</dt>
                <dd className="whitespace-nowrap font-mono" style={{ color: h.tone }}>
                  {h.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Right: the form */}
      <Glass weight="strong" className="rounded-[24px] p-7 sm:p-8">
        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="sent"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
              className="py-5 text-center"
            >
              <div className="mx-auto grid h-[54px] w-[54px] place-items-center rounded-full border border-[rgba(143,215,176,.4)] bg-[rgba(143,215,176,.16)]">
                <Check size={26} strokeWidth={2.6} className="text-mint" />
              </div>
              <div className="mt-[18px] text-[20px] font-extrabold tracking-[-0.03em]">
                Message received
              </div>
              <p className="mx-auto mt-2.5 max-w-[320px] text-[13.5px] leading-[1.55] text-[var(--t-60)]">
                We reply from a real inbox, usually within four hours during support hours.
              </p>
              <Button
                variant="quiet"
                size="md"
                onClick={() => setSent(false)}
                className="mx-auto mt-[22px]"
              >
                Send another
              </Button>
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
              <div className="text-[11px] font-bold uppercase tracking-[0.13em] text-[rgba(243,242,242,.45)]">
                Send a message
              </div>

              <div className="mt-5 grid gap-4">
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <div>
                    <label className="field-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      className="field-input"
                      defaultValue="Marta Beier"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="field-input"
                      defaultValue="marta@northbeam.dev"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className="field-label">What is this about</legend>
                  <div className="grid grid-cols-2 gap-[7px]">
                    {CONTACT_TOPICS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTopic(t)}
                        aria-pressed={topic === t}
                        className="chip !justify-center !rounded-[11px] !px-3 !py-[11px] text-center !text-[12.5px]"
                        data-on={topic === t}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label className="field-label" htmlFor="pkg">
                    Package name (optional)
                  </label>
                  <input
                    id="pkg"
                    className="field-input is-mono"
                    defaultValue="com.northbeam.trailkit"
                  />
                </div>

                <div>
                  <label className="field-label" htmlFor="msg">
                    Message
                  </label>
                  <textarea
                    id="msg"
                    rows={4}
                    className="field-input resize-y !text-[14px]"
                    defaultValue="Day 9 of my cohort and one tester has gone quiet. Does the auto-replacement reset my counter?"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary mt-[22px] w-full rounded-[14px] py-[15px] text-[15px] font-bold">
                Send message
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </Glass>
    </Section>
  )
}
