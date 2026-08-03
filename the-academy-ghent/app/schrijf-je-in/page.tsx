import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import TrialForm from "@/components/forms/TrialForm";
import { IMAGES } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Schrijf je in",
  description:
    "Boek een gratis proefles bij The Academy Ghent. Kies je niveau en voorkeursmoment — we bevestigen binnen 24 uur.",
  alternates: { canonical: "/schrijf-je-in" },
};

const CHECKLIST = [
  "Geen ervaring nodig",
  "Materiaal gratis in leen",
  "Vrijblijvend en kosteloos",
  "Bevestiging binnen 24 uur",
];

export default function SchrijfJeInPage() {
  return (
    <>
      <PageHero
        eyebrow="Schrijf je in"
        title="Boek je gratis proefles."
        description="Beperkte plaatsen per les — vul het formulier in en we bevestigen je moment persoonlijk."
        image={IMAGES.enrollHero}
      />

      <section className="py-24 md:py-36">
        <div className="container-academy grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col gap-10">
            <SectionHeading
              eyebrow="Zo werkt het"
              title="Drie stappen naar je eerste training."
              size="md"
            />
            <Reveal delay={0.1}>
              <ol className="flex flex-col gap-6">
                {[
                  { title: "Vul het formulier in", text: "Kies je gewenste les en voorkeursmoment." },
                  { title: "Wij bevestigen", text: "Binnen 24 uur ontvang je een concreet lesmoment." },
                  { title: "Kom langs", text: "Sportkledij en water volstaan — de rest lenen we je." },
                ].map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="font-display text-2xl font-extrabold text-bone-muted/40 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-display font-bold">{step.title}</p>
                      <p className="text-sm text-bone-muted mt-1">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="border-t border-surface-hairline pt-8 flex flex-col gap-3">
                {CHECKLIST.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-bone-muted">
                    <CheckCircle2 size={16} className="text-bone-muted shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-8">
            <TrialForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
