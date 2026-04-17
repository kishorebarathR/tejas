import Link from "next/link";
import clsx from "clsx";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={clsx(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.12em] transition duration-300",
        variant === "primary" &&
          "bg-teal text-white shadow-premium hover:-translate-y-0.5 hover:bg-[#0e6c69]",
        variant === "secondary" &&
          "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20",
        variant === "ghost" &&
          "border border-slate-200 bg-white text-navy hover:border-teal hover:text-teal",
        className,
      )}
    >
      {children}
    </Link>
  );
}
