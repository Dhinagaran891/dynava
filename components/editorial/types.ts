export interface EditorialCTA {
  label: string;
  href: string;
}

export interface EditorialStage {
  id: number;

  slug: string;

  eyebrow: string;

  lineOne: string;

  lineTwo: string;

  description: string;

  timeline: string;

  cta?: EditorialCTA;
}