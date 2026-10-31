import GameTabs from "@/components/GameTabs";
import PageHero from "@/components/PageHero";
import PhotoStrip from "@/components/PhotoStrip";
import SectionHead from "@/components/SectionHead";
import { games } from "@/data/games";
import { pageMetadata, resolveLang } from "@/i18n/get-dictionary";
import { site } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/reserve">) {
  const { lang, t } = await resolveLang(params);
  return pageMetadata(lang, "/reserve", t.reserve.metaTitle, t.reserve.metaDescription);
}

export default async function ReservePage({ params }: PageProps<"/[lang]/reserve">) {
  const { lang, t } = await resolveLang(params);

  return (
    <main>
      <PageHero eyebrow={t.reserve.eyebrow} title={t.reserve.title} image="/img/hero-3-rack.jpg">
        <p>{t.reserve.text}</p>
        <div className="cta-row">
          <a href="#games" className="btn btn-primary">{t.reserve.cta}</a>
          <a href={site.phoneHref} className="btn btn-outline">{t.reserve.callToBook}</a>
        </div>
      </PageHero>

      <PhotoStrip
        eyebrow={t.reserve.stripEyebrow}
        title={t.reserve.stripTitle}
        photos={["/img/hero-1-cue.jpg", "/img/hero-4-action.jpg", "/img/player-male.jpg"]}
        viewLabel={t.common.viewFull}
      />

      <section className="games-section" id="games">
        <div className="wrap">
          <SectionHead eyebrow={t.reserve.sectionEyebrow} title={t.reserve.sectionTitle}>
            {t.reserve.sectionText}
          </SectionHead>
          <GameTabs games={games} lang={lang} labels={t.reserve.tabs} />
          <div className="book-bar reveal">
            <span>{t.common.hours}</span>
            <div className="cta-row">
              <a href={site.phoneHref} className="btn btn-primary">{t.reserve.callToBook} · {site.phone}</a>
              <a href={site.whatsappHref} className="btn btn-outline" target="_blank" rel="noopener">{t.reserve.whatsapp}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
