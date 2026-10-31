import LazyImage from "./LazyImage";
import SectionHead from "./SectionHead";

interface PhotoStripProps {
  eyebrow: string;
  title: string;
  photos: string[];
  viewLabel: string;
}

export default function PhotoStrip({ eyebrow, title, photos, viewLabel }: PhotoStripProps) {
  return (
    <section className="photo-strip-section">
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="photo-strip">
          {photos.map((src) => (
            <a key={src} className="p-item img-frame reveal" href={src} target="_blank" aria-label={viewLabel}>
              <LazyImage src={src} alt="" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
