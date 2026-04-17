import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Premium Maritime Services"
        title="Specialist maritime solutions designed for reliability, compliance, and commercial confidence."
        description="Each service card is structured to feel premium, informative, and lead-generation focused for shipowners, fleet managers, and offshore clients."
        image="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="container-shell py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Service Portfolio"
            title="Marine engineering, inspections, surveys, and vessel support under one modern corporate interface."
            description="The services page combines high-end presentation with fast scannability, giving global shipping clients a clear understanding of capability areas."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.title}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
