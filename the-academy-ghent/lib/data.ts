import { ClassLevel, Coach, MembershipTier, Testimonial, FaqItem, Stat } from "@/types";

// Alle foto's zijn tijdelijke, vrij te gebruiken placeholders (Unsplash-licentie).
// Vervang de URL's door eigen fotografie/video van de zaal, leden en coaches zodra beschikbaar.
export const IMAGES = {
  homeHero: "/images/hero-home.jpg"
  facility: "https://images.unsplash.com/photo-1716306886418-f84f6d4c2f3a?q=80&w=2000&auto=format&fit=crop",
  aboutHero: "https://images.unsplash.com/photo-1716307043003-dbe6a5cc496e?q=80&w=2400&auto=format&fit=crop",
  aboutSecondary: "https://images.unsplash.com/photo-1575747515871-2e323827539e?q=80&w=1600&auto=format&fit=crop",
  coachesBanner: "https://images.unsplash.com/photo-1726867863287-aba3393812d0?q=80&w=2400&auto=format&fit=crop",
  membershipHero: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2000&auto=format&fit=crop",
  contactHero: "https://images.unsplash.com/photo-1716307046875-4c4ba2f43cab?q=80&w=2400&auto=format&fit=crop",
  enrollHero: "https://images.unsplash.com/photo-1651707999601-cba87015439c?q=80&w=2400&auto=format&fit=crop",
  closingCta: "https://images.unsplash.com/photo-1557564437-0995702f88fc?q=80&w=2000&auto=format&fit=crop",
  classBeginners: "https://images.unsplash.com/photo-1636581563867-1ecab574858f?q=80&w=1600&auto=format&fit=crop",
  classRecreatief: "https://images.unsplash.com/photo-1636302925863-6ad504baaf3c?q=80&w=1600&auto=format&fit=crop",
  classCompetitie: "https://images.unsplash.com/photo-1517438322307-e67111335449?q=80&w=1600&auto=format&fit=crop",
  classJeugd: "https://images.unsplash.com/photo-1633394782368-6e7260566004?q=80&w=1600&auto=format&fit=crop",
};

export const STATS: Stat[] = [
  { value: "600", label: "m² trainingsruimte" },
  { value: "12+", label: "jaar ervaring" },
  { value: "4", label: "gediplomeerde coaches" },
  { value: "500+", label: "actieve leden" },
];

export const CLASSES: ClassLevel[] = [
  {
    slug: "beginners",
    name: "Boks Basics",
    audience: "Beginners — 16+",
    description:
      "Geen ervaring? Geen probleem. Je leert de basisstand, voetenwerk en de vier basisstoten in een rustig tempo, in een groep van gelijkgestemde starters. Geen contact, wél zweet.",
    duration: "60 min",
    intensity: 2,
    focus: ["Techniek", "Houding", "Conditie"],
    image: "classBeginners",
  },
  {
    slug: "recreatief",
    name: "Boks Fit",
    audience: "Recreanten — alle niveaus",
    description:
      "De populairste les van de zaal. Combinatie van techniek, bokstrainingen op de zak en intervalconditie. Zwaar genoeg om écht resultaat te zien, toegankelijk genoeg om vol te houden.",
    duration: "60 min",
    intensity: 3,
    focus: ["Conditie", "Techniek", "Kracht"],
    image: "classRecreatief",
  },
  {
    slug: "performance",
    name: "Performance",
    audience: "Competitieboksers",
    description:
      "Voor wie wil sparren en wedstrijden wil boksen. Tactiek, ringervaring en begeleide sparringsessies onder toezicht van onze hoofdcoach, met een traject richting officiële wedstrijden.",
    duration: "90 min",
    intensity: 4,
    focus: ["Sparring", "Tactiek", "Wedstrijdklaar"],
    image: "classCompetitie",
  },
  {
    slug: "jeugd",
    name: "Junior Boxing",
    audience: "Jeugd — 8 tot 15 jaar",
    description:
      "Discipline, coördinatie en zelfvertrouwen in een veilige, gestructureerde omgeving. Onze jeugdcoaches leggen de nadruk op techniek en respect, niet op harde klappen.",
    duration: "45 min",
    intensity: 2,
    focus: ["Coördinatie", "Discipline", "Plezier"],
    image: "classJeugd",
  },
];

