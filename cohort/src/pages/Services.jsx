import Reveal, { stagger } from '@/components/Reveal'
import { Button, Glass, IconTile, Section } from '@/components/primitives'
import { SERVICES } from '@/data/site'
import { iconFor } from '@/lib/icons'

export default function Services() {
  return (
    <>
      <Section className="pb-8 pt-16">
        <div className="kicker">Services</div>
        <h1 className="mt-4 max-w-[760px] text-[36px] font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-[46px] lg:text-[54px]">
          Four ways we get your build in front of real devices.
        </h1>
        <p className="mt-5 max-w-[600px] text-[16px] leading-[1.6] text-[var(--t-70)] sm:text-[17px]">
          Start with closed-testing compliance. Add the rest as your release grows teeth.
        </p>
      </Section>

      <Section tight className="grid gap-4">
        {SERVICES.map((s, i) => {
          const Icon = iconFor(s.icon)
          return (
            <Reveal key={s.title} delay={stagger(i)}>
              <Glass
                hover
                className="grid gap-8 rounded-[24px] p-7 sm:p-8 lg:grid-cols-[1fr_320px] lg:gap-9"
              >
                {/* Description side */}
                <div>
                  <div className="flex items-center gap-3.5">
                    <IconTile size={42} radius={13}>
                      <Icon size={19} strokeWidth={1.8} />
                    </IconTile>
                    <div>
                      <div className="text-[19px] font-extrabold tracking-[-0.03em] sm:text-[21px]">
                        {s.title}
                      </div>
                      <div className="mt-0.5 text-[12px] font-semibold text-flame-200">{s.tag}</div>
                    </div>
                  </div>

                  <p className="mt-[18px] max-w-[560px] text-[14.5px] leading-[1.6] text-pretty text-[var(--t-60)]">
                    {s.body}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.chips.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-white/[.13] bg-white/[.07] px-3 py-1.5 text-[12px] font-medium text-[rgba(243,242,242,.75)]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price side */}
                <div className="glass-well flex flex-col rounded-[18px] p-[22px]">
                  <div className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[rgba(243,242,242,.45)]">
                    {s.priceLabel}
                  </div>
                  <div className="mt-2 flex items-baseline gap-[7px]">
                    <span className="text-[32px] font-extrabold tracking-[-0.04em]">{s.price}</span>
                    <span className="text-[12.5px] text-[var(--t-50)]">{s.per}</span>
                  </div>
                  <p className="mt-2 flex-1 text-[12.5px] leading-[1.5] text-[var(--t-50)]">
                    {s.priceNote}
                  </p>
                  <Button to={s.to} variant="primary" size="md" className="mt-[18px] w-full">
                    {s.cta}
                  </Button>
                </div>
              </Glass>
            </Reveal>
          )
        })}
      </Section>

      {/* Closing poster */}
      <Section className="pb-[90px]">
        <Reveal>
          <div
            className="flex flex-wrap items-end justify-between gap-9 rounded-[26px] p-7 sm:p-10"
            style={{
              background: 'linear-gradient(140deg,#ec3013,#7c1405)',
              boxShadow: '0 26px 70px rgba(236,48,19,.32), 0 1px 0 rgba(255,255,255,.3) inset',
            }}
          >
            <div>
              <h2 className="max-w-[520px] text-[27px] font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-[34px]">
                Not sure which one you need?
              </h2>
              <p className="mt-3 max-w-[440px] text-[15px] text-white/85">
                Send us the package name. We will tell you honestly whether you need us at all.
              </p>
            </div>
            <Button to="/contact" variant="ink" size="lg">
              Talk to us
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
