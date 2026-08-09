import Link from "next/link";
import Image from "next/image";
import { CONTACT, HOURS, NAV_ITEMS, SOCIALS, SITE, CTA_HREF } from "@/lib/constants";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-surface-hairline bg-ink">
      <div className="container-academy py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 flex flex-col gap-6">
          <Image
            src="/images/tag-lockup.png"
            alt={`${SITE.name} — ${SITE.tagline}`}
            width={320}
            height={84}
            className="h-16 w-auto object-contain"
          />
          <p className="text-bone-muted text-sm leading-relaxed max-w-xs">
            {SITE.description}
          </p>
          <div className="flex items-center gap-4">
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-bone-muted hover:text-bone transition-colors">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-bone-muted hover:text-bone transition-colors">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <span className="font-label uppercase tracking-widest2 text-xs text-bone-muted">Navigatie</span>
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-bone hover:text-bone-muted transition-colors w-fit">
                {item.label}
              </Link>
            ))}
            <Link href={CTA_HREF} className="text-sm text-bone hover:text-bone-muted transition-colors w-fit">
              Schrijf je in
            </Link>
          </nav>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <span className="font-label uppercase tracking-widest2 text-xs text-bone-muted">Contact</span>
          <div className="flex flex-col gap-2 text-sm text-bone">
            <span>{CONTACT.addressLine1}</span>
            <span>{CONTACT.addressLine2}</span>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-bone-muted transition-colors">{CONTACT.email}</a>
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col gap-4">
          <span className="font-label uppercase tracking-widest2 text-xs text-bone-muted">Openingsuren</span>
          <div className="flex flex-col gap-1.5 text-sm">
            {HOURS.map((h) => (
              <div key={h.day} className="flex justify-between gap-4 text-bone-muted">
                <span>{h.day}</span>
                <span className="text-bone">{h.hours}</span>
              </div>
            ))}
          </div>
          <div className="mt-2">
            <span className="font-label uppercase tracking-widest2 text-xs text-bone-muted block mb-3">
              Blijf op de hoogte
            </span>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-surface-hairline">
        <div className="container-academy py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-bone-muted">
          <span>© {new Date().getFullYear()} {SITE.name}. Alle rechten voorbehouden.</span>
          <div className="flex items-center gap-6">
            <span>Privacybeleid</span>
            <span>Algemene voorwaarden</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
