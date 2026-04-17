import Image from "next/image";
import { ArrowRight, CheckCircle2, Shield, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  certifications,
  differentiators,
  metrics,
  partners,
  services,
  strengths,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <main>
      <section className="relative isolate min-h-screen overflow-hidden bg-navy text-white">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
          alt="Large vessel at sea"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,26,46,0.92),rgba(7,26,46,0.7)_48%,rgba(7,26,46,0.38)_100%)]" />
        <div className="hero-grid absolute inset-0 bg-grid-fade opacity-30" />

        <div className="relative mx-auto grid min-h-screen max-w-7xl items-end gap-16 px-6 pb-24 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-teal/80">
              Marine Engineering · Ship Management · Consultancy
            </p>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
              Maritime Excellence in Design, Management & Surveys
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Tejas Maritime Pvt Ltd supports shipowners, operators, and offshore
              stakeholders with premium technical management, marine engineering,
              inspection, and consultancy solutions built for global confidence.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Request Consultation</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View Services
              </ButtonLink>
            </div>
          </div>

          <Reveal className="lg:justify-self-end">
            <div className="panel max-w-xl border-white/10 bg-white/10 p-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/20 text-teal">
                  <Sparkles size={22} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-teal/80">
                    Trusted Maritime Partner
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Technical assurance for high-value marine decisions
                  </p>
                </div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Company Introduction"
            title="A premium maritime brand built on engineering judgment and operational trust."
            description="We help global shipping clients navigate design review, technical management, vessel inspections, and consultancy with a corporate presentation standard that matches the seriousness of the work."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {strengths.map((item) => {
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
      </section>

      <section className="bg-white py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Key Services"
              title="Comprehensive support across ship management, consultancy, and marine inspections."
              description="Our service architecture is designed for owners and operators that want specialist depth without fragmented vendors."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {services.slice(0, 6).map((service) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title}>
                  <div className="rounded-[28px] border border-slate-200 bg-[#f8fbfc] p-6 transition duration-300 hover:-translate-y-1 hover:border-teal/40">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-navy shadow-sm">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-navy">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-steel">{service.description}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                      Learn more
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-white">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Enterprise-level confidence for vessel owners, offshore operators, and marine investors."
              description="The website experience mirrors the company proposition: premium presentation, disciplined thinking, and practical maritime delivery."
              invert
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title}>
                  <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <Icon className="text-teal" size={28} />
                    <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-shell py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div className="panel h-full p-8 md:p-10">
              <SectionHeading
                eyebrow="Compliance & Certifications"
                title="Aligned with the expectations of modern maritime governance."
                description="From survey support to reporting structure, our positioning emphasizes accountability, technical rigor, and confidence in front of international stakeholders."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {certifications.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 text-teal" size={18} />
                    <p className="text-sm leading-6 text-steel">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="panel h-full overflow-hidden bg-[linear-gradient(180deg,#071A2E,#0B3159)] p-8 text-white md:p-10">
              <div className="flex items-center gap-3 text-teal/80">
                <Shield size={18} />
                <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                  Shipping Partners
                </p>
              </div>
              <h3 className="mt-5 text-3xl font-semibold">
                Built to reassure sophisticated marine clients at first glance.
              </h3>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {partners.map((partner) => (
                  <div
                    key={partner}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-white/85"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(120deg,#071A2E,#0B3159_55%,#127D7A)] px-8 py-14 text-white shadow-premium md:px-14">
              <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_58%)] lg:block" />
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-teal/80">
                    Consultation CTA
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                    Need trusted support for vessel management, surveys, or technical review?
                  </h2>
                  <p className="mt-5 text-base leading-7 text-slate-200">
                    Start a conversation with Tejas Maritime Pvt Ltd for engineering-led
                    guidance that is fast, professional, and aligned with global shipping expectations.
                  </p>
                </div>
                <ButtonLink href="/contact" className="bg-white text-navy hover:bg-mist">
                  Send an Inquiry
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
