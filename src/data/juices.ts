import type { Localized } from "@/i18n/config";

export interface JuiceFlavor {
  name: Localized;
  image: string;
  description: Localized;
  tag: Localized;
  /** Price in FCFA per 200ml bottle. Leave null until it's set — shown as "price coming soon". */
  price: number | null;
}

// Pineapple Ginger and Pineapple Nectar descriptions were written from the
// product name and photo: their label sheets carry another flavour's text.
export const juiceFlavors: JuiceFlavor[] = [
  {
    name: { en: "Mango Cocktail", fr: "Cocktail Mangue" },
    image: "/img/juice/sp-juice-mango-cocktail.jpg",
    description: {
      en: "Ripe mangoes, juicy pineapple and passion fruit blended into one vibrant tropical cocktail.",
      fr: "Mangues mûres, ananas juteux et fruit de la passion réunis dans un cocktail tropical éclatant.",
    },
    tag: { en: "Mango · Pineapple · Passion Fruit", fr: "Mangue · Ananas · Fruit de la passion" },
    price: null,
  },
  {
    name: { en: "Pineapple Ginger", fr: "Ananas Gingembre" },
    image: "/img/juice/sp-juice-pineapple-ginger.jpg",
    description: {
      en: "Pineapple and ginger blended for a naturally sweet drink with a spicy kick.",
      fr: "Ananas et gingembre pour une boisson naturellement douce, relevée d’une touche épicée.",
    },
    tag: { en: "Supports digestion & eases nausea", fr: "Favorise la digestion & apaise les nausées" },
    price: null,
  },
  {
    name: { en: "Soursop", fr: "Corossol" },
    image: "/img/juice/sp-juice-soursop.jpg",
    description: {
      en: "The unique creamy taste of fresh soursop, perfectly balanced for a naturally smooth and refreshing experience.",
      fr: "Le goût crémeux unique du corossol frais, parfaitement équilibré pour une expérience douce et rafraîchissante.",
    },
    tag: { en: "Soursop", fr: "Corossol" },
    price: null,
  },
  {
    name: { en: "Guava", fr: "Goyave" },
    image: "/img/juice/sp-juice-guava.jpg",
    description: { en: "Pink guava, sweet with a gentle tang.", fr: "Goyave rose, sucrée avec une légère acidité." },
    tag: { en: "Guava", fr: "Goyave" },
    price: null,
  },
  {
    name: { en: "Pineapple Nectar", fr: "Nectar d’Ananas" },
    image: "/img/juice/sp-juice-pineapple-nectar.jpg",
    description: {
      en: "Pure, smooth pineapple nectar — naturally sweet, nothing else needed.",
      fr: "Un nectar d’ananas pur et onctueux — naturellement sucré, rien d’autre.",
    },
    tag: { en: "Pineapple", fr: "Ananas" },
    price: null,
  },
  {
    name: { en: "Baobab Milk", fr: "Lait de Baobab" },
    image: "/img/juice/sp-juice-baobab-milk.jpg",
    description: {
      en: "A creamy, naturally tangy drink made from baobab fruit.",
      fr: "Une boisson crémeuse et naturellement acidulée à base de fruit du baobab.",
    },
    tag: { en: "Baobab", fr: "Baobab" },
    price: null,
  },
  {
    name: { en: "Cocktail", fr: "Cocktail" },
    image: "/img/juice/sp-juice-cocktail.jpg",
    description: {
      en: "A tropical mix of orange, pineapple, watermelon and guava.",
      fr: "Un mélange tropical d’orange, d’ananas, de pastèque et de goyave.",
    },
    tag: { en: "Orange · Pineapple · Watermelon · Guava", fr: "Orange · Ananas · Pastèque · Goyave" },
    price: null,
  },
  {
    name: { en: "Pineapple Passion", fr: "Ananas Passion" },
    image: "/img/juice/sp-juice-pineapple-passion.jpg",
    description: {
      en: "Juicy pineapple with a tart burst of passion fruit.",
      fr: "Ananas juteux relevé d’une note acidulée de fruit de la passion.",
    },
    tag: { en: "Pineapple · Passion Fruit", fr: "Ananas · Fruit de la passion" },
    price: null,
  },
  {
    name: { en: "Mango", fr: "Mangue" },
    image: "/img/juice/sp-juice-mango.jpg",
    description: {
      en: "The rich sweetness of ripe mangoes — smooth, tropical and naturally refreshing.",
      fr: "La douceur généreuse des mangues mûres — onctueux, tropical et naturellement rafraîchissant.",
    },
    tag: { en: "Mango", fr: "Mangue" },
    price: null,
  },
];
