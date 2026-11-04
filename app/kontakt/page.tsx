import Reveal from "@/components/Reveal";
import { COMPANY, BEREICHE } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Schreinerei Embs, Zum Gerlen 8, 66131 Saarbrücken-Ensheim. Telefon 06893-70656, info@schreinerei-embs.de.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden paper-glow grain">
        <div className="relative mx-auto max-w-8xl px-5 pt-28 pb-12 sm:px-6 sm:pt-36 sm:pb-16 md:px-10 md:pt-44 md:pb-24">
          <Reveal>
            <p className="caption text-ochre">Kontakt</p>
            <h1 className="mega mt-6 text-[clamp(2.8rem,13vw,13rem)] text-walnut-deep sm:mt-8">
              Reden wir.
            </h1>
            <p className="mt-8 max-w-xl text-[1.02rem] leading-relaxed text-stone-700 sm:mt-10 sm:text-[1.1rem] md:text-[1.2rem]">
              Ein Anruf, eine Mail, ein Besuch in Ensheim. Wir nehmen uns Zeit,
              auch wenn das Projekt noch nicht gezeichnet ist.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="surface-bone relative">
        <div className="mx-auto max-w-8xl px-5 py-16 sm:px-6 sm:py-24 md:px-10 md:py-32">
          <div className="grid grid-cols-1 gap-12 sm:gap-16 md:grid-cols-12 md:gap-20">
            <Reveal className="md:col-span-7">
              <p className="caption text-ochre">Anfrage</p>
              <form
                className="mt-10 flex flex-col gap-10"
                aria-label="Anfrageformular"
              >
                <Field label="Ihr Name" id="name" required />
                <Field label="E-Mail" id="email" type="email" required />
                <Field label="Telefon" id="phone" type="tel" />
                <SelectField label="Bereich" id="bereich" />
                <TextareaField label="Ihr Vorhaben" id="message" />
                <div className="flex flex-col gap-4 pt-4 md:flex-row md:items-center md:justify-between">
                  <p className="text-[0.84rem] text-stone-500">
                    Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer
                    Anfrage verwendet.
                  </p>
                  <button type="submit" className="btn-primary">
                    <span>Anfrage senden</span>
                    <span className="arrow" aria-hidden>
                      →
                    </span>
                  </button>
                </div>
              </form>
            </Reveal>

            <Reveal className="md:col-span-4 md:col-start-9">
              <div className="sticky top-32">
                <p className="caption text-ochre">Direktkontakt</p>
                <div className="mt-10 flex flex-col gap-10">
                  <div>
                    <p className="font-display text-[1.8rem] font-light italic leading-tight tracking-tightest text-walnut-deep">
                      {COMPANY.legal}
                    </p>
                    <p className="mt-4 text-[1rem] leading-relaxed text-stone-700">
                      {COMPANY.address.street}
                      <br />
                      {COMPANY.address.zip} {COMPANY.address.city}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 text-[1rem]">
                    <a
                      href={`tel:${COMPANY.contact.phone.replace(/[^\d+]/g, "")}`}
                      className="group flex items-baseline justify-between border-b border-walnut-deep/15 pb-3 text-walnut-deep transition-colors hover:text-ochre"
                    >
                      <span className="caption text-stone-500">Telefon</span>
                      <span>{COMPANY.contact.phone}</span>
                    </a>
                    <a
                      href={`mailto:${COMPANY.contact.email}`}
                      className="group flex items-baseline justify-between border-b border-walnut-deep/15 pb-3 text-walnut-deep transition-colors hover:text-ochre"
                    >
                      <span className="caption text-stone-500">E-Mail</span>
                      <span>{COMPANY.contact.email}</span>
                    </a>
                    <div className="flex items-baseline justify-between border-b border-walnut-deep/15 pb-3">
                      <span className="caption text-stone-500">Fax</span>
                      <span className="text-walnut-deep">
                        {COMPANY.contact.fax}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="caption text-stone-500">Öffnungszeiten</p>
                    <ul className="mt-5 flex flex-col gap-2 text-[0.96rem]">
                      {COMPANY.hours.map((h) => (
                        <li
                          key={h.label}
                          className="flex items-baseline justify-between gap-6"
                        >
                          <span className="text-stone-700">{h.label}</span>
                          <span className="font-mono text-[0.78rem] tracking-widest text-walnut-deep">
                            {h.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  id,
  type = "text",
  required = false,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={id}
      className="group flex flex-col gap-3 border-b border-walnut-deep/15 pb-3 transition-colors focus-within:border-ochre"
    >
      <span className="caption text-stone-500">
        {label}
        {required && <span className="text-ochre"> ·</span>}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="bg-transparent text-[1.12rem] text-walnut-deep outline-none placeholder:text-stone-300 focus:text-walnut-deep"
        placeholder=" "
      />
    </label>
  );
}

function TextareaField({ label, id }: { label: string; id: string }) {
  return (
    <label
      htmlFor={id}
      className="flex flex-col gap-3 border-b border-walnut-deep/15 pb-3 transition-colors focus-within:border-ochre"
    >
      <span className="caption text-stone-500">{label}</span>
      <textarea
        id={id}
        name={id}
        rows={5}
        className="resize-none bg-transparent text-[1.08rem] leading-relaxed text-walnut-deep outline-none placeholder:text-stone-300"
        placeholder="Was soll entstehen? Kurz in eigenen Worten …"
      />
    </label>
  );
}

function SelectField({ label, id }: { label: string; id: string }) {
  return (
    <label
      htmlFor={id}
      className="flex flex-col gap-3 border-b border-walnut-deep/15 pb-3 transition-colors focus-within:border-ochre"
    >
      <span className="caption text-stone-500">{label}</span>
      <select
        id={id}
        name={id}
        className="bg-transparent text-[1.08rem] text-walnut-deep outline-none"
        defaultValue=""
      >
        <option value="" disabled>
          Bereich wählen …
        </option>
        {BEREICHE.map((b) => (
          <option key={b.slug} value={b.slug}>
            {b.title}
          </option>
        ))}
        <option value="andere">Etwas anderes</option>
      </select>
    </label>
  );
}
