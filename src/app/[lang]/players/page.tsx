import { Fragment } from "react";
import LazyImage from "@/components/LazyImage";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { CHAMPIONS_STRIP_AFTER, players, type ProfileBlock } from "@/data/players";
import { pageMetadata, resolveLang } from "@/i18n/get-dictionary";

export async function generateMetadata({ params }: PageProps<"/[lang]/players">) {
  const { lang, t } = await resolveLang(params);
  return pageMetadata(lang, "/players", t.players.metaTitle, t.players.metaDescription);
}

function Block({ block }: { block: ProfileBlock }) {
  if ("h" in block) return <h4 className="sub">{block.h}</h4>;
  if ("em" in block) return <p className="profile-emphasis">{block.em}</p>;
  if ("tagline" in block) return <p className="profile-tagline">{block.tagline}</p>;
  if ("quote" in block) return <blockquote className="profile-quote">“{block.quote}”</blockquote>;
  if ("list" in block)
    return (
      <ul className="profile-highlights">
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  return (
    <p>
      {block.lead && <span className="profile-emphasis">{block.lead} </span>}
      {block.p}
    </p>
  );
}

export default async function PlayersPage({ params }: PageProps<"/[lang]/players">) {
  const { lang, t } = await resolveLang(params);
  const champions = ["/img/players/team-champions-1.jpg", "/img/players/team-champions-2.jpg"];

  return (
    <main>
      <PageHero eyebrow={t.players.eyebrow} title={t.players.title} image="/img/hero-3-rack.jpg">
        <p>{t.players.text}</p>
      </PageHero>

      {/* ROSTER QUICK NAV */}
      <nav className="roster-nav" aria-label={t.players.roster}>
        <div className="wrap">
          <span className="eyebrow">{t.players.roster}</span>
          <div className="roster-chips">
            {players.map((p, i) => (
              <a key={p.id} href={`#${p.id}`}>
                <span className="rank-num">{i + 1}</span>
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="team-section profiles">
        <div className="wrap">
          {players.map((p, i) => (
            <Fragment key={p.id}>
              <article className="profile-block" id={p.id}>
                <div className="profile-grid">
                  <div className="profile-photo img-frame">
                    <LazyImage src={p.photo} alt={p.photoAlt[lang]} style={p.photoPosition ? { objectPosition: p.photoPosition } : undefined} />
                    <span className="profile-rank">#{i + 1}</span>
                  </div>
                  <div className="profile-content">
                    <div className="profile-name-block">
                      <p className="profile-alias">
                        {t.players.alias}: {p.alias[lang]}
                      </p>
                      <h3>{p.name}</h3>
                      <div className="profile-badges">
                        {p.roles[lang].map((role) => (
                          <span className="role" key={role}>
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                    {p.body[lang].map((block, j) => (
                      <Block key={j} block={block} />
                    ))}
                  </div>
                </div>
              </article>

              {i === CHAMPIONS_STRIP_AFTER && (
                <div className="profile-block champions">
                  <SectionHead eyebrow={t.players.championsEyebrow} title={t.players.championsTitle}>
                    {t.players.championsText}
                  </SectionHead>
                  <div className="campaign-grid">
                    {champions.map((src, k) => (
                      <a key={src} href={src} target="_blank" className="img-frame reveal">
                        <LazyImage src={src} alt={t.players.championsAlts[k]} />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}
