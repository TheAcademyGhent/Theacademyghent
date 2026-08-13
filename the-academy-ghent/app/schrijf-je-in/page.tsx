import type { Metadata } from "next";
import Script from "next/script";
import PageHero from "@/components/sections/PageHero";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Schrijf je in",
  description:
    "Boek meteen een gratis proefles bij The Academy Ghent via onze online agenda — kies zelf je moment.",
  alternates: { canonical: "/schrijf-je-in" },
};
const CHECKLIST = [
  "Geen ervaring nodig",
  "Materiaal gratis in leen",
  "Vrijblijvend en kosteloos",
  "Directe bevestiging",
];
export default function SchrijfJeInPage() {
  return (
    <>
      <PageHero
        eyebrow="Schrijf je in"
        title="Boek je gratis proefles."
        description="Kies hieronder meteen een moment dat je uitkomt — geen formulier, geen wachttijd."
        image={IMAGES.enrollHero}
      />
      <section className="py-24 md:py-36">
        <div className="container-academy flex flex-col gap-12">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-bone-muted">
                  <CheckCircle2 size={16} className="text-bone-muted shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="clip-cut-md overflow-hidden border border-surface-hairline min-h-[650px]">
              <Script
                src="https://trainin.app/widget.js"
                data-base-domain="trainin.app"
                strategy="afterInteractive"
              />
              <trainin-widget
                client="the-academy-of-golden-gloves"
                widget-config-id="GzpTBeMTGDqz"
                widget-type="embedded_schedule"
                background-color="#161616"
                loader-color="#F3F2ED"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
