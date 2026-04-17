import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

export function PageHero({ title, description, image, eyebrow }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-36 text-white">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,26,46,0.94),rgba(7,26,46,0.78)_45%,rgba(7,26,46,0.45)_100%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-teal/75">
          {eyebrow}
        </p>
        <div className="mt-6 max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/contact">Start an Inquiry</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            Explore Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
