import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-surface py-24 md:py-36 border-y border-surface-hairline">
      <div className="container-academy">
        <SectionHeading eyebrow="Wat leden zeggen" title="Uit de zaal, niet uit een brochure." align="center" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="h-full flex flex-col gap-6 p-8 bg-ink border border-surface-hairline clip-cut-sm">
                <Quote size={24} strokeWidth={1.25} className="text-bone-muted" />
                <p className="text-bone text-base leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-surface-hairline">
                  <div className="font-display text-sm font-bold">{t.name}</div>
                  <div className="font-label uppercase tracking-widest2 text-[10px] text-bone-muted mt-1">
                    {t.role}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
