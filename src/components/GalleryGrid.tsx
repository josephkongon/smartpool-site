"use client";

/* eslint-disable @next/next/no-img-element -- static export serves images as-is (no optimizer) */
import { useCallback, useEffect, useRef, useState } from "react";
import LazyImage from "./LazyImage";

export type GalleryPhoto = { src: string; size?: "tall" | "wide" };

interface GalleryGridProps {
  photos: GalleryPhoto[];
  labels: { photoAlt: string; close: string; previous: string; next: string; counter: string; viewFull: string };
}

/**
 * Photo grid whose thumbnails lazy-load as you scroll, plus a lightbox
 * (native <dialog>) with keyboard and swipe navigation. The full-size image is
 * only requested when the lightbox opens on it.
 */
export default function GalleryGrid({ photos, labels }: GalleryGridProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  return (
    <>
      <div className="gallery-page-grid">
        {photos.map(({ src, size }, i) => (
          <a
            key={src}
            href={src}
            className={size ? `g-item img-frame g-${size}` : "g-item img-frame"}
            aria-label={`${labels.viewFull} — ${labels.photoAlt} ${i + 1}`}
            onClick={(e) => {
              // Plain link without JS; lightbox with it. Let modified clicks open a tab.
              if (e.metaKey || e.ctrlKey || e.shiftKey) return;
              e.preventDefault();
              open(i);
            }}
          >
            <LazyImage src={src} alt="" />
          </a>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={() => setIndex(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {index !== null && (
          <>
            <img key={photos[index].src} src={photos[index].src} alt={`${labels.photoAlt} ${index + 1}`} className="lightbox-img" />
            <button type="button" className="lb-btn lb-close" onClick={close} aria-label={labels.close}>
              ✕
            </button>
            <button type="button" className="lb-btn lb-prev" onClick={() => step(-1)} aria-label={labels.previous}>
              ‹
            </button>
            <button type="button" className="lb-btn lb-next" onClick={() => step(1)} aria-label={labels.next}>
              ›
            </button>
            <span className="lb-count">
              {index + 1} {labels.counter} {photos.length}
            </span>
          </>
        )}
      </dialog>
    </>
  );
}
