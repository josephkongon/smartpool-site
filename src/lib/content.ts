import { cache } from "react";
import { connection } from "next/server";
import type { Locale, Localized } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

// Gallery and juice content comes from the rating app, which owns the admin screens,
// the images and the signing. Fetched per request because signed image URLs expire.
// If it cannot be reached, pages still render with the dictionary's default text.

type TextMap = Record<string, Localized>;

export interface GalleryContent {
  text: TextMap;
  hero: string | null;
  photos: { id: string; src: string; thumb: string; size: string | null }[];
}

export interface JuiceContent {
  text: TextMap;
  hero: string | null;
  lineup: string | null;
  posters: { id: string; src: string; thumb: string; alt: Localized }[];
  flavors: {
    id: string;
    name: Localized;
    description: Localized;
    tag: Localized;
    price: number | null;
    image: string | null;
  }[];
}

const load = cache(async (page: "gallery" | "juice"): Promise<unknown> => {
  await connection();
  try {
    const base = (process.env.CONTENT_API_URL ?? "").replace(/\/+$/, "");
    const res = await fetch(`${base}/api/site/${page}`, { cache: "no-store", signal: AbortSignal.timeout(10_000) });
    if (!res.ok) throw new Error(`status ${res.status}`);
    return await res.json();
  } catch (e) {
    console.error(`Could not load ${page} content:`, e);
    return null;
  }
});

export const galleryContent = async () => (await load("gallery")) as GalleryContent | null;
export const juiceContent = async () => (await load("juice")) as JuiceContent | null;

/** A dictionary section with the text saved by administrators applied over it. */
export function withText<S extends "gallery" | "juice">(section: Dictionary[S], text: TextMap | undefined, lang: Locale): Dictionary[S] {
  const merged: Record<string, unknown> = { ...section };
  for (const [field, value] of Object.entries(text ?? {})) if (value[lang]) merged[field] = value[lang];
  return merged as Dictionary[S];
}
