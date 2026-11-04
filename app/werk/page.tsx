import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { BEREICHE } from "@/lib/data";
import { bereichImage, unsplashSrc } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Werk",
  description:
    "Acht Bereiche aus einer Werkstatt. Innenausbau, Küchen, Möbel, Badmöbel, Büro, Ladenbau, Schlafzimmer und Tische.",
};

export default function WerkIndexPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden paper-glow grain">
        <div className="relative mx-auto max-w-8xl px-5 pt-28 pb-12 sm:px-6 sm:pt-36 sm:pb-16 md:px-10 md:pt-44 md:pb-24">
          <Reveal>
            <p className="caption text-ochre">Werkübersicht</p>
            <h1 className="mega mt-6 text-[clamp(2.8rem,13vw,13rem)] text-walnut-deep sm:mt-8">
              Werk.
            </h1>
            <p className="mt-8 max-w-xl text-[1.02rem] leading-relaxed text-stone-700 sm:mt-10 sm:text-[1.1rem] md:text-[1.2rem]">
              Acht Bereiche. Eine Handschrift. Jeder entsteht in derselben
              Werkstatt in Ensheim.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-paper relative overflow-hidden">
        <div className="mx-auto max-w-8xl px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
          <Reveal
            variant="stagger"
            as="ul"
            className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2"
          >
            {BEREICHE.map((b, idx) => (
              <li key={b.slug}>
                <Link
                  href={`/werk/${b.slug}`}
                  className="group relative flex h-[380px] flex-col justify-between overflow-hidden rounded-3xl p-6 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 active:scale-[0.99] sm:h-[440px] sm:p-7 md:h-[540px] md:p-10"
                >
                  <Image
                    src={unsplashSrc(bereichImage(b.slug), { w: 1400 })}
                    alt={b.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-walnut-deep via-walnut-deep/50 to-walnut-deep/5" />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(70% 55% at 30% 90%, rgba(176, 122, 53, 0.35) 0%, transparent 65%)",
                    }}
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="font-mono text-[0.72rem] tracking-widest text-paper/85">
                      {b.number}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/35 bg-walnut-deep/40 text-paper/90 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-ochre-soft group-hover:text-ochre-soft group-hover:rotate-[-45deg]">
                      <span aria-hidden>→</span>
                    </span>
                  </div>

                  <div className="relative">
                    <p className="caption text-paper/70">{b.kicker}</p>
                    <h2 className="display mt-4 text-[clamp(2.2rem,3.2vw,3rem)] text-paper">
                      {b.title}
                    </h2>
                    <p className="mt-5 max-w-sm text-[0.98rem] leading-relaxed text-paper/80">
                      {b.claim}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-widest text-paper/70">
                      <span className="h-[2px] w-5 bg-ochre-soft" />
                      {String(idx + 1).padStart(2, "0")} /{" "}
                      {String(BEREICHE.length).padStart(2, "0")}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="surface-warm relative">
        <div className="mx-auto max-w-8xl px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
          <Reveal className="flex flex-col items-center text-center">
            <p className="caption text-ochre">Fragen zum Bereich?</p>
            <h2 className="mega mt-6 text-[clamp(2.2rem,7vw,6rem)] text-walnut-deep sm:mt-8">
              Einfach <span className="italic text-ochre">anrufen.</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:mt-12">
              <Button href="/kontakt">Projekt besprechen</Button>
              <Button href="tel:+49689370656" variant="ghost">
                06893 · 70656
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
