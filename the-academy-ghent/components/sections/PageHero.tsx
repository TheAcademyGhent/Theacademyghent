import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
}

export default function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative h-[62vh] min-h-[440px] flex items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale contrast-[1.1] brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/40" />
      </div>

      <div className="container-academy relative z-10 pb-16 pt-32">
        <Eyebrow className="mb-5">{eyebrow}</Eyebrow>
        <h1 className="font-display font-extrabold uppercase leading-[0.95] tracking-tight text-4xl md:text-6xl lg:text-7xl max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-lg text-bone-muted text-base md:text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
