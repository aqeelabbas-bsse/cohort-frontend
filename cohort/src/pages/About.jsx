import Reveal, { stagger } from '@/components/Reveal'
import { Avatar, Glass, IconTile, Section, StatRow } from '@/components/primitives'
import { ABOUT_STATS, MILESTONES, TEAM, VALUES } from '@/data/site'
import { iconFor } from '@/lib/icons'

export default function About() {
  return (
    <>
      {/* Masthead */}
      <Section className="pb-10 pt-16">
        <div className="kicker">About Cohort</div>
        <h1 className="mt-4 max-w-[820px] text-balance text-[36px] font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-[46px] lg:text-[56px]">
          We built the thing we needed at 2am, four days before a launch.
        </h1>
        <p className="mt-[22px] max-w-[640px] text-[16px] leading-[1.6] text-pretty text-[var(--t-70)] sm:text-[17.5px]">
          In November 2023 Google started requiring personal developer accounts to run a closed test
          with twelve testers for fourteen unbroken days. Overnight, shipping an Android app stopped
          being a technical problem and became a logistics problem. Cohort is the answer we wish had
          existed.
        </p>
      </Section>

      <Section tight>
        <StatRow items={ABOUT_STATS} />
      </Section>

      {/* Values */}
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-[28px] font-extrabold leading-[1.12] tracking-[-0.04em] sm:text-[34px]">
              What we hold to
            </h2>
            <p className="mt-4 text-[15px] leading-[1.6] text-[var(--t-60)]">
              Two-sided marketplaces rot when one side is treated as inventory. These are the rules
              we do not trade away for growth.
            </p>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2">
            {VALUES.map((v, i) => {
              const Icon = iconFor(v.icon)
              return (
                <Reveal key={v.title} delay={stagger(i)}>
                  <Glass
                    hover
                    className="h-full rounded-[22px] px-6 py-[26px] transition-transform hover:-translate-y-1"
                  >
                    <IconTile size={38} radius={12}>
                      <Icon size={18} strokeWidth={1.8} />
                    </IconTile>
                    <div className="mt-[18px] text-[17px] font-bold tracking-[-0.02em]">
                      {v.title}
                    </div>
                    <p className="mt-2 text-[13.5px] leading-[1.55] text-pretty text-[var(--t-60)]">
                      {v.body}
                    </p>
                  </Glass>
                </Reveal>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Timeline — the dates are the point, so they lead each row */}
      <Section>
        <h2 className="mb-8 text-[28px] font-extrabold tracking-[-0.04em] sm:text-[34px]">
          How we got here
        </h2>
        <ol className="grid">
          {MILESTONES.map((m, i) => (
            <Reveal
              as="li"
              key={m.when}
              delay={stagger(i)}
              className="grid grid-cols-[80px_20px_1fr] items-start gap-4 border-t border-white/10 py-5 sm:grid-cols-[110px_28px_1fr] sm:gap-5"
            >
              <div className="pt-0.5 font-mono text-[12px] text-flame-200 sm:text-[13px]">
                {m.when}
              </div>
              <div className="flex justify-center pt-[7px]">
                <span
                  className="h-[9px] w-[9px] rounded-full bg-flame-500"
                  style={{ boxShadow: '0 0 0 4px rgba(236,48,19,.2)' }}
                />
              </div>
              <div>
                <div className="text-[16.5px] font-bold tracking-[-0.02em]">{m.title}</div>
                <p className="mt-1.5 max-w-[640px] text-[13.5px] leading-[1.55] text-[var(--t-60)]">
                  {m.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Team */}
      <Section className="pb-[90px]">
        <h2 className="text-[28px] font-extrabold tracking-[-0.04em] sm:text-[34px]">The two of us</h2>
        <p className="mb-[30px] mt-2 text-[15px] text-[var(--t-60)]">
          Small on purpose. Everything you see was built by these two.
        </p>
        <div className="grid max-w-[760px] gap-4 sm:grid-cols-2">
          {TEAM.map((t, i) => (
            <Reveal key={t.name} delay={stagger(i)}>
              <Glass className="h-full rounded-[22px] p-[26px]">
                <Avatar
                  gradient={t.av}
                  size={64}
                  className="shadow-[0_6px_20px_rgba(0,0,0,.4)]"
                />
                <div className="mt-[18px] text-[18px] font-extrabold tracking-[-0.025em]">
                  {t.name}
                </div>
                <div className="mt-[3px] text-[12.5px] font-semibold text-flame-200">{t.role}</div>
                <p className="mt-3 text-[13.5px] leading-[1.55] text-[var(--t-60)]">{t.bio}</p>
              </Glass>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
