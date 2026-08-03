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
            <SectionHeading eyebrow="Ons verhaal" title="Van een lege loods tot 600 m² Gentse bokstraditie." />
          </div>
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="flex flex-col gap-6 text-bone-muted text-base md:text-lg leading-relaxed">
              <p>
                The Academy Ghent startte in 2014 in een bescheiden ruimte met
                twee bokszakken en de overtuiging dat elke Gentenaar — jong of
                oud, ervaren of complete beginner — de kans moest krijgen om
                écht te leren boksen.
              </p>
              <p>
                Meer dan tien jaar later trainen we in een van de best
                uitgeruste bokszalen van de stad: 600 m² met volwaardige
                ringen, een uitgebreide bokszakvloer, spiegelwanden voor
                techniekwerk en een aparte krachtruimte. Wat niet veranderd
                is: de aandacht van onze coaches voor elk individueel lid,
                ongeacht niveau.
              </p>
              <p>
                Vandaag trainen hier beginners naast competitieboksers,
                tieners naast veertigers. Die mix is geen toeval — het is
                precies wat een goede boksschool volgens ons moet zijn.
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
