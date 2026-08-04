import { ClassLevel, Coach, MembershipTier, Testimonial, FaqItem, Stat } from "@/types";

// Alle foto's zijn tijdelijke, vrij te gebruiken placeholders (Unsplash-licentie).
// Vervang de URL's door eigen fotografie/video van de zaal, leden en coaches zodra beschikbaar.
export const IMAGES = {
  homeHero: "/images/hero-home.jpg",
  facility: "/images/DSC00408.jpg",
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
  { value: "640", label: "m² trainingsruimte" },
  { value: "39+", label: "jaar ervaring" },
  { value: "4", label: "gediplomeerde coaches" },
  { value: "300+", label: "actieve leden" },
];

export const CLASSES: ClassLevel[] = [
  {
    slug: "beginners",
    name: "Start to box",
    audience: "Beginners — 16+",
    description:
      "Geen ervaring? Geen probleem. Je leert de basisstand, voetenwerk en de fundamenten van het boksen in een rustig tempo, in een groep van gelijkgestemde starters. Geen contact, wél zweet.",
    duration: "60 min",
    intensity: 2,
    focus: ["Techniek", "Houding", "Conditie"],
    image: "classBeginners",
  },
  {
    slug: "recreatief",
    name: "All Levels",
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
    audience: "Jeugd 7 tot 12 jaar",
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
    slug: "Kenny De Bruycker",
    name: "Kenny De Bruycker",
    role: "Hoofdcoach & oprichter",
    bio: "Kenny De Bruycker is sinds 6 jaar hoofdcoach van The Academy Ghent en daarnaast Nationaal Elite Coach van Team Belgium. Hij begeleidt boksers van recreatief niveau tot de nationale top, met een sterke focus op techniek, discipline en prestaties."
    credentials: ["6 jaar Hoofdcoach, Team Belgium Elite, Technische Expertise, Topsportbegeleiding"],
  },
  {
    slug: "Peter Blauwers",
    name: "Peter Blauwers",
    role: "Coach All levels & Conditioning",
    bio: "Peter Blauwers is een vaste waarde binnen onze werking. Al jarenlang maakt hij deel uit van de club, eerst als bokser en vandaag als coach. Met zijn ervaring, loyaliteit en betrokkenheid is hij een onmisbare kracht binnen het team.",
    credentials: ["gediplomeerd trainer B", "10+ jaar coachingervaring"],
  },
  {
    slug: "Erwin Taildeman",
    name: "Erwin Taildeman",
    role: "Coach Performance & All levels",
    bio: "Erwin begeleidt onze competitieboksers richting wedstrijden. Nauwgezet in techniek, streng in tactiek en staat altijd klaar in de hoek op wedstrijddag.",
    credentials: ["gediplomeerd trainer A", "Ringcoach bij 100+ wedstrijden"],
  },
  {
    slug: "Ekram Sarrokh",
    name: "Ekram Sarrokh",
    role: "Oprichter / Coach Junior Boxing & Crossfit",
    bio: "Ekram Sarrokh is medeoprichtster en een gediplomeerd CrossFit-coach met jarenlange ervaring in personal training & small group training. Ze begeleidt sporters met een sterke focus op kracht, conditie en duurzame progressie.",
    credentials: ["gediplomeerd jeugdtrainer", "5 jaar ervaring met jeugdreeksen", "gediplomeerd Crossfit coach"],
  },
];

export const MEMBERSHIPS: MembershipTier[] = [
  {
    slug: "Junior Boxing ",
    name: "Junior Boxing",
    price: "€40",
    billing: "/ maand",
    idealFor: "2x per week",
    features: [
      "2 les per week",
      
     "Gratis intake & materiaal in leen",
      "Geen opstartkosten",
    ],
  },
  {
    slug: "unlimited 18+",
    name: "Unlimited 18+",
    price: "€45",
    billing: "/ maand",
    idealFor: "Voor wie er echt voor gaat",
    features: [
      "Onbeperkt trainen",
      "Toegang tot alle groepslessen",
      "Geen opstartkosten",
      
    ],
    featured: true,
  },
  {
    slug: "Beurtenkaart",
    name: "Beurtenkaart",
    price: "€140",
    billing: "/ 6maand Geldig",
    idealFor: "Flexibel trainen, zonder abonnement",
    features: [
      "10 losse trainingen",
      "6maand geldig",
      
      
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
