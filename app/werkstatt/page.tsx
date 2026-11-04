import Image from "next/image";
import Button from "@/components/Button";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { COMPANY, BEREICHE } from "@/lib/data";
import { IMG, unsplashSrc } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Werkstatt",
  description:
    "Die Schreinerei Embs in Saarbrücken-Ensheim. Christian Wagner, dreizehn Mitarbeitende, eine Werkstatt.",
};

const chapters = [
  {
    year: "1998",
    title: "Gründung durch Achim Embs",
    body:
      "Achim Embs gründet die Schreinerei an der Zum Gerlen 8 in Ensheim. Innenausbau, Möbel, Küchen aus einer Hand.",
  },
  {
    year: "···",
    title: "Christian Wagner im Team",
    body:
      "Ausbildung, Gesellenjahre, Meisterschule. Vollständig in dieser Werkstatt. Heute Inhaber.",
  },
  {
    year: "2020",
    title: "Übernahme der Schreinerei",
    body:
      "Nach dem Tod von Achim Embs übernimmt Christian Wagner. Der Name bleibt. Die Haltung bleibt.",
  },
  {
    year: "Heute",
    title: "13 Hände, ein Betrieb",
    body:
      "Dreizehn Mitarbeitende, eigene Planung, eigene Fertigung, eigene Montage. Jedes Projekt geht durch dasselbe Haus.",
  },
];

