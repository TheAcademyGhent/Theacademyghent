import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import PricingCard from "@/components/sections/PricingCard";
import { MEMBERSHIPS, FEATURE_MATRIX, FAQ_MEMBERSHIP, IMAGES } from "@/lib/data";

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
          <SectionHeading eyebrow="Vergelijk" title="Welk lidmaatschap past bij je?" />

          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-surface-hairline">
                  <th className="text-left py-4 pr-6 font-label uppercase tracking-widest2 text-[11px] text-bone-muted font-medium">
                    Kenmerk
                  </th>
                  {MEMBERSHIPS.map((tier) => (
                    <th
                      key={tier.slug}
                      className="text-left py-4 px-6 font-display text-base font-bold whitespace-nowrap"
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_MATRIX.map((row) => (
                  <tr key={row.feature} className="border-b border-surface-hairline">
                    <td className="py-4 pr-6 text-sm text-bone-muted">{row.feature}</td>
                    <td className="py-4 px-6 text-sm">{row.starter}</td>
                    <td className="py-4 px-6 text-sm">{row.unlimited}</td>
                    <td className="py-4 px-6 text-sm">{row.performance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
