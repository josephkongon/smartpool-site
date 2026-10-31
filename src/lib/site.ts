import type { Locale } from "@/i18n/config";

// Contact details and links used across the site. Change them here and every
// page (header, footer, location card, juice page) picks up the new value.
export const site = {
  name: "Smartpool",
  phone: "+237 696 983 834",
  phoneHref: "tel:+237696983834",
  whatsappHref: "https://wa.me/237696983834",
  email: "smartpool2023@gmail.com",
  juiceEmail: "smartpooljuice2026@gmail.com",
  social: {
    instagram: "https://www.instagram.com/smartpool237",
    instagramQr: "https://www.instagram.com/smartpool237?stkn=MTdqamdkcm1hMGo2Mg%3D%3D&utm_source=qr",
    tiktok: "https://www.tiktok.com/@smart.pool8",
    facebook: "https://www.facebook.com/share/1DdRao3Dob/?mibextid=wwXIfr",
  },
} as const;

/** Nav entries; labels come from the dictionary (`nav.<key>`). */
export const navLinks = [
  { href: "/", key: "home" },
  { href: "/bar", key: "bar" },
  { href: "/restaurant", key: "restaurant" },
  { href: "/reserve", key: "reserve" },
  { href: "/juice", key: "juice" },
  { href: "/players", key: "players" },
  { href: "/gallery", key: "gallery" },
] as const;

export type NavKey = (typeof navLinks)[number]["key"];

/**
 * Formats a FCFA price. Done by hand rather than with toLocaleString so the
 * server-rendered HTML and the browser always produce identical text.
 * en: "1,000 FCFA" · fr: "1 000 FCFA"
 */
export function formatPrice(n: number, lang: Locale): string {
  const sep = lang === "fr" ? " " : ",";
  return `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep)} FCFA`;
}
