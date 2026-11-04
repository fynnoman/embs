import Link from "next/link";
import { BEREICHE, COMPANY } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="surface-warm relative overflow-hidden border-t border-walnut-deep/10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 0%, rgba(176, 122, 53, 0.22) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-8xl px-5 pt-20 pb-10 sm:px-6 sm:pt-24 md:px-10 md:pt-32">
        <div className="mb-14 sm:mb-20">
          <p className="caption text-stone-500">Saarbrücken · Ensheim</p>
          <Link
            href="/"
            className="mt-5 block font-display text-[clamp(3.5rem,15vw,16rem)] font-light italic leading-[0.86] tracking-tightest text-walnut-deep transition-colors duration-500 hover:text-ochre sm:mt-6"
          >
            Embs.
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-14 md:grid-cols-12 md:gap-x-10">
          <div className="sm:col-span-2 md:col-span-5">
            <p className="caption text-stone-500">Werkstatt</p>
            <p className="mt-6 max-w-sm text-[1.02rem] leading-relaxed text-walnut-deep">
              {COMPANY.legal}
            </p>
            <p className="mt-2 text-[1rem] leading-relaxed text-stone-700">
              {COMPANY.address.street}
              <br />
              {COMPANY.address.zip} {COMPANY.address.city}
            </p>
            <div className="mt-8 flex flex-col gap-1.5 text-[0.95rem]">
              <a
                href={`tel:${COMPANY.contact.phone.replace(/[^\d+]/g, "")}`}
                className="text-walnut-deep transition-colors hover:text-ochre"
              >
                {COMPANY.contact.phone}
              </a>
              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="text-walnut-deep transition-colors hover:text-ochre"
              >
                {COMPANY.contact.email}
              </a>
              <p className="text-stone-500">Fax · {COMPANY.contact.fax}</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="caption text-stone-500">Werk</p>
            <ul className="mt-6 flex flex-col gap-2">
              {BEREICHE.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/werk/${b.slug}`}
                    className="text-[0.95rem] text-walnut-deep/85 transition-colors hover:text-ochre"
                  >
                    {b.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <p className="caption text-stone-500">Mehr</p>
            <ul className="mt-6 flex flex-col gap-2">
              <li>
                <Link
                  href="/werkstatt"
                  className="text-[0.95rem] text-walnut-deep/85 transition-colors hover:text-ochre"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-[0.95rem] text-walnut-deep/85 transition-colors hover:text-ochre"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-[0.95rem] text-stone-500 transition-colors hover:text-walnut-deep"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-[0.95rem] text-stone-500 transition-colors hover:text-walnut-deep"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
            <div className="mt-10">
              <p className="caption text-stone-500">Öffnungszeiten</p>
              <ul className="mt-4 flex flex-col gap-1.5 text-[0.9rem]">
                {COMPANY.hours.map((h) => (
                  <li key={h.label} className="text-stone-700">
                    <span className="block">{h.label}</span>
                    <span className="font-mono text-[0.78rem] tracking-widest text-stone-500">
                      {h.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-walnut-deep/10 pt-6 text-[0.72rem] text-stone-500 sm:mt-20 sm:text-[0.78rem] md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {COMPANY.legal}. Ensheim.
          </p>
          <p className="font-mono tracking-widest">
            MEISTERBETRIEB · GEGRÜNDET 1998 · 13 HÄNDE
          </p>
        </div>
      </div>
    </footer>
  );
}
