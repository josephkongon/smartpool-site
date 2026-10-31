"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { formatPrice } from "@/lib/site";
import type { GameSlot, GameType } from "@/lib/types";
import LazyImage from "./LazyImage";

const TABS: { type: GameType; banner: string; ball: string }[] = [
  { type: "billiard", banner: "/img/hero-3-rack.jpg", ball: "b2" },
  { type: "playstation", banner: "/img/hero-4-action.jpg", ball: "b8" },
  { type: "other", banner: "/img/team-group.jpg", ball: "b1" },
  { type: "chicha", banner: "/img/staff-seated.jpg", ball: "b3" },
];

interface GameTabsProps {
  games: GameSlot[];
  lang: Locale;
  labels: Record<GameType, string>;
}

export default function GameTabs({ games, lang, labels }: GameTabsProps) {
  const [active, setActive] = useState<GameType>("billiard");
  const tab = TABS.find((t) => t.type === active) ?? TABS[0];
  const items = games.filter((g) => g.type === active && g.available !== false);

  return (
    <>
      <div className="game-tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.type}
            role="tab"
            id={`tab-${t.type}`}
            aria-selected={t.type === active}
            aria-controls="game-panel"
            className={t.type === active ? "tab active" : "tab"}
            onClick={() => setActive(t.type)}
          >
            <span className={`mini-ball ${t.ball}`} aria-hidden="true"></span>
            {labels[t.type]}
          </button>
        ))}
      </div>

      <div className="game-panel" id="game-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
        {/* Keyed so only the active tab's banner is ever requested. */}
        <div className="tab-banner img-frame" key={tab.banner}>
          <LazyImage src={tab.banner} alt="" />
          <span className="tab-banner-label">{labels[active]}</span>
        </div>
        <div className="game-grid">
          {items.map((g) => (
            <div className="game-card" key={g.name}>
              <h3>{g.name}</h3>
              <p className="desc">{g.description[lang]}</p>
              <div className="bottom">
                <span className="price-tag">{formatPrice(g.price, lang)}</span>
                <span className="unit">{g.unit[lang]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