export const COACHES: Coach[] = [
  {
    slug: "yassine-el-amrani",
    name: "Yassine El Amrani",
    role: "Hoofdcoach & oprichter",
    bio: "Voormalig Belgisch amateurkampioen met meer dan 12 jaar ervaring als coach. Yassine bouwde The Academy op vanuit de overtuiging dat techniek en discipline voor iedereen toegankelijk moeten zijn — niet enkel voor wedstrijdboksers.",
    credentials: ["VTBB-gediplomeerd trainer B", "Ex-competitiebokser, 45 partijen", "12 jaar coachingervaring"],
  },
  {
    slug: "sarah-de-clerck",
    name: "Sarah De Clerck",
    role: "Hoofdcoach Boks Fit",
    bio: "Sarah combineert een achtergrond in beweging en coaching met een passie voor boksen als fitness. Ze begeleidt de meeste volwassen recreanten en is de drijvende kracht achter Boks Fit.",
    credentials: ["VTBB-gediplomeerd trainer B", "Bachelor Sport & Bewegen", "6 jaar coachingervaring"],
  },
  {
    slug: "milan-van-hecke",
    name: "Milan Van Hecke",
    role: "Coach Performance & Sparring",
    bio: "Milan begeleidt onze competitieboksers richting wedstrijden. Nauwgezet in techniek, streng in tactiek — en de eerste die klaarstaat in de hoek op wedstrijddag.",
    credentials: ["VTBB-gediplomeerd trainer A", "Actief competitiebokser", "Ringcoach bij 20+ wedstrijden"],
  },
  {
    slug: "els-verhoeven",
    name: "Els Verhoeven",
    role: "Coach Junior Boxing",
    bio: "Els geeft al 5 jaar les aan onze jongste leden. Ze weet als geen ander hoe je discipline en plezier combineert, zonder ooit het respect voor de sport uit het oog te verliezen.",
    credentials: ["VTBB-gediplomeerd jeugdtrainer", "5 jaar ervaring met jeugdreeksen"],
  },
];

