import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contactDetails, navItems, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(18,125,122,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr] lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-teal/80">
            Tejas Maritime Pvt Ltd
          </p>
          <h3 className="mt-4 max-w-sm text-3xl font-semibold">
            Dependable maritime expertise for owners, operators, and offshore clients.
          </h3>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Premium technical support spanning ship management, engineering reviews,
            inspections, and marine consultancy since 2009.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Navigation
          </p>
          <div className="mt-5 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Services
          </p>
          <div className="mt-5 space-y-3">
            {services.slice(0, 5).map((service) => (
              <p key={service.title} className="text-sm text-slate-300">
                {service.title}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Contact
          </p>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 text-teal" size={16} />
              <span>{contactDetails.address}</span>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 text-teal" size={16} />
              <span>{contactDetails.phone}</span>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-0.5 text-teal" size={16} />
              <span>{contactDetails.email}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-6 py-5 text-center text-xs uppercase tracking-[0.25em] text-white/50">
        © 2026 Tejas Maritime Pvt Ltd. Global maritime support with engineering precision.
      </div>
    </footer>
  );
}
