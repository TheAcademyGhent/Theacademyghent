import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/forms/ContactForm";
import { CONTACT, HOURS } from "@/lib/constants";
import { IMAGES } from "@/lib/data";
import { MapPin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met The Academy Ghent. Kom langs, bel of mail — we helpen je graag op weg naar je eerste bokstraining.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Kom langs in de zaal."
        description="Vragen over lessen, lidmaatschap of gewoon eens binnenspringen? We horen graag van je."
        image={IMAGES.contactHero}
      />

      <section className="py-24 md:py-36">
        <div className="container-academy grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Bericht sturen" title="Stel je vraag." />
            <Reveal delay={0.1} className="mt-10">
              <ContactForm />
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-10">
            <Reveal>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} strokeWidth={1.5} className="text-bone-muted mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm">{CONTACT.addressLine1}</p>
                    <p className="text-sm text-bone-muted">{CONTACT.addressLine2}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} strokeWidth={1.5} className="text-bone-muted mt-0.5 shrink-0" />
                  <a href={`mailto:${CONTACT.email}`} className="text-sm hover:text-bone-muted transition-colors">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="border-t border-surface-hairline pt-8">
                <span className="font-label uppercase tracking-widest2 text-xs text-bone-muted block mb-4">
                  Openingsuren
                </span>
                <div className="flex flex-col gap-2">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-bone-muted">{h.day}</span>
                      <span>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18} className="clip-cut-md overflow-hidden border border-surface-hairline aspect-[4/3]">
              <iframe
                title="Locatie The Academy Ghent"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.9)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
