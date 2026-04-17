import Image from "next/image";

export function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur">
      <div className="relative h-64">
        <Image src={project.image} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(7,26,46,0.85))]" />
      </div>
      <div className="space-y-4 p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-teal/80">
          {project.category}
        </p>
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm leading-7 text-slate-300">{project.outcome}</p>
        <div className="flex flex-wrap gap-3">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/75"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
