import { Maximize2, ShieldCheck, TrendingUp, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { WHY_US } from "@/lib/data";

const icons = [Maximize2, ShieldCheck, TrendingUp, Users];

export default function WhyUs() {
  return (
    <section className="bg-ink py-24 md:py-36">
      <div className="container-academy">
        <SectionHeading
          eyebrow="Waarom The Academy"
          title="Gebouwd op techniek. Gedreven door discipline."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-hairline border border-surface-hairline">
          {WHY_US.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title} delay={i * 0.08} className="bg-ink">
                <div className="p-8 md:p-12 h-full flex flex-col gap-5">
                  <Icon size={28} strokeWidth={1.25} className="text-bone-muted" />
                  <h3 className="font-display text-xl md:text-2xl font-bold">{item.title}</h3>
                  <p className="text-bone-muted text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
