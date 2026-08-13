import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { CLASSES, IMAGES } from "@/lib/data";

export default function ClassesGrid() {
  return (
    <section className="bg-ink py-24 md:py-36">
      <div className="container-academy">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 md:mb-20">
          <SectionHeading
            eyebrow="Lessen"
            title="Vier niveaus, één doel: vooruitgang."
            description="Van je allereerste stoot tot professionele ringervaring, elk niveau bouwt voort op het vorige."
          />
          <Reveal delay={0.15}>
            <Link
              href="/lessen"
              className="hidden md:inline-flex items-center gap-2 font-label uppercase tracking-widest2 text-xs text-bone hover:text-bone-muted transition-colors group w-fit shrink-0"
            >
              Volledig lessenrooster
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CLASSES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <Link
                href={`/lessen#${c.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden clip-cut-md bg-surface"
              >
                <Image
                  src={IMAGES[c.image as keyof typeof IMAGES]}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover grayscale contrast-[1.1] brightness-[0.55] transition-transform duration-700 ease-academy group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

                <div className="relative h-full flex flex-col justify-end p-6">
                  <span className="font-label uppercase tracking-widest2 text-[11px] text-bone-muted mb-2">
                    {c.audience}
                  </span>
                  <h3 className="font-display text-2xl font-extrabold leading-tight mb-3">
                    {c.name}
                  </h3>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="font-label uppercase tracking-widest2 text-[11px] text-bone">
                      Bekijk les
                    </span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
