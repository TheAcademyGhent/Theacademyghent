import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CoachCard from "./CoachCard";
import { COACHES } from "@/lib/data";

export default function CoachesCarousel() {
  return (
    <section className="bg-ink py-24 md:py-36 overflow-hidden">
      <div className="container-academy flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
        <SectionHeading
          eyebrow="Onze coaches"
          title="Begeleid door mensen die het zelf deden."
        />
        <Reveal delay={0.15}>
          <Link
            href="/coaches"
            className="hidden md:inline-flex items-center gap-2 font-label uppercase tracking-widest2 text-xs text-bone hover:text-bone-muted transition-colors group w-fit shrink-0"
          >
            Alle coaches
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>

      <div className="container-academy overflow-x-auto no-scrollbar">
        <div className="flex gap-6 snap-x snap-mandatory">
          {COACHES.map((coach, i) => (
            <Reveal
              key={coach.slug}
              delay={i * 0.06}
              className="w-[72vw] sm:w-[42vw] lg:w-[23vw] shrink-0 snap-start"
            >
              <CoachCard coach={coach} compact />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
