import GalleryGrid, { type GalleryPhoto } from "@/components/GalleryGrid";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import { pageMetadata, resolveLang } from "@/i18n/get-dictionary";

export async function generateMetadata({ params }: PageProps<"/[lang]/gallery">) {
  const { lang, t } = await resolveLang(params);
  return pageMetadata(lang, "/gallery", t.gallery.metaTitle, t.gallery.metaDescription);
}

const venuePhotos: GalleryPhoto[] = [
  { src: "/img/team-group.jpg", size: "tall" },
  { src: "/img/hero-1-cue.jpg" },
  { src: "/img/hero-3-rack.jpg" },
  { src: "/img/hero-4-action.jpg", size: "wide" },
  { src: "/img/player-male.jpg" },
  { src: "/img/staff-register.jpg" },
  { src: "/img/hero-2-register.jpg" },
  { src: "/img/staff-writing.jpg", size: "tall" },
  { src: "/img/staff-smile.jpg" },
  { src: "/img/staff-seated.jpg", size: "wide" },
];

// public/img/gallery/gallery-01.jpg … gallery-70.jpg
const GALLERY_COUNT = 70;
const galleryPhotos: GalleryPhoto[] = Array.from({ length: GALLERY_COUNT }, (_, i) => ({
  src: `/img/gallery/gallery-${String(i + 1).padStart(2, "0")}.jpg`,
}));

const photos = [...venuePhotos, ...galleryPhotos];

export default async function GalleryPage({ params }: PageProps<"/[lang]/gallery">) {
  const { t } = await resolveLang(params);

  return (
    <main>
      <PageHero eyebrow={t.gallery.eyebrow} title={t.gallery.title} image="/img/team-group.jpg">
        <p>{t.gallery.text}</p>
      </PageHero>

      <section className="gallery-section">
        <div className="wrap">
          <SectionHead eyebrow={t.gallery.sectionEyebrow} title={t.gallery.sectionTitle}>
            {t.gallery.sectionText}
          </SectionHead>
          <GalleryGrid
            photos={photos}
            labels={{
              photoAlt: t.gallery.photoAlt,
              counter: t.gallery.counter,
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
