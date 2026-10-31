import type { GameSlot } from "@/lib/types";

// Gaming & Billard prices — from the official "Gaming & Billard" menu.
// `description` and `unit` are shown to visitors, so each has an en and fr version.
export const games: GameSlot[] = [
  {
    type: "billiard",
    name: "Billard 8 ft",
    description: { en: "3 SmartPool tokens", fr: "3 jetons SmartPool" },
    price: 1000,
    unit: { en: "per session", fr: "la session" },
  },
  {
    type: "billiard",
    name: "Billard 9 ft",
    description: { en: "30-minute session", fr: "Session de 30 min" },
    price: 2000,
    unit: { en: "per 30 min", fr: "les 30 min" },
  },
  {
    type: "playstation",
    name: "PlayStation Games",
    description: { en: "1 hour of PS gaming", fr: "1 heure de jeu sur PS" },
    price: 2000,
    unit: { en: "per hour", fr: "l’heure" },
  },
  {
    type: "other",
    name: "Ludo",
    description: { en: "Board game session", fr: "Partie de jeu de société" },
    price: 2000,
    unit: { en: "per 2 hours", fr: "les 2 heures" },
  },
  {
    type: "chicha",
    name: "Menthe Simple",
    description: { en: "Single-flavour mint shisha", fr: "Chicha à la menthe, saveur simple" },
    price: 3000,
    unit: { en: "per session", fr: "la session" },
  },
  {
    type: "chicha",
    name: "Menthe Double",
    description: { en: "Double mint shisha", fr: "Chicha double menthe" },
    price: 5000,
    unit: { en: "per session", fr: "la session" },
  },
  {
    type: "chicha",
    name: "Love",
    description: { en: "Love-flavour shisha", fr: "Chicha saveur Love" },
    price: 5000,
    unit: { en: "per session", fr: "la session" },
  },
];
