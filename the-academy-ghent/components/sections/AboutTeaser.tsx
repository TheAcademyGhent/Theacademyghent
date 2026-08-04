import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CutFrame from "@/components/ui/CutFrame";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/data";

export default function AboutTeaser() {
  return (
    <section className="bg-ink py-24 md:py-36">
      <div className="container-academy grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Reveal className="lg:col-span-6 order-2 lg:order-1">
          <CutFrame
            src={IMAGES.facility}
            alt="600 m² trainingsruimte bij The Academy Ghent"
            cut="lg"
            className="aspect-[4/5]"
          />
        </Reveal>

        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-8">
          <SectionHeading
            eyebrow="Over The Academy"
            title="Een echte boksschool, geen fitness-trend."
            description="600 m² volledig uitgeruste trainingsruimte in het hart van Gent. Wij geloven dat boksen écht boksen, met techniek en tucht toegankelijk moet zijn voor iedereen die bereid is te werken."
          />
          <Reveal delay={0.1}>
            <Link
              href="/over-ons"
              className="inline-flex items-center gap-2 font-label uppercase tracking-widest2 text-xs text-bone hover:text-bone-muted transition-colors group w-fit"
            >
              Meer over ons
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
