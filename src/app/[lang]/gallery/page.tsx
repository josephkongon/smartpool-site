import GalleryGrid, { type GalleryPhoto } from "@/components/GalleryGrid";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { pageMetadata, resolveLang } from "@/i18n/get-dictionary";
import { galleryContent, withText } from "@/lib/content";

export async function generateMetadata({ params }: PageProps<"/[lang]/gallery">) {
  const { lang, t } = await resolveLang(params);
  const content = await galleryContent();
  const g = withText<"gallery">(t.gallery, content?.text, lang);
  return pageMetadata(lang, "/gallery", g.metaTitle, g.metaDescription);
}

export default async function GalleryPage({ params }: PageProps<"/[lang]/gallery">) {
  const { lang, t } = await resolveLang(params);
  const content = await galleryContent();
  const g = withText<"gallery">(t.gallery, content?.text, lang);
  const photos: GalleryPhoto[] = (content?.photos ?? []).map((p) => ({
    id: p.id,
    src: p.src,
    thumb: p.thumb,
    size: p.size === "tall" || p.size === "wide" ? p.size : undefined,
  }));

  return (
    <main>
      <PageHero eyebrow={g.eyebrow} title={g.title} image={content?.hero ?? undefined}>
        <p>{g.text}</p>
      </PageHero>

      <section className="gallery-section">
        <div className="wrap">
          <SectionHead eyebrow={g.sectionEyebrow} title={g.sectionTitle}>
            {g.sectionText}
          </SectionHead>
          <GalleryGrid
            photos={photos}
            labels={{
              photoAlt: g.photoAlt,
              counter: g.counter,
              close: t.common.close,
              previous: t.common.previous,
              next: t.common.next,
              viewFull: t.common.viewFull,
            }}
          />
        </div>
      </section>
    </main>
  );
}
