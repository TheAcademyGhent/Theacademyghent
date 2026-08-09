import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import PricingCard from "@/components/sections/PricingCard";
import { MEMBERSHIPS, FAQ_MEMBERSHIP, IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Lidmaatschappen",
  description:
    "Bekijk de lidmaatschappen van The Academy Ghent: Starter, Unlimited en Performance. Maandelijks opzegbaar, geen verborgen kosten.",
  alternates: { canonical: "/lidmaatschappen" },
};

export default function LidmaatschappenPage() {
  return (
    <>
      <PageHero
        eyebrow="Lidmaatschappen"
        title="Investeer in jezelf, niet in een jaarcontract."
        description="Drie trajecten, één belofte: maandelijks opzegbaar, zonder verborgen kosten."
        image={IMAGES.membershipHero}
      />

      <section className="py-24 md:py-32">
        <div className="container-academy grid grid-cols-1 md:grid-cols-3 gap-5">
          {MEMBERSHIPS.map((tier, i) => (
            <Reveal key={tier.slug} delay={i * 0.08}>
              <PricingCard tier={tier} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-surface-hairline">
        <div className="container-academy">
          <SectionHeading eyebrow="Veelgestelde vragen" title="Nog vragen?" />
          <div className="mt-12">
            <Accordion items={FAQ_MEMBERSHIP} />
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-36">
        <div className="container-academy flex flex-col items-center text-center gap-6">
          <Reveal>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl max-w-xl">
              Twijfel je nog? Begin met een gratis proefles.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/schrijf-je-in" variant="primary" size="lg">
              Boek een gratis proefles
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
