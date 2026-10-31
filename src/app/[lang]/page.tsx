import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import LazyImage from "@/components/LazyImage";
import RichText from "@/components/RichText";
import SectionHead from "@/components/SectionHead";
import { localizePath } from "@/i18n/config";
import { resolveLang } from "@/i18n/get-dictionary";
import { site } from "@/lib/site";

const heroSlides = [
  "/img/hero-1-cue.jpg",
  "/img/hero-4-action.jpg",
  "/img/hero-3-rack.jpg",
  "/img/player-male.jpg",
  "/img/hero-2-register.jpg",
  "/img/gallery/gallery-18.jpg",
  "/img/gallery/gallery-47.jpg",
  "/img/gallery/gallery-54.jpg",
  "/img/gallery/gallery-29.jpg",
  "/img/gallery/gallery-61.jpg",
  "/img/gallery/gallery-38.jpg",
  "/img/gallery/gallery-63.jpg",
];

// Order matches `home.services` in the dictionaries. `tone` picks the tile colour.
const serviceTiles = [
  { href: "/bar", ball: "b1", n: 1, tone: "tile-photo", image: "/img/staff-register.jpg" },
  { href: "/restaurant", ball: "b2", n: 2, tone: "tile-gold" },
  { href: "/reserve", ball: "b3", n: 3, tone: "tile-felt" },
  { href: "/reserve", ball: "b8", n: 8, tone: "tile-ink" },
];

