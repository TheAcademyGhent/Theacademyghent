// Pas de PLACEHOLDER-waarden hieronder aan met de echte gegevens van de club.

export const SITE = {
  name: "The Academy Ghent",
  shortName: "TAG",
  tagline: "The Academy of Golden Gloves",
  description:
    "Premium boksschool in Gent voor beginners, recreanten en competitieboksers. 600 m² volledig uitgeruste trainingsruimte, ervaren coaches, een community die je verder brengt.",
  url: "https://theacademyghent.be", // PLACEHOLDER domeinnaam
};

export const CONTACT = {
  addressLine1: "Hurstweg 8", // PLACEHOLDER adres
  addressLine2: "9000 Gent, België",
  mapQuery: "Hurstweg 8, 9000 Gent, België", // PLACEHOLDER voor Google Maps embed
  email: "info@theacademyghent.be", // PLACEHOLDER
  whatsapp: "https://wa.me/3290000000", // PLACEHOLDER
};

export const HOURS = [
  { day: "Maandag", hours: "17:00 – 21:00" },
  { day: "Dinsdag", hours: "17:00 – 21:00" },
  { day: "Woensdag", hours: "17:00 – 21:00" },
  { day: "Donderdag", hours: "17:00 – 21:00" },
  { day: "Vrijdag", hours: "17:00 – 21:00" },
  { day: "Zaterdag", hours: "09:00 – 12:00" },
  { day: "Zondag", hours: "Gesloten" },
];

export const SOCIALS = {
  instagram: "https://instagram.com/theacademyghent", // PLACEHOLDER
  facebook: "https://facebook.com/theacademyghent", // PLACEHOLDER
  tiktok: "https://tiktok.com/@theacademyghent", // PLACEHOLDER
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Lessen", href: "/lessen" },
  { label: "Coaches", href: "/coaches" },
  { label: "Lidmaatschappen", href: "/lidmaatschappen" },
  { label: "Contact", href: "/contact" },
];

export const SHOP_URL = "https://the-academy-of-golden-gloves.trainin.app/shop";

// De primaire "Schrijf je in"-call-to-action wijst naar de externe Trainin-webshop.
// De interne agenda-pagina (/schrijf-je-in) blijft bestaan, maar wordt niet langer
// als primaire bestemming gelinkt vanuit de knoppen.
export const CTA_HREF = SHOP_URL;
