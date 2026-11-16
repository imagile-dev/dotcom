/**
 * Where to follow along, in display order. One list feeds the home page,
 * the footer and the JSON-LD sameAs arrays, so the order stays the same
 * everywhere. Source of truth for handles: Notion › Channels & Socials Hub.
 */
export interface Social {
  label: string;
  /** Simple Icons name, rendered with astro-icon. */
  icon: string;
  /** Accessible name for icon-only links. */
  name: string;
  handle: string;
  href: string;
  /** Who the profile belongs to, for JSON-LD sameAs. */
  owner: 'company' | 'person';
}

export const socials: Social[] = [
  { label: 'LinkedIn', icon: 'simple-icons:linkedin', name: 'Imagile on LinkedIn', handle: 'Imagile', href: 'https://www.linkedin.com/company/imagile-dev', owner: 'company' },
  { label: 'LinkedIn', icon: 'simple-icons:linkedin', name: 'Sunny on LinkedIn', handle: 'Sunny Kolattukudy', href: 'https://www.linkedin.com/in/sunnyjk', owner: 'person' },
  { label: 'X', icon: 'simple-icons:x', name: 'Sunny on X', handle: '@kolatts', href: 'https://x.com/kolatts', owner: 'person' },
  { label: 'YouTube', icon: 'simple-icons:youtube', name: 'Imagile on YouTube', handle: '@ImagileConsulting', href: 'https://www.youtube.com/@ImagileConsulting', owner: 'company' },
  { label: 'Instagram', icon: 'simple-icons:instagram', name: 'Sunny on Instagram', handle: '@sunnykolattukudy', href: 'https://www.instagram.com/sunnykolattukudy', owner: 'person' },
  { label: 'TikTok', icon: 'simple-icons:tiktok', name: 'Imagile on TikTok', handle: '@imagileconsulting', href: 'https://www.tiktok.com/@imagileconsulting', owner: 'company' },
];