// Order matches `home.exploreCards` in the dictionaries.
const exploreLinks = [
  { href: "/bar", image: "/img/staff-register.jpg" },
  { href: "/restaurant", image: "/img/staff-writing.jpg" },
  { href: "/reserve", image: "/img/hero-3-rack.jpg" },
  { href: "/gallery", image: "/img/team-group.jpg" },
];

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang, t } = await resolveLang(params);
  const h = t.home;
  const to = (path: string) => localizePath(lang, path);

  return (
    <main id="top">
      {/* HERO — full-bleed photo slider with the headline over it */}
      <section className="hero">
        <HeroSlider slides={heroSlides} badge={h.sliderBadge} hours={t.common.hoursShort} slideLabel="Photo" />
        <div className="hero-shade" aria-hidden="true"></div>
        <div className="wrap hero-inner">
          <p className="kicker kicker-light">{h.eyebrow}</p>
          <h1>
            {h.titleStart} <em>Smartpool</em>
          </h1>
          <div className="hero-foot">
            <p className="lede">{h.lede}</p>
            <div className="cta-row">
              <Link href={to("/bar")} className="btn btn-gold">
                {h.ctaBar}
              </Link>
              <Link href={to("/restaurant")} className="btn btn-light">
                {h.ctaRestaurant}
              </Link>
              <Link href={to("/reserve")} className="btn btn-ghost">
                {h.ctaReserve} <span aria-hidden="true">→</span>
              </Link>
              <a href={site.rankingUrl} className="btn btn-ranking" target="_blank" rel="noopener">
                <span aria-hidden="true">🏆</span> {h.ctaRanking} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stat-strip">
        <div className="wrap stat-strip-inner">
          {h.stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
          <p className="stat-caption">{h.caption}</p>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...h.marquee, ...h.marquee].map((word, i) => (
            <span key={i}>
              {word}
              <i className="marquee-ball"></i>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES — bento tiles */}
      <section className="section" id="services">
        <div className="wrap">
          <SectionHead eyebrow={h.servicesEyebrow} title={h.servicesTitle} />
          <div className="bento">
            {h.services.map((s, i) => {
              const tile = serviceTiles[i];
              return (
                <Link key={s.title} className={`tile ${tile.tone} reveal`} href={to(tile.href)}>
                  {tile.image && (
                    <span className="tile-media img-frame">
                      <LazyImage src={tile.image} alt="" />
                    </span>
                  )}
                  <span className={`ball ${tile.ball}`}>
                    <span>{tile.n}</span>
                  </span>
                  <span className="tile-body">
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </span>
                  <span className="tile-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPLORE — editorial cards */}
      <section className="section section-tint" id="explore">
        <div className="wrap">
          <SectionHead eyebrow={h.exploreEyebrow} title={h.exploreTitle}>
            {h.exploreText}
          </SectionHead>
          <div className="explore-grid">
            {h.exploreCards.map((c, i) => (
              <Link key={c.label} className="explore-card reveal" href={to(exploreLinks[i].href)}>
                <span className="explore-media img-frame">
                  <LazyImage src={exploreLinks[i].image} alt="" />
                </span>
                <span className="explore-meta">
                  <span className="explore-index">0{i + 1}</span>
                  <span className="explore-label">{c.label}</span>
                  <span className="explore-sub">{c.sub}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="about-lead reveal">
              <p className="kicker">{h.aboutEyebrow}</p>
              <h2 className="display-xl">{h.aboutTitle}</h2>
              <dl className="about-stats">
                {h.aboutStats.map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="about-text reveal">
              {h.aboutParagraphs.map((para, i) => (
                <p key={i}>
                  <RichText text={para} />
                </p>
              ))}
            </div>
          </div>
          <div className="about-photo img-frame reveal">
            <LazyImage src="/img/players/team-champions-1.jpg" alt="" />
            <span className="sticker" aria-hidden="true">
              <span>Est.</span>2023
            </span>
          </div>
        </div>
      </section>

      {/* NATIONAL TEAM */}
      <section className="section section-felt">
        <div className="wrap">
          <SectionHead eyebrow={h.squadEyebrow} title={h.squadTitle}>
            {h.squadText}
          </SectionHead>
          <div className="squad-grid">
            {h.squad.map((p, i) => (
              <div className="squad-card reveal" key={p.name}>
                <span className="squad-num">0{i + 1}</span>
                <span className="squad-flag" aria-hidden="true">
                  🇨🇲
                </span>
                <h3>{p.name}</h3>
                <span className="squad-role">{p.role}</span>
              </div>
            ))}
          </div>
          <div className="cta-row">
            <Link href={to("/players")} className="btn btn-gold">
              {h.meetPlayers} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PALMARÈS — editorial list */}
      <section className="section" id="palmares">
        <div className="wrap">
          <SectionHead eyebrow={h.palmaresEyebrow} title={h.palmaresTitle}>
            {h.palmaresText}
          </SectionHead>
          {h.palmares.map((y) => (
            <div className="honours" key={y.year}>
              <div className="honours-year reveal">
                <span className="year">{y.year}</span>
                <span className="year-sub">{y.subtitle}</span>
              </div>
              <ol className="honours-list">
                {y.items.map((item) => (
                  <li className="reveal" key={item.title}>
                    <span className="trophy" aria-hidden="true">
                      {item.trophy}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* INDIVIDUAL ACHIEVEMENTS */}
      <section className="section section-tint">
        <div className="wrap">
          <SectionHead eyebrow={h.achievementsEyebrow} title={h.achievementsTitle}>
            {h.achievementsText}
          </SectionHead>
          <div className="achievement-grid">
            {h.achievements.map((a, i) => (
              <div className="achievement-card reveal" key={a.name}>
                <span className="achievement-num">0{i + 1}</span>
                <h3>{a.name}</h3>
                <span className="badge-role">{a.role}</span>
                <ul>
                  {a.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="vm">
        <div className="vm-panel vm-felt reveal">
          <p className="kicker kicker-light">{h.visionEyebrow}</p>
          <h2>{h.visionTitle}</h2>
          <p>{h.visionText}</p>
          <div className="values-row">
            {h.values.map((v) => (
              <span className="value-chip" key={v}>
                {v}
              </span>
            ))}
          </div>
        </div>
        <div className="vm-panel vm-ink reveal">
          <p className="kicker kicker-light">{h.missionEyebrow}</p>
          <h2>{h.missionTitle}</h2>
          <p>{h.missionText}</p>
        </div>
      </section>

      {/* TAGLINE */}
      <section className="tagline-block">
        <div className="wrap reveal">
          <h2>
            {h.taglineTitle.split(" ").slice(0, -1).join(" ")} <em>{h.taglineTitle.split(" ").slice(-1)}</em>
          </h2>
          <p className="lines">
            {h.taglineLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
          <div className="cta-row">
            <a href="#services" className="btn btn-ink">
              {h.taglineCta}
            </a>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="section" id="location">
        <div className="wrap">
          <SectionHead eyebrow={h.locationEyebrow} title={h.locationTitle} />
          <div className="loc-grid">
            <div className="loc-card reveal">
              <p className="kicker">{h.locationCard}</p>
              <dl>
                <dt>{h.labels.address}</dt>
                <dd>{t.common.address}</dd>
                <dt>{h.labels.hours}</dt>
                <dd>{t.common.hours}</dd>
                <dt>{h.labels.phone}</dt>
                <dd>
                  <a href={site.phoneHref}>{site.phone}</a>
                </dd>
                <dt>{h.labels.email}</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
                <dt>{h.labels.social}</dt>
                <dd>
                  <a href={site.social.instagram} target="_blank" rel="noopener">
                    Instagram
                  </a>{" "}
                  ·{" "}
                  <a href={site.social.tiktok} target="_blank" rel="noopener">
                    TikTok
                  </a>{" "}
                  ·{" "}
                  <a href={site.social.facebook} target="_blank" rel="noopener">
                    Facebook
                  </a>
                </dd>
              </dl>
              <div className="cta-row">
                <Link href={to("/bar")} className="btn btn-felt">
                  {h.viewMenu}
                </Link>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Bonamoussadi,Douala,Cameroon"
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener"
                >
                  {h.directions} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="map-frame reveal">
              <iframe
                title={h.mapTitle}
                loading="lazy"
                src={`https://www.google.com/maps?q=Bonamoussadi,Douala,Cameroon&hl=${lang}&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
