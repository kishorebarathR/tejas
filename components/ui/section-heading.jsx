import clsx from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
  align = "left",
}) {
  return (
    <div className={clsx("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p
        className={clsx(
          "text-xs font-semibold uppercase tracking-[0.32em]",
          invert ? "text-teal/80" : "text-teal",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={clsx(
          "mt-4 text-3xl font-semibold leading-tight md:text-5xl",
          invert ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      <p
        className={clsx(
          "mt-5 text-base leading-7 md:text-lg",
          invert ? "text-slate-300" : "text-steel",
        )}
      >
        {description}
      </p>
    </div>
  );
}
