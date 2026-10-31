import Link from "next/link";
import LazyImage from "@/components/LazyImage";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { juiceFlavors } from "@/data/juices";
import { localizePath } from "@/i18n/config";
import { pageMetadata, resolveLang } from "@/i18n/get-dictionary";
import { formatPrice, site } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/juice">) {
  const { lang, t } = await resolveLang(params);
  return pageMetadata(lang, "/juice", t.juice.metaTitle, t.juice.metaDescription);
}

const posters = ["/img/juice/sp-juice-poster-naturel.jpg", "/img/juice/sp-juice-poster-players.jpg"];

export default async function JuicePage({ params }: PageProps<"/[lang]/juice">) {
  const { lang, t } = await resolveLang(params);

  return (
    <main>
      <PageHero eyebrow={t.juice.eyebrow} title={t.juice.title} image="/img/juice/sp-juice-lineup.jpg">
        <p>{t.juice.text}</p>
        <div className="cta-row">
          <Link href={localizePath(lang, "/bar")} className="btn btn-primary">{t.juice.cta}</Link>
          <a href={site.whatsappHref} className="btn btn-outline" target="_blank" rel="noopener">
            WhatsApp {site.phone}
          </a>
          <a href={`mailto:${site.juiceEmail}`} className="btn btn-outline">{site.juiceEmail}</a>
        </div>
      </PageHero>

      {/* CAMPAIGN */}
      <section className="menu-section">
        <div className="wrap">
          <SectionHead eyebrow={t.juice.campaignEyebrow} title={t.juice.campaignTitle} />
          <div className="campaign-grid">
            {posters.map((src, i) => (
              <a key={src} href={src} target="_blank" className="img-frame reveal">
                <LazyImage src={src} alt={t.juice.posters[i]} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LINEUP */}
      <section className="menu-section alt">
        <div className="wrap">
          <SectionHead eyebrow={t.juice.lineupEyebrow} title={t.juice.lineupTitle} />
          <div className="juice-lineup img-frame reveal">
            <LazyImage src="/img/juice/sp-juice-lineup.jpg" alt={t.juice.lineupAlt} />
          </div>

          <div className="flavor-grid">
            {juiceFlavors.map((f) => (
              <div className="flavor-card reveal" key={f.image}>
                <div className="bottle-photo">
                  <LazyImage src={f.image} alt={`Smartpool Juice ${f.name[lang]}`} />
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
            <h3>{t.juice.priceList}</h3>
            <ul className="menu-lines">
              {juiceFlavors.map((f) => (
                <li key={f.image}>
                  <span className="name">{f.name[lang]}</span>
                  <span className="leader" aria-hidden="true"></span>
                  <span className="price-tag">{f.price === null ? t.juice.priceTbc : formatPrice(f.price, lang)}</span>
                </li>
              ))}
            </ul>
            <p className="fine-print">{t.juice.priceNote}</p>
          </section>
        </div>
      </section>
    </main>
  );
}
