import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { CLASSES, IMAGES, SCHEDULE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Lessen",
  description:
    "Bekijk alle bokslessen bij The Academy Ghent: Boks Basics, Boks Fit, Performance en Junior Boxing. Inclusief het volledige weekrooster.",
  alternates: { canonical: "/lessen" },
};

export default function LessenPage() {
  return (
    <>
      <PageHero
        eyebrow="Lessen"
        title="Vier niveaus. Eén lessenrooster."
        description="Kies het niveau dat bij je past — of groei ernaartoe. Elke les wordt begeleid door een gediplomeerde coach."
        image={IMAGES.classCompetitie}
      />

      <nav className="sticky top-24 md:top-28 z-30 bg-ink/90 backdrop-blur-md border-b border-surface-hairline">
        <div className="container-academy flex items-center gap-8 overflow-x-auto no-scrollbar h-16">
          {CLASSES.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="font-label uppercase tracking-widest2 text-xs text-bone-muted hover:text-bone transition-colors whitespace-nowrap"
            >
              {c.name}
            </a>
          ))}
        </div>
      </nav>

      {CLASSES.map((c, i) => (
        <section
          key={c.slug}
          id={c.slug}
          className="py-24 md:py-32 scroll-mt-36 border-b border-surface-hairline"
        >
          <div className="container-academy grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal
              className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <div className="relative aspect-[4/5] clip-cut-lg overflow-hidden bg-surface">
                <Image
                  src={IMAGES[c.image as keyof typeof IMAGES]}
                  alt={c.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover grayscale contrast-[1.08] brightness-[0.75]"
                />
              </div>
            </Reveal>

            <div className={`lg:col-span-7 flex flex-col gap-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <SectionHeading eyebrow={c.audience} title={c.name} description={c.description} />

              <Reveal delay={0.1}>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-2">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-label uppercase tracking-widest2 text-[10px] text-bone-muted">
                      Duur
                    </span>
                    <span className="text-sm">{c.duration}</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-label uppercase tracking-widest2 text-[10px] text-bone-muted">
                      Intensiteit
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((n) => (
                        <span
                          key={n}
                          className={`h-1.5 w-5 ${n <= c.intensity ? "bg-bone" : "bg-surface-hairline"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-label uppercase tracking-widest2 text-[10px] text-bone-muted">
                      Focus
                    </span>
                    <span className="text-sm">{c.focus.join(" · ")}</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <Button href="/schrijf-je-in" variant="primary" size="md" className="w-fit">
                  Boek een proefles
                </Button>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 md:py-36">
        <div className="container-academy">
          <SectionHeading eyebrow="Weekrooster" title="Plan je week." align="center" />

          <div className="mt-16 overflow-x-auto">
            <div className="grid grid-cols-6 min-w-[720px] gap-px bg-surface-hairline border border-surface-hairline">
              {SCHEDULE.map((d) => (
                <div key={d.day} className="bg-ink p-5 flex flex-col gap-4">
                  <span className="font-label uppercase tracking-widest2 text-xs text-bone-muted">
                    {d.day}
                  </span>
                  <div className="flex flex-col gap-3">
                    {d.sessions.map((s) => (
                      <div key={s.time} className="flex flex-col gap-0.5">
                        <span className="font-display text-sm font-bold">{s.time}</span>
                        <span className="text-xs text-bone-muted">{s.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-xs text-bone-muted">
            Rooster onder voorbehoud van wijzigingen. Actuele planning steeds
            zichtbaar in de ledenapp na inschrijving.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-36">
        <div className="container-academy flex flex-col items-center text-center gap-6">
          <Reveal>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl max-w-xl">
              Niet zeker welk niveau bij je past?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-bone-muted max-w-md">
              Boek een gratis proefles en onze coaches adviseren je ter plekke het juiste startpunt.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <Button href="/schrijf-je-in" variant="primary" size="lg">Boek een gratis proefles</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
