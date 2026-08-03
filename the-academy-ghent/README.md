# The Academy Ghent — website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Donker, minimalistisch
ontwerp met het TAG-logo als basis: het diagonale "cut corner"-motief uit het
logo komt terug als signature-element op kaarten, knoppen en beeldkaders.

## Lokaal draaien

Vereist: [Node.js](https://nodejs.org) 18 of hoger.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Live zetten

Makkelijkste weg: zet dit project op GitHub en importeer het op
[vercel.com](https://vercel.com) (gratis voor dit soort site). Vercel bouwt
en publiceert automatisch bij elke push.

Alternatief: `npm run build && npm run start` op eender welke Node-hosting.

## Wat je nog moet vervangen

Alles hieronder is placeholder-content, duidelijk gemarkeerd met `PLACEHOLDER`
in de code:

- **`lib/constants.ts`** — echt adres, telefoonnummer, e-mailadres,
  openingsuren en social media-links.
- **`lib/data.ts`** — coachnamen/bio's, exacte prijzen, lesrooster en
  testimonials zijn fictief en dienen als voorbeeld. Vervang door de echte
  gegevens van de club.
- **Foto's/video** — alle beelden zijn gratis Unsplash-placeholders (zie
  `IMAGES` in `lib/data.ts`), automatisch in grijstinten gefilterd zodat ze
  visueel samenhangen. Vervang de URL's door eigen fotografie/video van de
  zaal, lessen en leden. De hero op de homepage (`components/sections/Hero.tsx`)
  leent zich goed voor een videoclip in plaats van een foto — vervang de
  `<Image>` door een `<video autoPlay muted loop playsInline>`.
- **Coach-foto's** — bewust weggelaten. Coaches tonen nu een monogram
  (initialen) in plaats van een stockfoto, om geen willekeurige personen
  als fictieve coach af te beelden. Zodra je eigen coachfoto's hebt, voeg je
  een `image`-veld toe aan `Coach` in `types/index.ts` en pas je
  `components/sections/CoachCard.tsx` aan.
- **Formulieren** — `app/api/contact/route.ts` en `app/api/enroll/route.ts`
  loggen binnenkomende aanvragen nu enkel naar de server-console. Koppel ze
  aan een echte e-mailservice (bv. [Resend](https://resend.com)) zodat
  aanvragen ook effectief ergens toekomen.
- **Domeinnaam** — `SITE.url` in `lib/constants.ts`, gebruikt voor SEO
  (sitemap, canonical URL's, Open Graph).
- **Google Maps** — `CONTACT.mapQuery` gebruikt nu een placeholder-adres.

## Structuur

```
app/                 Pagina's (App Router) + API routes
  page.tsx           Home
  over-ons/          Over ons
  lessen/            Lessen
  coaches/           Coaches
  lidmaatschappen/   Lidmaatschappen
  contact/           Contact
  schrijf-je-in/     Schrijf je in (proeflesaanvraag)
  api/               Route handlers voor de formulieren
components/
  layout/            Header, mobiel menu, footer
  sections/          Herbruikbare pagina-secties
  ui/                Basis UI-bouwstenen (Button, Reveal, CutFrame, ...)
  forms/             Formulieren (client components)
lib/
  constants.ts       Site-brede instellingen (adres, navigatie, socials)
  data.ts            Content: lessen, coaches, prijzen, testimonials
types/               Gedeelde TypeScript-types
```

## Belangrijk

Dit project werd geschreven in een omgeving zonder internettoegang, dus
`npm install` / `npm run build` konden hier niet uitgevoerd worden om alles
live te testen. De code is grondig nagekeken (syntax-check op alle 41
bestanden geslaagd, imports/exports gekruist gecontroleerd), maar voer bij
het eerste gebruik zeker `npm run build` lokaal uit en controleer de console
op eventuele TypeScript-strictness-meldingen.
