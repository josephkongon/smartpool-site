import Link from "next/link";
import MenuList from "@/components/MenuList";
import PageHero from "@/components/PageHero";
import PhotoStrip from "@/components/PhotoStrip";
import SectionHead from "@/components/SectionHead";
import SocialLine from "@/components/SocialLine";
import { barMenu } from "@/data/menu";
import { localizePath } from "@/i18n/config";
import { pageMetadata, resolveLang } from "@/i18n/get-dictionary";

export async function generateMetadata({ params }: PageProps<"/[lang]/bar">) {
  const { lang, t } = await resolveLang(params);
  return pageMetadata(lang, "/bar", t.bar.metaTitle, t.bar.metaDescription);
}

export default async function BarPage({ params }: PageProps<"/[lang]/bar">) {
  const { lang, t } = await resolveLang(params);

  return (
    <main>
      <PageHero eyebrow={t.bar.eyebrow} title={t.bar.title} image="/img/staff-register.jpg">
        <p>{t.bar.text}</p>
        <div className="cta-row">
          <a href="#bar-menu" className="btn btn-primary">{t.bar.cta}</a>
          <Link href={localizePath(lang, "/restaurant")} className="btn btn-outline">{t.bar.ctaAlt}</Link>
        </div>
      </PageHero>

      <PhotoStrip
        eyebrow={t.bar.stripEyebrow}
        title={t.bar.stripTitle}
        photos={["/img/staff-register.jpg", "/img/staff-smile.jpg", "/img/hero-2-register.jpg"]}
        viewLabel={t.common.viewFull}
      />

      <section className="menu-section" id="bar-menu">
        <div className="wrap">
          <SectionHead eyebrow={t.bar.menuEyebrow} title={t.bar.menuTitle}>
            {t.common.pricesIn} {t.common.followUs} <SocialLine />
          </SectionHead>
          <MenuList items={barMenu} lang={lang} labels={t.menu.subcategories} jumpTo={t.menu.jumpTo} />
        </div>
      </section>
    </main>
  );
}
