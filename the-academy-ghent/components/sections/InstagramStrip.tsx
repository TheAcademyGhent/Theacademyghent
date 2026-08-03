import Image from "next/image";
import { Instagram } from "lucide-react";
import { IMAGES } from "@/lib/data";
import { SOCIALS } from "@/lib/constants";

const strip = [
  IMAGES.classCompetitie,
  IMAGES.facility,
  IMAGES.classRecreatief,
  IMAGES.coachesBanner,
  IMAGES.classBeginners,
  IMAGES.membershipHero,
];

export default function InstagramStrip() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="container-academy flex items-center justify-between mb-8">
        <h2 className="font-display text-xl md:text-2xl font-bold">Volg de zaal</h2>
        <a
          href={SOCIALS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-label uppercase tracking-widest2 text-xs text-bone-muted hover:text-bone transition-colors"
        >
          <Instagram size={16} strokeWidth={1.5} />
          @theacademyghent
        </a>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2">
        {strip.map((src, i) => (
          <a
            key={i}
            href={SOCIALS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src={src}
              alt="The Academy Ghent op Instagram"
              fill
              sizes="(max-width: 768px) 33vw, 16vw"
              className="object-cover grayscale contrast-[1.1] brightness-[0.6] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors flex items-center justify-center">
              <Instagram
                size={18}
                strokeWidth={1.5}
                className="text-bone opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
