import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-premium transition duration-300 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(7,26,46,0.72))]" />
        <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-navy shadow-lg">
          <Icon size={22} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-navy">{service.title}</h3>
        <p className="mt-4 text-sm leading-7 text-steel">{service.description}</p>
        <button
          type="button"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-teal"
        >
          Discuss Service
          <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}
