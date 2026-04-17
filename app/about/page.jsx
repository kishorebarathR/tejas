import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutTimeline, expertise, metrics, standards, values } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Tejas Maritime"
        title="Since 2009, growing with the needs of serious maritime clients."
        description="Tejas Maritime Pvt Ltd is positioned as a reliable, technically grounded partner for ship management, engineering support, surveys, and marine consultancy across demanding operational contexts."
        image="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="container-shell py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Company Story"
              title="Built from technical credibility, expanded through client trust."
              description="The company story is framed around long-term marine execution, responsiveness, and the ability to support both strategic decisions and field-level realities."
            />
            <div className="mt-10 space-y-6">
              {aboutTimeline.map((entry) => (
                <div key={entry.year} className="panel p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">
                    {entry.year}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-navy">{entry.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-steel">{entry.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-[36px] bg-navy p-8 text-white shadow-premium md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal/80">
                Leadership Profile
              </p>
              <h2 className="mt-4 text-4xl font-semibold">Managing Director</h2>
              <p className="mt-6 text-lg font-medium text-white/85">
                Marine leadership focused on disciplined execution, client confidence, and technically sound delivery.
              </p>
              <p className="mt-6 text-sm leading-7 text-slate-300">
                The leadership narrative emphasizes practical marine engineering judgment,
                long-range client relationships, and clear ownership over survey, design,
                management, and advisory outputs. The positioning supports trust with shipowners,
                offshore stakeholders, and technical decision-makers.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-semibold">{metric.value}</p>
                    <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Mission, Vision & Values"
              title="A maritime brand built around accountability, precision, and dependable communication."
              description="These principles shape how the company presents itself to global clients and how the service model is structured internally."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title}>
                  <div className="panel p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-navy">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-navy">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-steel">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-shell py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="panel p-8 md:p-10">
              <SectionHeading
                eyebrow="Team Expertise"
                title="Cross-functional marine capability presented with a premium corporate lens."
                description="The about page balances industry credibility with polished trust-building design and concise technical positioning."
              />
              <div className="mt-8 grid gap-4">
                {expertise.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-steel">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="panel p-8 md:p-10">
              <SectionHeading
                eyebrow="Global Standards"
                title="Prepared for modern shipping expectations and international review."
                description="The standards framework is communicated to reassure clients on process discipline, reporting quality, and operational understanding."
              />
              <div className="mt-8 grid gap-4">
                {standards.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-steel">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[28px] bg-[linear-gradient(120deg,#071A2E,#0B3159)] p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal/80">
                  Office Presence
                </p>
                <p className="mt-4 text-2xl font-semibold">Chennai based. Internationally aligned.</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Positioned to serve regional and international maritime stakeholders with responsive communication and globally recognizable presentation quality.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
