import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CutFrame from "@/components/ui/CutFrame";
import Button from "@/components/ui/Button";
import { IMAGES, VALUES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Ontdek het verhaal van The Academy Ghent: 600 m² trainingsruimte, gediplomeerde coaches en een missie om boksen toegankelijk te maken voor iedereen.",
  alternates: { canonical: "/over-ons" },
};

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Over ons"
        title="Gebouwd op techniek, tucht en tijd."
        description="The Academy Ghent ontstond uit één overtuiging: boksen verdient een plek waar het serieus, maar toegankelijk wordt onderwezen."
        image={IMAGES.aboutHero}
      />

      <section className="py-24 md:py-36">
        <div className="container-academy grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Ons verhaal" title="Van een kleine zaal naar het hart van het Belgische boksen.
Gebouwd vanuit passie. Gegroeid door ambitie.
Een jonge club met een rijke geschiedenis." />
          </div>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="flex flex-col gap-6 text-bone-muted text-base md:text-lg leading-relaxed">
              <p>
               The Academy Ghent opende in 2020 de deuren met één duidelijke ambitie: een plek
                creëren waar mensen konden groeien via boksen, krachttraining, CrossFit en
                persoonlijke begeleiding. We begonnen in een kleine zaal, tijdens enkele van de
                moeilijkste jaren voor de sportwereld. Toch bouwden we daar onze eerste community en onze identiteit op.
              </p>
              <p>
                Al snel groeide The Academy Ghent uit tot een vaste waarde in Gent voor iedereen
                die écht wilde leren boksen. Vanuit die passie ontwikkelden we ons verder en
                groeiden we uit tot een toonaangevende club in Gent en omstreken op het vlak van competitie.
                Wat begon als een kleine zaal, werd een club met een duidelijke visie en grote ambities.
              </p>
              <p>
                In 2025 gingen we een fusie aan met Golden Gloves, één van de oudste boksclubs van België, opgericht in 1987.
                Uit die samenwerking ontstond The Academy of Golden Gloves: een combinatie van een moderne visie, een nieuwe generatie en een rijke boksgeschiedenis.
                Vandaag beschikken we over een van de best uitgeruste faciliteiten voor het Engels boksen in België klaar om de volgende generatie boksers te begeleiden.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-36">
        <div className="container-academy">
          <Reveal>
            <CutFrame
              src={IMAGES.aboutSecondary}
              alt="De ring in de 600 m² trainingsruimte van The Academy Ghent"
              cut="lg"
              className="aspect-[16/9] md:aspect-[21/9]"
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-36">
        <div className="container-academy">
          <SectionHeading eyebrow="Onze waarden" title="Wat we uitdragen, binnen en buiten de ring." align="center" />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-surface-hairline border border-surface-hairline">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="bg-ink">
                <div className="p-8 h-full flex flex-col gap-4">
                  <span className="h-px w-8 bg-bone-muted" />
                  <h3 className="font-display text-xl font-bold">{v.title}</h3>
                  <p className="text-bone-muted text-sm leading-relaxed">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-36">
        <div className="container-academy flex flex-col items-center text-center gap-6">
          <Reveal>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl max-w-xl">
              Maak kennis met de mensen achter The Academy.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/coaches" variant="secondary" size="lg">
              Ontmoet de coaches
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
