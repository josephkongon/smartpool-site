import type { ReactNode } from "react";
import LazyImage from "./LazyImage";

interface PageHeroProps {
  eyebrow: ReactNode;
  title: string;
  image?: string;
  children?: ReactNode;
}

export default function PageHero({ eyebrow, title, image, children }: PageHeroProps) {
  return (
    <section className={image ? "page-hero" : "page-hero no-image"}>
      <div className="wrap page-hero-grid">
        <div className="page-hero-copy">
          <p className="kicker">{eyebrow}</p>
          <h1>{title}</h1>
          {children}
        </div>
        {/* Above the fold, so it loads right away rather than lazily. */}
        {image && (
          <div className="page-hero-media img-frame">
            <LazyImage eager src={image} alt="" />
          </div>
        )}
      </div>
    </section>
  );
}