export default function WerkstattPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden paper-glow grain min-h-[80svh]">
        <div className="relative mx-auto flex min-h-[80svh] max-w-8xl flex-col justify-end px-5 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-36 md:px-10 md:pt-44">
          <Reveal>
            <p className="caption text-ochre">Werkstatt</p>
            <h1 className="mega mt-6 text-[clamp(2.8rem,13vw,13rem)] text-walnut-deep sm:mt-8">
              Ein Haus.
              <br />
              <span className="italic text-ochre">Ein Team.</span>
            </h1>
            <p className="mt-8 max-w-xl text-[1.02rem] leading-relaxed text-stone-700 sm:mt-10 sm:text-[1.1rem] md:text-[1.2rem]">
              Seit 1998 arbeiten wir aus einer Werkstatt in Ensheim. Was wir
              bauen, planen wir selbst. Was wir montieren, haben wir selbst
              gefertigt.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-warm relative border-y border-walnut-deep/10 py-8">
        <Marquee
          items={[
            "Eigene Planung",
            "Eigene Fertigung",
            "Eigene Montage",
            "Keine Abkürzung",
          ]}
        />
      </section>

      {/* Workshop photo */}
      <section className="surface-paper relative">
        <div className="mx-auto max-w-8xl px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
          <Reveal variant="clip">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[16/9]">
              <Image
                src={unsplashSrc(IMG.workshopBench, { w: 2400 })}
                alt="Werkbank in der Schreinerei Embs"
                fill
                sizes="(max-width: 768px) 100vw, 86vw"
                className="object-cover"
              />
              <div className="absolute inset-x-8 bottom-8 flex items-end justify-between gap-6 text-paper md:inset-x-10 md:bottom-10">
                <div>
                  <p className="caption text-paper/70">Werkstatt</p>
                  <p className="mt-3 font-display text-[clamp(1.8rem,3vw,2.8rem)] italic leading-tight tracking-tightest">
                    Zum Gerlen 8, Ensheim.
                  </p>
                </div>
                <div className="hidden text-right md:block">
                  <p className="font-mono text-[0.7rem] tracking-widest text-paper/70">
                    N 49.21°
                  </p>
                  <p className="font-mono text-[0.7rem] tracking-widest text-paper/70">
                    E 7.09°
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-walnut-deep/85 via-walnut-deep/15 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Chronik */}
      <section className="surface-bone relative overflow-hidden">
        <div className="mx-auto max-w-8xl px-5 py-20 sm:px-6 sm:py-28 md:px-10 md:py-40">
          <Reveal className="mb-14 sm:mb-20">
            <p className="caption text-ochre">Chronik</p>
            <h2 className="display mt-5 text-[clamp(2.2rem,5vw,4.8rem)] text-walnut-deep sm:mt-6">
              Eine Werkstatt
              <br />
              <span className="italic text-ochre">in zwei Generationen.</span>
            </h2>
          </Reveal>

          <Reveal
            variant="stagger"
            as="ol"
            className="relative flex flex-col gap-12 sm:gap-16"
          >
            {chapters.map((c) => (
              <li
                key={c.year}
                className="grid grid-cols-1 gap-4 border-t border-walnut-deep/15 pt-6 sm:gap-6 sm:pt-8 md:grid-cols-12 md:gap-8"
              >
                <div className="md:col-span-2">
                  <p className="font-mono text-[0.86rem] tracking-widest text-ochre sm:text-[0.92rem]">
                    {c.year}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <h3 className="display text-[clamp(1.5rem,3vw,2.6rem)] text-walnut-deep">
                    {c.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-stone-700 sm:mt-5 sm:text-[1.02rem]">
                    {c.body}
                  </p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Haltung */}
      <section className="surface-paper relative overflow-hidden">
        <div className="mx-auto max-w-8xl px-5 py-20 sm:px-6 sm:py-28 md:px-10 md:py-40">
          <div className="grid grid-cols-1 gap-12 sm:gap-16 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="caption text-ochre">Haltung</p>
              <h2 className="display mt-5 text-[clamp(2rem,4vw,3.8rem)] text-walnut-deep sm:mt-6">
                Eigene Hand.
                <br />
                <span className="italic text-ochre">
                  Eigene Verantwortung.
                </span>
              </h2>
            </Reveal>
            <Reveal className="flex flex-col gap-6 sm:gap-8 md:col-span-6 md:col-start-7">
              <p className="text-[1.02rem] leading-relaxed text-walnut-deep sm:text-[1.08rem] md:text-[1.2rem]">
                Wir vergeben nichts nach außen, was unseren Namen trägt.
                Zeichnung, Zuschnitt, Finish und Montage bleiben im Betrieb.
              </p>
              <p className="text-[0.98rem] leading-relaxed text-stone-700 sm:text-[1rem]">
                Das kostet mehr Zeit und bringt mehr Ergebnis. Es ist die
                einzige Weise, in der wir arbeiten können, ohne einen Teil der
                Qualität abgeben zu müssen.
              </p>
              <p className="text-[0.98rem] leading-relaxed text-stone-700 sm:text-[1rem]">
                Unsere Kunden sprechen mit den Menschen, die auch bauen. Nicht
                mit einem Projektmanager, der weiterreicht.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Werk Index */}
      <section className="surface-warm relative overflow-hidden">
        <div className="mx-auto max-w-8xl px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="caption text-ochre">Werk aus diesem Haus</p>
          </Reveal>
          <Reveal
            variant="stagger"
            as="ul"
            className="mt-10 grid grid-cols-1 gap-x-10 gap-y-2 sm:mt-14 md:grid-cols-2"
          >
            {BEREICHE.map((b) => (
              <li
                key={b.slug}
                className="group border-t border-walnut-deep/15 transition-colors duration-300 hover:border-ochre"
              >
                <a
                  href={`/werk/${b.slug}`}
                  className="flex items-baseline justify-between gap-5 py-5 text-walnut-deep transition-colors duration-300 group-hover:text-ochre sm:gap-6 sm:py-6 md:py-7"
                >
                  <span className="flex items-baseline gap-4 sm:gap-5">
                    <span className="font-mono text-[0.68rem] tracking-widest text-ochre sm:text-[0.72rem]">
                      {b.number}
                    </span>
                    <span className="font-display text-[1.3rem] font-light tracking-tightish sm:text-[1.5rem] md:text-[1.8rem]">
                      {b.title}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="text-stone-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-ochre"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="surface-paper relative">
        <div className="mx-auto max-w-8xl px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
          <Reveal className="flex flex-col items-center text-center">
            <p className="caption text-ochre">Besuch</p>
            <h2 className="mega mt-6 text-[clamp(2.2rem,7vw,6rem)] text-walnut-deep sm:mt-8">
              Kommen Sie <span className="italic text-ochre">vorbei.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[1rem] text-stone-700 sm:mt-6 sm:text-[1.05rem]">
              Ein Termin in der Werkstatt in Ensheim sagt mehr als jede Seite
              hier.
            </p>
            <div className="mt-10 sm:mt-12">
              <Button href="/kontakt">Termin vereinbaren</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
