import type { Localized } from "@/i18n/config";

export type MenuCategory = "bar" | "restaurant";

export interface MenuItem {
  subcategory: string;
  name: string;
  description: string;
  /** Price in FCFA. */
  price: number;
  /** Not shown on the menu pages yet; kept so photos can be added later. */
  image: string | null;
  /** Set to false to hide an item (e.g. out of stock) without deleting it. */
  available?: boolean;
}

export type GameType = "billiard" | "playstation" | "other" | "chicha";

export interface GameSlot {
  type: GameType;
  name: string;
  description: Localized;
  /** Price in FCFA. */
  price: number;
  unit: Localized;
  available?: boolean;
}
