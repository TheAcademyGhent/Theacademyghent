export interface ClassLevel {
  slug: string;
  name: string;
  audience: string;
  description: string;
  duration: string;
  intensity: 1 | 2 | 3 | 4;
  focus: string[];
  image: string;
}

export interface Coach {
  slug: string;
  name: string;
  role: string;
  bio: string;
  credentials: string[];
}

export interface MembershipTier {
  slug: string;
  name: string;
  price: string;
  billing: string;
  idealFor: string;
  features: string[];
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}
