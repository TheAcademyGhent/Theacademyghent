import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { SITE, CONTACT } from "@/lib/constants";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: `Algemene voorwaarden van ${SITE.name}, van toepassing op elk lidmaatschap en elk bezoek aan onze trainingsruimte.`,
  alternates: { canonical: "/algemene-voorwaarden" },
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <PageHero
        eyebrow="Juridisch"
        title="Algemene voorwaarden"
        description="Van toepassing op elk lidmaatschap, elke proefles en elk bezoek aan onze trainingsruimte."
        image={IMAGES.facility}
      />

      <section className="py-24 md:py-32">
        <div className="container-academy max-w-3xl">
          <p className="text-sm text-bone-muted mb-16">
            Laatst bijgewerkt: 13 augustus 2026
          </p>

          <div className="flex flex-col gap-14">
            <article>
              <h2 className="font-display text-2xl font-bold mb-4">1. Toepassingsgebied</h2>
              <p className="text-bone/90 leading-relaxed">
                Deze algemene voorwaarden zijn van toepassing op elk lidmaatschap,
                elke proefles, elke inschrijving en elk bezoek aan {SITE.name}
                ({SITE.tagline}), gevestigd te {CONTACT.addressLine1}, {CONTACT.addressLine2}.
                Door je in te schrijven of onze trainingsruimte te betreden, verklaar
                je je akkoord met deze voorwaarden. Afwijkingen zijn enkel geldig
                indien schriftelijk bevestigd door {SITE.name}.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">2. Lidmaatschap en inschrijving</h2>
              <p className="text-bone/90 leading-relaxed">
                Een lidmaatschap gaat in vanaf de datum van inschrijving en het
                gekozen type (Starter, Unlimited of Performance), zoals beschreven
                op onze website. Inschrijving is persoonlijk en niet overdraagbaar
                aan derden. {SITE.name} behoudt zich het recht voor een inschrijving
                te weigeren, bijvoorbeeld bij onvolledige of onjuiste gegevens.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">3. Proefles</h2>
              <p className="text-bone/90 leading-relaxed">
                Een gratis proefles is eenmalig per persoon en vrijblijvend: ze
                verplicht je niet tot een lidmaatschap. Een proefles boek je via
                de website of ter plaatse, in de mate van de beschikbare plaatsen
                per les.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">4. Duur en opzegging</h2>
              <p className="text-bone/90 leading-relaxed">
                Lidmaatschappen lopen van maand tot maand en worden stilzwijgend
                verlengd, tenzij tijdig opgezegd. Opzeggen kan op elk moment, met
                een opzegtermijn van één maand ingaand vanaf de eerstvolgende
                factureringsdatum. Opzeggen gebeurt schriftelijk, per e-mail naar{" "}
                {CONTACT.email}. Reeds vervallen en betaalde maandbedragen worden
                niet terugbetaald.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">5. Betaling</h2>
              <p className="text-bone/90 leading-relaxed">
                Lidgelden zijn maandelijks verschuldigd via de op de website
                vermelde betaalwijze. Bij niet-betaling op de vervaldag behoudt{" "}
                {SITE.name} zich het recht voor de toegang tot de trainingsruimte
                tijdelijk op te schorten tot de openstaande som is voldaan.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">6. Gebruik van de faciliteiten en huisregels</h2>
              <p className="text-bone/90 leading-relaxed">
                Leden gebruiken de trainingsruimte, materiaal en uitrusting met
                zorg en respect voor andere leden en coaches. Instructies van
                coaches dienen te allen tijde opgevolgd te worden, in het bijzonder
                bij sparring en het gebruik van bokszakken, ringen en toestellen.
                {SITE.name} kan de toegang weigeren aan personen die zich niet aan
                de huisregels houden of het genot van andere leden verstoren.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">7. Gezondheid, veiligheid en aansprakelijkheid</h2>
              <p className="text-bone/90 leading-relaxed mb-4">
                Boksen en aanverwante sporten (waaronder CrossFit en krachttraining)
                brengen een inherent risico op fysiek letsel met zich mee. Elk lid
                verklaart fysiek in staat te zijn om deel te nemen aan de lessen en
                raadpleegt bij twijfel vooraf een arts. Deelname gebeurt steeds op
                eigen risico.
              </p>
              <p className="text-bone/90 leading-relaxed">
                {SITE.name} en haar coaches zijn niet aansprakelijk voor
                lichamelijk letsel, blessures of schade aan persoonlijke bezittingen,
                behoudens in geval van opzet of grove fout in hoofde van{" "}
                {SITE.name}. Niets in deze voorwaarden beperkt aansprakelijkheid
                die niet bij overeenkomst kan worden uitgesloten onder Belgisch recht.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">8. Minderjarigen</h2>
              <p className="text-bone/90 leading-relaxed">
                Voor leden jonger dan 18 jaar (o.a. Junior Boxing) is uitdrukkelijke
                toestemming van een ouder of wettelijke voogd vereist bij inschrijving.
                Ouders/voogden blijven verantwoordelijk voor het brengen en ophalen
                van minderjarige leden, tenzij anders overeengekomen.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">9. Beeldmateriaal</h2>
              <p className="text-bone/90 leading-relaxed">
                {SITE.name} kan tijdens trainingen of evenementen foto&apos;s en
                video&apos;s maken voor gebruik op de website en sociale media. Wie
                niet herkenbaar in beeld wenst te komen, meldt dit vooraf per
                e-mail aan {CONTACT.email}, waarna hiermee rekening wordt gehouden.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">10. Intellectuele eigendom</h2>
              <p className="text-bone/90 leading-relaxed">
                Alle content op deze website — waaronder teksten, logo&apos;s,
                lesprogramma&apos;s en beeldmateriaal — is eigendom van {SITE.name}
                en mag niet zonder voorafgaande schriftelijke toestemming worden
                gekopieerd of verspreid.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">11. Overmacht</h2>
              <p className="text-bone/90 leading-relaxed">
                Bij overmacht (o.a. brand, waterschade, overheidsmaatregelen) kan{" "}
                {SITE.name} lessen tijdelijk opschorten zonder recht op
                schadevergoeding voor leden, met uitzondering van een evenredige
                verlenging of compensatie van het lidmaatschap in redelijkheid.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">12. Wijziging van de voorwaarden</h2>
              <p className="text-bone/90 leading-relaxed">
                {SITE.name} kan deze voorwaarden en de lidmaatschapstarieven
                aanpassen. Wijzigingen worden minstens één maand vooraf
                gecommuniceerd via de website of per e-mail, en gelden vanaf de
                eerstvolgende factureringsperiode.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">13. Toepasselijk recht en geschillen</h2>
              <p className="text-bone/90 leading-relaxed">
                Op deze voorwaarden is uitsluitend Belgisch recht van toepassing.
                Geschillen worden bij voorkeur in der minne geregeld; bij gebreke
                daarvan zijn de rechtbanken van het gerechtelijk arrondissement
                Oost-Vlaanderen, afdeling Gent, bevoegd.
              </p>
            </article>

            <article>
              <h2 className="font-display text-2xl font-bold mb-4">14. Contact</h2>
              <p className="text-bone/90 leading-relaxed">
                Vragen over deze algemene voorwaarden? Neem contact op via{" "}
                {CONTACT.email} of {CONTACT.addressLine1}, {CONTACT.addressLine2}.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