export const MEMBERSHIPS: MembershipTier[] = [
  {
    slug: "starter",
    name: "Starter",
    price: "€59",
    billing: "/ maand",
    idealFor: "Voor wie het wil proberen, 1x per week",
    features: [
      "1 les per week",
      "Toegang tot Boks Basics & Boks Fit",
      "Gratis intake & materiaal in leen",
      "Geen opstartkosten",
    ],
  },
  {
    slug: "unlimited",
    name: "Unlimited",
    price: "€89",
    billing: "/ maand",
    idealFor: "Voor wie er echt voor gaat",
    features: [
      "Onbeperkt trainen",
      "Toegang tot alle groepslessen",
      "Persoonlijk voortgangsgesprek per kwartaal",
      "Geen opstartkosten",
    ],
    featured: true,
  },
  {
    slug: "performance",
    name: "Performance",
    price: "€129",
    billing: "/ maand",
    idealFor: "Voor competitieboksers",
    features: [
      "Onbeperkt trainen + sparringsessies",
      "Persoonlijke wedstrijdbegeleiding",
      "Voorrang bij wedstrijdinschrijvingen",
      "Individuele technieksessies",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Tom Vermeulen",
    role: "Lid sinds 2023 — Boks Fit",
    quote:
      "Ik kwam voor de conditie en bleef voor de community. Na een jaar train ik drie keer per week en heb ik meer zelfvertrouwen dan ooit — op en naast de mat.",
  },
  {
    name: "Nora Haddad",
    role: "Lid sinds 2024 — Boks Basics",
    quote:
      "Nooit gedacht dat ik als 34-jarige zonder sportverleden zou beginnen met boksen. De coaches maakten het drempelloos. Nu is het het hoogtepunt van mijn week.",
  },
  {
    name: "Kobe Dhondt",
    role: "Competitiebokser — Performance",
    quote:
      "De begeleiding hier is op niveau van een topclub, maar met de warmte van een familie. Milan kent elke tegenstander beter voor te bereiden dan ikzelf.",
  },
];

export const FAQ_MEMBERSHIP: FaqItem[] = [
  {
    question: "Heb ik ervaring nodig om te starten?",
    answer:
      "Nee. Onze Boks Basics-lessen zijn specifiek ontworpen voor complete beginners. De meeste van onze leden hadden nul bokservaring voor ze bij ons startten.",
  },
  {
    question: "Wat moet ik meebrengen naar mijn eerste les?",
    answer:
      "Sportkledij, een handdoek en water. Handschoenen en bandages kan je gratis lenen tijdens je eerste lessen — pas nadien raden we aan eigen materiaal aan te schaffen.",
  },
  {
    question: "Wat is de opzegtermijn?",
    answer:
      "Al onze lidmaatschappen zijn maandelijks opzegbaar met een opzegtermijn van 1 maand. Geen jaarcontracten, geen verborgen kosten.",
  },
  {
    question: "Kan ik eerst een gratis proefles doen?",
    answer:
      "Zeker. Via 'Schrijf je in' kan je een gratis proefles boeken in de les naar keuze, volledig vrijblijvend.",
  },
];

export const SCHEDULE = [
  {
    day: "Maandag",
    sessions: [
      { time: "18:00", name: "Boks Basics" },
      { time: "19:15", name: "Boks Fit" },
      { time: "20:30", name: "Performance" },
    ],
  },
  {
    day: "Dinsdag",
    sessions: [
      { time: "17:00", name: "Junior Boxing" },
      { time: "18:30", name: "Boks Fit" },
      { time: "20:00", name: "Performance" },
    ],
  },
  {
    day: "Woensdag",
    sessions: [
      { time: "12:00", name: "Boks Fit" },
      { time: "18:00", name: "Boks Basics" },
      { time: "19:15", name: "Boks Fit" },
    ],
  },
  {
    day: "Donderdag",
    sessions: [
      { time: "17:00", name: "Junior Boxing" },
      { time: "18:30", name: "Performance" },
      { time: "20:00", name: "Boks Fit" },
    ],
  },
  {
    day: "Vrijdag",
    sessions: [
      { time: "18:00", name: "Boks Basics" },
      { time: "19:00", name: "Boks Fit" },
    ],
  },
  {
    day: "Zaterdag",
    sessions: [
      { time: "10:00", name: "Boks Fit" },
      { time: "11:15", name: "Junior Boxing" },
    ],
  },
];

export const FEATURE_MATRIX: { feature: string; starter: string; unlimited: string; performance: string }[] = [
  { feature: "Lessen per week", starter: "1", unlimited: "Onbeperkt", performance: "Onbeperkt" },
  { feature: "Toegang Boks Basics & Boks Fit", starter: "✓", unlimited: "✓", performance: "✓" },
  { feature: "Toegang Performance-lessen", starter: "—", unlimited: "Optioneel", performance: "✓" },
  { feature: "Sparringsessies", starter: "—", unlimited: "—", performance: "✓" },
  { feature: "Persoonlijke wedstrijdbegeleiding", starter: "—", unlimited: "—", performance: "✓" },
  { feature: "Materiaal in leen bij opstart", starter: "✓", unlimited: "✓", performance: "✓" },
  { feature: "Opzegtermijn", starter: "1 maand", unlimited: "1 maand", performance: "1 maand" },
];

export const VALUES = [
  {
    title: "Discipline",
    description: "Boksen leert je verschijnen, ook wanneer het moeilijk is. Dat principe dragen we uit in elke les.",
  },
  {
    title: "Respect",
    description: "Voor je coach, je trainingspartner en jezelf. Zonder respect geen vooruitgang — in de ring of daarbuiten.",
  },
  {
    title: "Doorzetting",
    description: "Techniek komt met herhaling. We vieren de kleine progressie net zo hard als de grote overwinning.",
  },
  {
    title: "Gemeenschap",
    description: "Je traint alleen naast anderen, nooit alleen. De zaal is een plek waar mensen elkaar naar boven trekken.",
  },
];

export const WHY_US = [
  {
    title: "600 m² volledig uitgerust",
    description:
      "Een van de grootste en best uitgeruste bokszalen van Gent — ringen, bokszakken, spiegelwanden en een aparte krachtruimte.",
  },
  {
    title: "Gediplomeerde coaches",
    description:
      "Elke coach is VTBB-gecertificeerd en heeft zelf competitie-ervaring. Geen zelfverklaarde experts, wel bewezen expertise.",
  },
  {
    title: "Voor elk niveau",
    description:
      "Van complete beginner tot competitiebokser: onze lessenreeks is gestructureerd zodat je op je eigen tempo kan groeien.",
  },
  {
    title: "Community die blijft",
    description:
      "Meer dan de helft van onze leden traint hier al langer dan een jaar. Geen toevalligheid — wel een plek waar mensen zich thuis voelen.",
  },
];
