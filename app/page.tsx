import Image from "next/image";
import Button from "@/components/Button";
import CardDeck from "@/components/CardDeck";
import HeroMark from "@/components/HeroMark";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import ScrollStatement from "@/components/ScrollStatement";
import WerkCarousel from "@/components/WerkCarousel";
import { BEREICHE, COMPANY } from "@/lib/data";
import { IMG, unsplashSrc } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MaterialBand />
      <ScrollStatement />
      <WerkShowcase />
      <Succession />
      <WerkstattMoment />
      <Numbers />
      <Closing />
    </>
  );
}

/* ============ HERO ============ */

function Hero() {
  return (
    <section className="relative isolate overflow-hidden paper-glow grain min-h-[100svh]">
      <div className="pointer-events-none absolute inset-y-0 left-6 hidden w-px bg-walnut-deep/10 md:block md:left-10" />
      <div className="pointer-events-none absolute inset-y-0 right-6 hidden w-px bg-walnut-deep/10 md:block md:right-10" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-8xl flex-col px-5 pt-28 sm:px-6 sm:pt-32 md:px-10 md:pt-36">
        {/* Top meta */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="caption text-stone-500">Meisterwerkstatt</p>
            <p className="meta mt-2 text-stone-500 sm:mt-3">
              Saarbrücken · Ensheim
            </p>
          </div>
          <div className="text-right">
            <p className="caption text-stone-500">Est.</p>
            <p className="meta mt-2 text-stone-500 sm:mt-3">
              <span className="hidden sm:inline">MCMXCVIII · </span>1998
            </p>
          </div>
        </div>

        {/* Middle: wordmark + card deck */}
        <div className="relative grid flex-1 grid-cols-1 items-center gap-8 py-10 sm:gap-10 sm:py-14 md:grid-cols-12 md:gap-8 md:py-16">
          <div className="relative z-10 md:col-span-7">
            <HeroMark />
            <div className="mt-8 max-w-md sm:mt-10">
              <p className="text-balance text-[1rem] leading-relaxed text-stone-700 sm:text-[1.05rem] md:text-[1.15rem]">
                Innenausbau, Möbel und Küchen aus einer Werkstatt in Ensheim.
                Dreizehn Hände. Ein Meisterbetrieb. Jedes Werk entsteht komplett
                im Haus.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-10">
                <Button href="/werk">Werk entdecken</Button>
                <Button href="/kontakt" variant="ghost">
                  Projekt besprechen
                </Button>
              </div>
            </div>
          </div>

          {/* Click-through card deck */}
          <div className="relative mt-2 h-[420px] sm:h-[460px] md:col-span-5 md:mt-0 md:h-[560px]">
            <CardDeck />
          </div>
        </div>

        {/* Bottom status strip */}
        <div className="relative mt-auto flex items-end justify-between gap-4 border-t border-walnut-deep/10 pb-8 pt-5 sm:pb-10 sm:pt-6">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[0.72rem] text-stone-500 sm:gap-x-8 sm:text-[0.78rem] md:gap-x-10">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
              <span className="font-mono tracking-widest">MEISTERBETRIEB</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-ochre/60" />
              <span className="font-mono tracking-widest">13 HÄNDE</span>
            </li>
            <li className="hidden items-center gap-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-ochre/40" />
              <span className="font-mono tracking-widest">
                VOLLHOLZ · FURNIER · STEIN
              </span>
            </li>
          </ul>
          <span className="hidden font-mono text-[0.72rem] tracking-widest text-stone-500 md:inline">
            ↓ WEITER
          </span>
        </div>
      </div>
    </section>
  );
}

/* ============ MATERIAL BAND ============ */

function MaterialBand() {
  return (
    <section className="surface-warm relative border-y border-walnut-deep/10 py-10">
      <Marquee
        items={[
          "Eiche",
          "Nussbaum",
          "Esche",
          "Ahorn",
          "Lärche",
          "Kirsche",
          "Birnbaum",
          "Massiv",
        ]}
      />
    </section>
  );
}

/* ============ WERK SHOWCASE ============ */

function WerkShowcase() {
  return (
    <section className="surface-paper relative overflow-hidden py-24 md:py-36">
      <Reveal>
        <WerkCarousel />
      </Reveal>
    </section>
  );
}

/* ============ SUCCESSION ============ */

function Succession() {
  return (
    <section className="surface-bone relative overflow-hidden">
      <div className="mx-auto max-w-8xl px-5 py-20 sm:px-6 sm:py-28 md:px-10 md:py-40">
        <div className="grid grid-cols-1 gap-12 sm:gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="caption text-ochre">Christian Wagner</p>
            <h2 className="display mt-6 text-[clamp(1.8rem,5vw,4.8rem)] text-walnut-deep sm:mt-8">
              „Was mit Achim Embs 1998 begonnen hat,
              <span className="italic text-ochre"> führe ich weiter.</span>"
            </h2>
            <p className="mt-8 max-w-xl text-[1.02rem] leading-relaxed text-stone-700 sm:mt-10 sm:text-[1.1rem]">
              Ausbildung, Gesellenjahre, Meisterschule. Vollständig in dieser
              Werkstatt. 2020 habe ich den Betrieb übernommen und arbeite mit
              dem Team an genau der Haltung weiter, die Achim gegründet hat.
            </p>
            <div className="mt-8 sm:mt-10">
              <Button href="/werkstatt" variant="ghost">
                Werkstatt kennenlernen
              </Button>
            </div>
          </Reveal>

          <Reveal className="md:col-span-4 md:col-start-9" delay={180}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[3/4]">
              <Image
                src={unsplashSrc(IMG.portrait, { w: 900 })}
                alt="Portrait Christian Wagner"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-walnut-deep/90 via-walnut-deep/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex flex-col gap-4 text-paper md:inset-x-7 md:bottom-7">
                <p className="caption text-paper/60">Inhaber & Meister</p>
                <p className="font-display text-[2rem] italic leading-tight tracking-tightest">
                  Christian Wagner
                </p>
                <ul className="flex flex-col gap-1 font-mono text-[0.7rem] tracking-widest text-paper/70">
                  <li>GESELLENPRÜFUNG</li>
                  <li>MEISTERPRÜFUNG</li>
                  <li>2020 · ÜBERNAHME</li>
                </ul>
              </div>
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-paper/40 bg-walnut-deep/55 px-3 py-1 font-mono text-[0.66rem] tracking-widest text-paper/85 backdrop-blur-sm">
                <span className="h-1 w-1 rounded-full bg-ochre-soft" />
                PORTRAIT
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ WERKSTATT MOMENT ============ */

function WerkstattMoment() {
  return (
    <section className="surface-paper relative overflow-hidden">
      <div className="relative mx-auto grid max-w-8xl grid-cols-1 gap-12 px-5 py-20 sm:gap-16 sm:px-6 sm:py-28 md:grid-cols-12 md:px-10 md:py-40">
        <Reveal variant="clip" className="md:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[4/3]">
            <Image
              src={unsplashSrc(IMG.heroWorkshop, { w: 1800 })}
              alt="Werkstatt der Schreinerei Embs in Ensheim"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-walnut-deep/80 via-walnut-deep/15 to-transparent" />
            <div className="absolute left-7 top-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-ochre-soft" />
              <span className="caption text-paper/85">
                Werkstatt · Zum Gerlen 8
              </span>
            </div>
            <div className="absolute inset-x-7 bottom-7 flex items-end justify-between gap-6">
              <div>
                <p className="caption text-paper/60">Fertigung</p>
                <p className="mt-3 font-display text-[clamp(1.8rem,3vw,3rem)] italic leading-none tracking-tightest text-paper">
                  In einem Haus.
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
          </div>
        </Reveal>

        <Reveal className="md:col-span-5 md:self-end">
          <p className="caption text-ochre">Haltung</p>
          <h2 className="display mt-5 text-[clamp(1.8rem,4vw,3.6rem)] text-walnut-deep sm:mt-6">
            Nichts verlässt den Betrieb,{" "}
            <span className="italic text-ochre">
              was wir nicht selbst gebaut haben.
            </span>
          </h2>
          <p className="mt-6 text-[1rem] leading-relaxed text-stone-700 sm:mt-8 sm:text-[1.05rem]">
            Entwurf, Zuschnitt, Kantenbearbeitung, Oberfläche und Montage
            bleiben im Haus. Unsere Kunden sprechen mit den Menschen, die auch
            bauen. Nicht mit einem Projektmanager.
          </p>
          <div className="mt-6 sm:mt-8">
            <Button href="/werkstatt" variant="ghost">
              Mehr über die Werkstatt
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ NUMBERS ============ */

function Numbers() {
  const facts = [
    { k: "1998", v: "Gegründet", s: "von Achim Embs" },
    { k: "2020", v: "Übernahme", s: "durch Christian Wagner" },
    { k: `${COMPANY.teamSize}`, v: "Mitarbeitende", s: "in einem Haus" },
    { k: "08", v: "Bereiche", s: "eine Handschrift" },
  ];
  return (
    <section className="surface-warm relative overflow-hidden">
      <div className="mx-auto max-w-8xl px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:gap-y-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="caption text-ochre">Werkstatt in Zahlen</p>
            <h2 className="display mt-5 text-[clamp(2.2rem,4.6vw,4.2rem)] text-walnut-deep sm:mt-6">
              Eine Werkstatt.
              <br />
              <span className="italic text-ochre">Zwei Generationen.</span>
            </h2>
          </Reveal>

          <Reveal
            variant="stagger"
            as="ul"
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-y-14 md:col-span-7 md:grid-cols-2"
          >
            {facts.map((f) => (
              <li key={f.k} className="flex flex-col">
                <span className="mega text-[clamp(2.6rem,6vw,5.5rem)] text-walnut-deep">
                  {f.k}
                </span>
                <span className="mt-3 h-px w-10 bg-ochre sm:mt-4 sm:w-12" />
                <span className="caption mt-4 text-stone-500 sm:mt-5">
                  {f.v}
                </span>
                <span className="mt-1 text-[0.9rem] text-stone-700 sm:text-[0.95rem]">
                  {f.s}
                </span>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ CLOSING ============ */

function Closing() {
  return (
    <section className="relative isolate overflow-hidden surface-dark grain grain-dark">
      {/* Background image */}
      <div className="absolute inset-0 opacity-45">
        <Image
          src={unsplashSrc(IMG.materialGrain, { w: 2400 })}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-walnut-deep/50 via-walnut-deep/85 to-walnut-deep" />
      </div>

      <div className="relative mx-auto max-w-8xl px-5 py-24 sm:px-6 sm:py-32 md:px-10 md:py-48">
        <Reveal className="text-center">
          <p className="caption text-paper/60">Ihr Vorhaben</p>
          <h2 className="mega mt-6 text-[clamp(2.4rem,10vw,9rem)] text-paper sm:mt-8">
            Erzählen Sie uns,
            <br />
            <span className="italic text-ochre-soft">
              was entstehen soll.
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[1.02rem] leading-relaxed text-paper/75 sm:mt-10 sm:text-[1.1rem] md:text-[1.2rem]">
            Ein Anruf, eine Mail, ein Besuch in Ensheim. Wir nehmen uns Zeit,
            auch wenn das Projekt noch nicht gezeichnet ist.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:mt-14">
            <Button href="/kontakt">Projekt besprechen</Button>
            <Button href="tel:+49689370656" variant="ghost">
              06893 · 70656
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[0.72rem] text-paper/55 sm:mt-24 sm:gap-x-10 sm:gap-y-4 sm:text-[0.82rem]">
          <span className="font-mono tracking-widest">
            {COMPANY.address.street.toUpperCase()}
          </span>
          <span className="h-1 w-1 rounded-full bg-paper/40" />
          <span className="font-mono tracking-widest">
            {COMPANY.address.zip} {COMPANY.address.city.toUpperCase()}
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-paper/40 sm:inline-block" />
          <a
            href={`mailto:${COMPANY.contact.email}`}
            className="font-mono tracking-widest transition-colors hover:text-ochre-soft"
          >
            {COMPANY.contact.email.toUpperCase()}
          </a>
        </div>
      </div>
    </section>
  );
}
