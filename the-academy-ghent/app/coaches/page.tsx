import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CoachCard from "@/components/sections/CoachCard";
import { COACHES, IMAGES } from "@/lib/data";
import { CTA_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Coaches",
  description:
    "Maak kennis met de gediplomeerde coaches van The Academy Ghent — van hoofdcoach tot jeugdtrainer, allen met eigen competitie-ervaring.",
  alternates: { canonical: "/coaches" },
};

export default function CoachesPage() {
  return (
    <>
      <PageHero
        eyebrow="Coaches"
        title="Begeleid door mensen die het zelf deden."
        description="Elke coach bij The Academy is gediplomeerd én heeft zelf op competitieniveau gebokst. Geen theorie zonder praktijk."
        image={IMAGES.coachesBanner}
      />

      <section className="py-24 md:py-36">
        <div className="container-academy">
          <SectionHeading eyebrow="Het team" title="Vier coaches, één filosofie." />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {COACHES.map((coach, i) => (
              <Reveal key={coach.slug} delay={i * 0.08}>
                <CoachCard coach={coach} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-36">
        <div className="container-academy flex flex-col items-center text-center gap-6">
          <Reveal>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl max-w-xl">
              Train onder hun begeleiding.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href={CTA_HREF} variant="primary" size="lg">
              Boek een gratis proefles
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
