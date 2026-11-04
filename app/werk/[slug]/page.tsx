import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { BEREICHE } from "@/lib/data";
import { bereichImage, unsplashSrc } from "@/lib/images";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BEREICHE.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const b = BEREICHE.find((x) => x.slug === slug);
  if (!b) return {};
  return { title: b.title, description: b.lead };
}

export default async function BereichPage({ params }: Props) {
  const { slug } = await params;
  const bereich = BEREICHE.find((b) => b.slug === slug);
  if (!bereich) notFound();

  const currentIndex = BEREICHE.findIndex((b) => b.slug === bereich.slug);
  const next = BEREICHE[(currentIndex + 1) % BEREICHE.length];

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden paper-glow grain min-h-[95svh]">
        <div className="pointer-events-none absolute inset-y-0 left-6 hidden w-px bg-walnut-deep/10 md:block md:left-10" />
        <div className="pointer-events-none absolute inset-y-0 right-6 hidden w-px bg-walnut-deep/10 md:block md:right-10" />

        <div className="relative mx-auto flex min-h-[95svh] max-w-8xl flex-col px-5 pt-28 sm:px-6 sm:pt-32 md:px-10 md:pt-40">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="caption text-ochre">Bereich {bereich.number}</p>
              <p className="meta mt-2 text-stone-500 sm:mt-3">
                {bereich.kicker.toUpperCase()}
              </p>
            </div>
            <Link
              href="/werk"
              className="caption text-stone-500 transition-colors hover:text-ochre"
            >
              ↩ Index
            </Link>
          </div>

          <div className="relative grid flex-1 grid-cols-1 items-center gap-8 py-12 sm:gap-10 sm:py-16 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <h1 className="mega text-[clamp(2.6rem,11vw,11rem)] text-walnut-deep">
                <TitleSplit title={bereich.title} />
              </h1>
              <p className="mt-8 max-w-xl text-[1.02rem] leading-relaxed text-stone-700 sm:mt-10 sm:text-[1.08rem] md:text-[1.2rem]">
                {bereich.claim}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 sm:mt-12">
                <Button href="/kontakt">Projekt besprechen</Button>
                <Button href={`/werk/${next.slug}`} variant="ghost">
                  Nächster Bereich
                </Button>
              </div>
            </Reveal>

            <Reveal className="md:col-span-5 md:self-end" delay={180}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[3/4]">
                <Image
                  src={unsplashSrc(bereichImage(bereich.slug), { w: 1200 })}
                  alt={bereich.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-walnut-deep/85 via-walnut-deep/15 to-transparent" />
                <div className="absolute inset-0 p-6 md:p-7">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-ochre-soft" />
                    <span className="font-mono text-[0.68rem] tracking-widest text-paper/85">
                      {String(currentIndex + 1).padStart(2, "0")} /{" "}
                      {String(BEREICHE.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="absolute inset-x-6 bottom-6 md:inset-x-7 md:bottom-7">
                    <p className="caption text-paper/70">Fokus</p>
                    <ul className="mt-4 flex flex-col gap-2 text-[0.92rem] text-paper">
                      {bereich.focus.map((f) => (
                        <li key={f} className="flex items-baseline gap-2">
                          <span className="h-[2px] w-3 bg-ochre-soft" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative mt-auto flex items-end justify-between gap-4 border-t border-walnut-deep/10 pb-8 pt-5 sm:pb-10 sm:pt-6">
            <p className="meta text-stone-500">SCHREINEREI EMBS · ENSHEIM</p>
            <p className="meta text-stone-500">{bereich.number}</p>
          </div>
        </div>
      </section>

      {/* LEAD */}
      <section className="surface-bone relative overflow-hidden">
        <div className="mx-auto max-w-8xl px-5 py-20 sm:px-6 sm:py-28 md:px-10 md:py-40">
          <div className="grid grid-cols-1 gap-12 sm:gap-16 md:grid-cols-12">
            <Reveal className="md:col-span-8 md:col-start-2">
              <p className="caption text-ochre">Was uns leitet</p>
              <h2 className="display mt-6 text-[clamp(1.6rem,3.6vw,3.4rem)] text-walnut-deep sm:mt-8">
                {bereich.lead}
              </h2>
            </Reveal>
            <Reveal className="md:col-span-3 md:col-start-10 md:self-end">
              <div className="rule-dark mb-6" />
              <p className="caption text-stone-500">Intention</p>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-stone-700">
                {bereich.intention}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ESSENCE */}
      <section className="surface-paper relative overflow-hidden">
        <div className="mx-auto max-w-8xl px-5 py-20 sm:px-6 sm:py-28 md:px-10 md:py-40">
          <Reveal>
            <p className="caption text-ochre">
              Was wir in diesem Bereich bauen
            </p>
          </Reveal>
          <Reveal
            variant="stagger"
            as="ul"
            className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 sm:mt-14 sm:gap-y-8 md:mt-20 md:grid-cols-2"
          >
            {bereich.essence.map((item, i) => (
              <li
                key={item}
                className="group flex items-baseline gap-6 border-t border-walnut-deep/15 py-6 transition-colors duration-300 hover:border-ochre sm:gap-8 sm:py-7"
              >
                <span className="shrink-0 font-mono text-[0.72rem] tracking-widest text-ochre sm:text-[0.74rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[1.35rem] font-light leading-tight tracking-tightish text-walnut-deep transition-colors duration-300 group-hover:text-ochre sm:text-[1.6rem] md:text-[2rem]">
                  {item}
                </span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* NEXT */}
      <section className="surface-warm relative">
        <div className="mx-auto max-w-8xl px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
          <Reveal className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="caption text-ochre">Weiter im Werk</p>
              <h2 className="display mt-5 text-[clamp(2rem,5vw,4.6rem)] text-walnut-deep sm:mt-6">
                <span className="mr-4 align-middle font-mono text-[0.5em] tracking-widest text-ochre sm:mr-5">
                  {next.number}
                </span>
                {next.title}
              </h2>
              <p className="mt-5 max-w-xl text-[1rem] text-stone-700 sm:text-[1.05rem]">
                {next.kicker}
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Button href={`/werk/${next.slug}`}>Nächster Bereich</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function TitleSplit({ title }: { title: string }) {
  if (title.includes(" & ")) {
    const [a, b] = title.split(" & ");
    return (
      <>
        <span className="block">{a}</span>
        <span className="block italic text-ochre">& {b}</span>
      </>
    );
  }
  return <span className="block">{title}</span>;
}
