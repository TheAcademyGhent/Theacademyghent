import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { SITE, CONTACT } from "@/lib/constants";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: `Hoe ${SITE.name} omgaat met je persoonsgegevens, in overeenstemming met de AVG (GDPR).`,
  alternates: { canonical: "/privacybeleid" },
};

export default function PrivacybeleidPage() {
  return (
    <>
      <PageHero
        eyebrow="Juridisch"
        title="Privacyverklaring"
        description="Hoe we omgaan met je persoonsgegevens, in overeenstemming met de AVG (GDPR)."
        image={IMAGES.facility}
      />

      <section className="py-24 md:py-32">
        <div className="container-academy max-w-3xl">
          <p className="text-sm text-bone-muted mb-16">
            Laatst bijgewerkt: 13 augustus 2026
          </p>

          <div className="flex flex-col gap-14">
            <article>
              <h2 className="font-display text-2xl font-bold mb-4">1. Wie we zijn</h2>
              <p className="text-bone/90 leading-relaxed">
                {SITE.name} ({SITE.tagline}), gevestigd te {CONTACT.addressLine1},{" "}
                {CONTACT.addressLine2}, is verwerkingsverantwoordelijke voor de
                persoonsgegevens die via deze website worden verzameld. Vragen
                over deze verklaring kan je stellen via {CONTACT.email}.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">2. Welke gegevens we verzamelen</h2>
              <div className="flex flex-col gap-4 text-bone/90 leading-relaxed">
                <p>
                  <span className="font-semibold text-bone">Contactformulier:</span>{" "}
                  naam, e-mailadres, optioneel telefoonnummer en de inhoud van je
                  bericht, wanneer je het formulier op onze contactpagina invult.
                </p>
                <p>
                  <span className="font-semibold text-bone">Nieuwsbrief:</span> je
                  e-mailadres, wanneer je je hiervoor inschrijft via de footer van
                  de website.
                </p>
                <p>
                  <span className="font-semibold text-bone">Proefles en lidmaatschap:</span>{" "}
                  wanneer je een proefles boekt of een lidmaatschap aankoopt via
                  onze online agenda/webshop, verloopt dit via het platform van
                  Trainin. Trainin verzamelt en verwerkt daarbij gegevens zoals je
                  naam, e-mailadres, telefoonnummer en betaalgegevens rechtstreeks
                  namens {SITE.name}. Raadpleeg het privacybeleid van Trainin voor
                  meer informatie over hun verwerking.
                </p>
                <p>
                  <span className="font-semibold text-bone">Technische gegevens:</span>{" "}
                  onze hostingpartner Vercel verwerkt automatisch standaard
                  serverlogs (zoals IP-adres, tijdstip van bezoek en browsertype)
                  die inherent zijn aan het functioneren van een website.
                </p>
              </div>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">3. Waarom we deze gegevens verwerken</h2>
              <p className="text-bone/90 leading-relaxed">
                We gebruiken je gegevens om je vragen te beantwoorden, je
                inschrijving of proefles te verwerken, je op de hoogte te houden
                via de nieuwsbrief (indien je je hiervoor inschreef), en om onze
                website veilig en werkend te houden. We verkopen je gegevens nooit
                aan derden.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">4. Rechtsgrond</h2>
              <p className="text-bone/90 leading-relaxed">
                We verwerken je gegevens op basis van: je toestemming (bv. bij
                inschrijving voor de nieuwsbrief), de uitvoering van een
                overeenkomst (bv. bij een lidmaatschap of proefles), of ons
                gerechtvaardigd belang om vragen via het contactformulier te
                beantwoorden.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">5. Delen met derden</h2>
              <p className="text-bone/90 leading-relaxed mb-4">
                We delen gegevens enkel met partijen die noodzakelijk zijn om onze
                dienstverlening te laten werken:
              </p>
              <ul className="flex flex-col gap-2 text-bone/90 leading-relaxed list-disc list-inside">
                <li><span className="font-semibold text-bone">Trainin</span> — voor het beheer van proeflessen, lidmaatschappen en betalingen.</li>
                <li><span className="font-semibold text-bone">Vercel</span> — voor de hosting van deze website.</li>
                <li><span className="font-semibold text-bone">Google Maps</span> — voor het tonen van onze locatie op de contactpagina.</li>
              </ul>
              <p className="text-bone/90 leading-relaxed mt-4">
                Deze partijen verwerken gegevens volgens hun eigen privacybeleid
                en, waar van toepassing, in overeenstemming met een
                verwerkersovereenkomst met {SITE.name}.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">6. Bewaartermijn</h2>
              <p className="text-bone/90 leading-relaxed">
                Gegevens uit het contactformulier bewaren we niet langer dan nodig
                om je vraag te behandelen. Nieuwsbriefgegevens bewaren we tot je je
                uitschrijft. Gegevens verwerkt via Trainin worden bewaard volgens
                hun eigen bewaartermijnen en, voor zover relevant, de wettelijke
                boekhoudkundige bewaartermijnen.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">7. Cookies</h2>
              <p className="text-bone/90 leading-relaxed">
                Deze website plaatst zelf geen tracking- of analytische cookies.
                De ingesloten Google Maps-kaart op onze contactpagina en de
                online agenda van Trainin kunnen, als onderdeel van hun eigen
                werking, cookies plaatsen zodra je deze onderdelen laadt of
                gebruikt. Raadpleeg hiervoor het cookiebeleid van{" "}
                <a
                  href="https://policies.google.com/technologies/cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-bone-muted"
                >
                  Google
                </a>{" "}
                en Trainin.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">8. Jouw rechten</h2>
              <p className="text-bone/90 leading-relaxed mb-4">
                Onder de AVG (GDPR) heb je het recht op:
              </p>
              <ul className="flex flex-col gap-2 text-bone/90 leading-relaxed list-disc list-inside">
                <li>Inzage in je persoonsgegevens</li>
                <li>Correctie van onjuiste gegevens</li>
                <li>Verwijdering van je gegevens</li>
                <li>Beperking van de verwerking</li>
                <li>Bezwaar tegen de verwerking</li>
                <li>Overdraagbaarheid van je gegevens</li>
              </ul>
              <p className="text-bone/90 leading-relaxed mt-4">
                Om een van deze rechten uit te oefenen, neem contact op via{" "}
                {CONTACT.email}. Je hebt ook het recht om een klacht in te dienen
                bij de Belgische Gegevensbeschermingsautoriteit (
                <a
                  href="https://www.gegevensbeschermingsautoriteit.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-bone-muted"
                >
                  gegevensbeschermingsautoriteit.be
                </a>
                ).
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">9. Beveiliging</h2>
              <p className="text-bone/90 leading-relaxed">
                We nemen redelijke technische en organisatorische maatregelen om
                je gegevens te beschermen tegen verlies, misbruik of
                ongeoorloofde toegang.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">10. Wijzigingen</h2>
              <p className="text-bone/90 leading-relaxed">
                We kunnen deze privacyverklaring aanpassen. De datum bovenaan
                deze pagina geeft aan wanneer ze voor het laatst werd bijgewerkt.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">11. Contact</h2>
              <p className="text-bone/90 leading-relaxed">
                Vragen over deze privacyverklaring? Neem contact op via{" "}
                {CONTACT.email} of {CONTACT.addressLine1}, {CONTACT.addressLine2}.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
