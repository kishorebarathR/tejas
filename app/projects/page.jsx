import { Download, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Projects & Case Studies"
        title="Selected engineering, survey, and inspection outcomes for the maritime sector."
        description="This page showcases credible project narratives, measurable client value, and polished case-study presentation suitable for global marine audiences."
        image="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-navy py-24">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Case Study Showcase"
              title="Technical work presented through a trust-building executive lens."
              description="Project summaries focus on real client impact, practical engineering outcomes, and a premium maritime presentation language."
              invert
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <Reveal key={project.title}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <div className="panel p-8 md:p-10">
              <SectionHeading
                eyebrow="Before / After Technical Visuals"
                title="A layout ready for inspection imagery, gauging outputs, and design comparison visuals."
                description="The design supports future insertion of real project photos, annotated condition visuals, steel renewal comparisons, or design iteration snapshots."
              />
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-[28px] border border-slate-200 bg-[linear-gradient(160deg,#f6fbfd,#d8e6ec)] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-steel">
                    Before
                  </p>
                  <p className="mt-4 text-lg font-semibold text-navy">
                    Legacy condition constraints documented with concise issue mapping.
                  </p>
                </div>
                <div className="rounded-[28px] border border-slate-200 bg-[linear-gradient(160deg,#e7f7f5,#cbe5e2)] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal">
                    After
                  </p>
                  <p className="mt-4 text-lg font-semibold text-navy">
                    Actionable technical pathway showing repair priorities and measurable uplift.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-[36px] bg-[linear-gradient(140deg,#071A2E,#0B3159_60%,#127D7A)] p-8 text-white shadow-premium md:p-10">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-teal/80">
                <TrendingUp size={16} />
                Client Success Metrics
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-4xl font-semibold">95%</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Of case-study narratives positioned around measurable owner value.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-4xl font-semibold">3x</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Clearer stakeholder communication through executive-grade reporting structure.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-4xl font-semibold">24/7</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Inquiry-led layout optimized for consultations, inspections, and urgent support requests.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <ButtonLink href="/contact" className="w-full bg-white text-navy hover:bg-mist">
                  <span className="inline-flex items-center gap-2">
                    <Download size={16} />
                    Download Brochure
                  </span>
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
