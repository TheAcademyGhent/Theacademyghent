"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { IMAGES } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.homeHero}
          alt="Bokser traint intensief op de bokszak bij The Academy Ghent"
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale contrast-[1.1] brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />
      </div>

      <div className="container-academy relative z-10 pb-24 pt-40 md:pb-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="font-label uppercase tracking-widest2 text-xs text-bone-muted flex items-center gap-3 mb-6"
        >
          <span className="h-px w-8 bg-bone-muted" />
          Gent · Sinds 2014
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="font-display font-extrabold uppercase leading-[0.95] tracking-tight text-[13vw] md:text-[7vw] lg:text-[6.5vw] max-w-5xl"
        >
          Boksen zoals
          <br />
          het hoort.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease }}
          className="mt-7 max-w-md text-bone-muted text-base md:text-lg leading-relaxed"
        >
          Van eerste stoot tot ringervaring. The Academy Ghent is de plek waar
          techniek, discipline en gemeenschap samenkomen, voor iedereen die
          het menens is.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/schrijf-je-in" variant="primary" size="lg">
            Boek een gratis proefles
          </Button>
          <Button href="/lessen" variant="secondary" size="lg">
            Ontdek de lessen
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden md:flex absolute bottom-10 right-10 z-10 flex-col items-center gap-3"
      >
        <span className="font-label uppercase tracking-widest2 text-[10px] text-bone-muted [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-14 w-px bg-gradient-to-b from-bone-muted to-transparent" />
      </motion.div>
    </section>
  );
}
