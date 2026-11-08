import Link from "next/link";
import LazyImage from "@/components/LazyImage";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { localizePath } from "@/i18n/config";
import { pageMetadata, resolveLang } from "@/i18n/get-dictionary";
import { juiceContent, withText } from "@/lib/content";
import { formatPrice, site } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/juice">) {
  const { lang, t } = await resolveLang(params);
  const content = await juiceContent();
  const j = withText<"juice">(t.juice, content?.text, lang);
  return pageMetadata(lang, "/juice", j.metaTitle, j.metaDescription);
}

export default async function JuicePage({ params }: PageProps<"/[lang]/juice">) {
  const { lang, t } = await resolveLang(params);
  const content = await juiceContent();
  const j = withText<"juice">(t.juice, content?.text, lang);
  const posters = content?.posters ?? [];
  const flavors = content?.flavors ?? [];

  return (
    <main>
      <PageHero eyebrow={j.eyebrow} title={j.title} image={content?.hero ?? undefined}>
        <p>{j.text}</p>
        <div className="cta-row">
          <Link href={localizePath(lang, "/bar")} className="btn btn-primary">{j.cta}</Link>
          <a href={site.whatsappHref} className="btn btn-outline" target="_blank" rel="noopener">
            WhatsApp {site.phone}
          </a>
          <a href={`mailto:${site.juiceEmail}`} className="btn btn-outline">{site.juiceEmail}</a>
        </div>
      </PageHero>

      {/* CAMPAIGN */}
      <section className="menu-section">
        <div className="wrap">
          <SectionHead eyebrow={j.campaignEyebrow} title={j.campaignTitle} />
          <div className="campaign-grid">
            {posters.map((p) => (
              <a key={p.id} href={p.src} target="_blank" className="img-frame reveal">
                <LazyImage src={p.thumb} alt={p.alt[lang]} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LINEUP */}
      <section className="menu-section alt">
        <div className="wrap">
          <SectionHead eyebrow={j.lineupEyebrow} title={j.lineupTitle} />
          {content?.lineup && (
            <div className="juice-lineup img-frame reveal">
              <LazyImage src={content.lineup} alt={j.lineupAlt} />
            </div>
          )}

          <div className="flavor-grid">
            {flavors.map((f) => (
              <div className="flavor-card reveal" key={f.id}>
                <div className="bottle-photo">
                  {f.image && <LazyImage src={f.image} alt={`Smartpool Juice ${f.name[lang]}`} />}
                </div>
                <div className="body">
                  <h3>{f.name[lang]}</h3>
                  <p>{f.description[lang]}</p>
                  <span className="benefit-tag">{f.tag[lang]}</span>
                </div>
              </div>
            ))}
          </div>

          {/* PRICE LIST */}
          <section className="rack-group price-card reveal" id="juice-prices">
            <h3>{j.priceList}</h3>
            <ul className="menu-lines">
              {flavors.map((f) => (
                <li key={f.id}>
                  <span className="name">{f.name[lang]}</span>
                  <span className="leader" aria-hidden="true"></span>
                  <span className="price-tag">{f.price === null ? j.priceTbc : formatPrice(f.price, lang)}</span>
                </li>
              ))}
            </ul>
            <p className="fine-print">{j.priceNote}</p>
          </section>
        </div>
      </section>
    </main>
  );
}
