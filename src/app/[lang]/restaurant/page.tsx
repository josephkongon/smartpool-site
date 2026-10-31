import Link from "next/link";
import MenuList from "@/components/MenuList";
import PageHero from "@/components/PageHero";
import PhotoStrip from "@/components/PhotoStrip";
import SectionHead from "@/components/SectionHead";
import SocialLine from "@/components/SocialLine";
import { restaurantMenu } from "@/data/menu";
import { localizePath } from "@/i18n/config";
import { pageMetadata, resolveLang } from "@/i18n/get-dictionary";

export async function generateMetadata({ params }: PageProps<"/[lang]/restaurant">) {
  const { lang, t } = await resolveLang(params);
  return pageMetadata(lang, "/restaurant", t.restaurant.metaTitle, t.restaurant.metaDescription);
}

export default async function RestaurantPage({ params }: PageProps<"/[lang]/restaurant">) {
  const { lang, t } = await resolveLang(params);

  return (
    <main>
      <PageHero eyebrow={t.restaurant.eyebrow} title={t.restaurant.title} image="/img/staff-writing.jpg">
        <p>{t.restaurant.text}</p>
        <div className="cta-row">
          <a href="#restaurant-menu" className="btn btn-primary">{t.restaurant.cta}</a>
          <Link href={localizePath(lang, "/bar")} className="btn btn-outline">{t.restaurant.ctaAlt}</Link>
        </div>
      </PageHero>

      <PhotoStrip
        eyebrow={t.restaurant.stripEyebrow}
        title={t.restaurant.stripTitle}
        photos={["/img/staff-writing.jpg", "/img/staff-seated.jpg", "/img/team-group.jpg"]}
        viewLabel={t.common.viewFull}
      />

      <section className="menu-section" id="restaurant-menu">
        <div className="wrap">
          <SectionHead eyebrow={t.restaurant.menuEyebrow} title={t.restaurant.menuTitle}>
            {t.common.pricesIn} {t.common.followUs} <SocialLine />
          </SectionHead>
          <MenuList items={restaurantMenu} lang={lang} labels={t.menu.subcategories} jumpTo={t.menu.jumpTo} />
        </div>
      </section>
    </main>
  );
}
