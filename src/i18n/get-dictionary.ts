import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, localizePath, locales, type Locale } from "./config";
import type { Dictionary } from "./dictionaries/en";
import en from "./dictionaries/en";
import fr from "./dictionaries/fr";

export type { Dictionary } from "./dictionaries/en";

const dictionaries = { en, fr };

export const getDictionary = (lang: Locale) => dictionaries[lang];

/** Validates the `[lang]` route param (404 for anything else) and returns it with its dictionary. */
export async function resolveLang(params: Promise<{ lang: string }>): Promise<{ lang: Locale; t: Dictionary }> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { lang, t: dictionaries[lang] };
}

/** Per-page metadata with hreflang alternates pointing at the other language. */
export function pageMetadata(lang: Locale, path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: localizePath(lang, path),
      languages: Object.fromEntries(locales.map((l) => [l, localizePath(l, path)])),
    },
    openGraph: { title, description, locale: lang === "fr" ? "fr_CM" : "en_CM", siteName: "Smartpool" },
  };
}
