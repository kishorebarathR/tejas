import {
  Clock3,
  Mail,
  MapPinned,
  MessageCircle,
  PhoneCall,
  ShieldAlert,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactDetails, faqs } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact Tejas Maritime"
        title="Speak with a maritime team prepared for technical inquiries and urgent operational support."
        description="The contact experience is designed for lead generation, fast inquiry capture, and premium trust-building communication across desktop and mobile."
        image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="container-shell py-24">
        <div className="grid gap-8 xl:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <div className="panel p-8 md:p-10">
              <SectionHeading
                eyebrow="Premium Contact Form"
                title="Start your inquiry"
                description="Use this section for technical consultations, vessel inspections, management support, or offshore project discussions."
              />
              <form className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Full name"
                    className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-teal"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-teal"
                  />
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-teal"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-teal"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Service required"
                  className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-teal"
                />
                <textarea
                  placeholder="Tell us about your vessel, project scope, timeline, or urgent requirement"
                  rows={6}
                  className="rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-teal"
                />
                <ButtonLink href={`mailto:${contactDetails.email}`} className="w-full md:w-fit">
                  Submit Inquiry
                </ButtonLink>
              </form>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-6">
              <div className="rounded-[36px] bg-[linear-gradient(140deg,#071A2E,#0B3159)] p-8 text-white shadow-premium md:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal/80">
                  Office Details
                </p>
                <div className="mt-8 space-y-5 text-sm leading-7 text-slate-300">
                  <div className="flex gap-3">
                    <MapPinned className="mt-1 text-teal" size={18} />
                    <span>{contactDetails.address}</span>
                  </div>
                  <div className="flex gap-3">
                    <PhoneCall className="mt-1 text-teal" size={18} />
                    <span>{contactDetails.phone}</span>
                  </div>
                  <div className="flex gap-3">
                    <Mail className="mt-1 text-teal" size={18} />
                    <span>{contactDetails.email}</span>
                  </div>
                  <div className="flex gap-3">
                    <Clock3 className="mt-1 text-teal" size={18} />
                    <span>Consultation response window: same business day for most inquiries</span>
                  </div>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <ButtonLink
                    href={contactDetails.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp CTA
                  </ButtonLink>
                  <ButtonLink href={`tel:${contactDetails.phone}`} variant="secondary">
                    Quick Call
                  </ButtonLink>
                </div>
              </div>

              <div className="panel overflow-hidden p-2">
                <div className="flex min-h-[320px] items-end rounded-[28px] bg-[linear-gradient(160deg,#dfeff4,#9fc4d1)] p-8">
                  <div className="max-w-sm rounded-[28px] bg-white/90 p-6 shadow-lg backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-steel">
                      Office Location Map
                    </p>
                    <p className="mt-4 text-lg font-semibold text-navy">
                      Chennai office positioned for responsive marine client coordination.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[36px] border border-[#f0d9d9] bg-[#fff6f5] p-8">
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#b24545]">
                  <ShieldAlert size={16} />
                  Emergency Marine Support
                </p>
                <p className="mt-4 text-2xl font-semibold text-navy">{contactDetails.emergency}</p>
                <p className="mt-4 text-sm leading-7 text-steel">
                  For urgent operational requests, emergency surveys, or time-sensitive technical review coordination.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Clear answers for global shipping and offshore clients."
              description="This final section helps reduce friction for decision-makers comparing maritime support partners."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {faqs.map((faq) => (
              <Reveal key={faq.question}>
                <div className="panel p-7">
                  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal">
                    <MessageCircle size={15} />
                    FAQ
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-navy">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-steel">{faq.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
