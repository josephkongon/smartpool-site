export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

/** Text that exists in every supported language. */
export type Localized<T = string> = Record<Locale, T>;

/** Prefixes an internal path with the locale: ("fr", "/bar") → "/fr/bar", ("fr", "/#location") → "/fr#location". */
export function localizePath(lang: Locale, path: string): string {
  if (path === "/") return `/${lang}`;
  if (path.startsWith("/#")) return `/${lang}${path.slice(1)}`;
  return `/${lang}${path}`;
}

/** Removes the leading locale segment: "/fr/bar" → "/bar", "/fr" → "/". */
export function stripLocale(pathname: string): string {
  const rest = pathname.replace(/^\/(en|fr)(?=\/|$)/, "");
  return rest === "" ? "/" : rest;
}

/** Key the language switcher stores the visitor's choice under; the root redirect reads it. */
export const LOCALE_STORAGE_KEY = "smartpool-lang";
