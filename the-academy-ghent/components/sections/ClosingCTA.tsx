import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/data";
import { CTA_HREF } from "@/lib/constants";

export default function ClosingCTA() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.closingCta}
          alt="Trainingsmateriaal bij The Academy Ghent"
          fill
          sizes="100vw"
          className="object-cover grayscale contrast-[1.1] brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-ink/60" />
      </div>

      <div className="container-academy relative z-10 flex flex-col items-center text-center gap-8">
        <Reveal>
          <h2 className="font-display font-extrabold uppercase leading-[0.95] tracking-tight text-4xl md:text-6xl lg:text-7xl max-w-4xl">
            Je eerste stap zet je vandaag.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-md text-bone-muted text-base md:text-lg">
            Boek een gratis proefles en ervaar zelf waarom leden blijven.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Button href={CTA_HREF} variant="primary" size="lg">
            Boek een gratis proefles
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
