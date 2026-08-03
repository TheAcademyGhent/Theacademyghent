import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PricingCard from "./PricingCard";
import { MEMBERSHIPS } from "@/lib/data";

export default function MembershipTeaser() {
  return (
    <section className="bg-ink py-24 md:py-36">
      <div className="container-academy flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
        <SectionHeading
          eyebrow="Lidmaatschappen"
          title="Kies het traject dat bij je past."
          description="Geen jaarcontracten, geen verborgen kosten. Elke maand opzegbaar."
        />
        <Reveal delay={0.15}>
          <Link
            href="/lidmaatschappen"
            className="hidden md:inline-flex items-center gap-2 font-label uppercase tracking-widest2 text-xs text-bone hover:text-bone-muted transition-colors group w-fit shrink-0"
          >
            Volledig overzicht
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>

      <div className="container-academy grid grid-cols-1 md:grid-cols-3 gap-5">
        {MEMBERSHIPS.map((tier, i) => (
          <Reveal key={tier.slug} delay={i * 0.08}>
            <PricingCard tier={tier} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
