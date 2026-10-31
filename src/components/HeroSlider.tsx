"use client";

/* eslint-disable @next/next/no-img-element -- static export serves images as-is (no optimizer) */
import { useCallback, useEffect, useRef, useState } from "react";

const INTERVAL_MS = 4800;

interface HeroSliderProps {
  slides: string[];
  badge: string;
  hours: string;
  /** Accessible label prefix for each dot button: "Photo" → "Photo 3". */
  slideLabel: string;
}

/**
 * Cross-fading photo slider. Only the visible slide and the one after it are
 * ever requested, so the 12 hero photos download one at a time as the slider
 * advances rather than all at once on page load. It also pauses while it is
 * scrolled out of view or the tab is hidden.
 */
export default function HeroSlider({ slides, badge, hours, slideLabel }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  // Slides that have been requested at least once stay mounted so going back is instant.
  // Starts with the first slide plus the next one pre-loaded.
  const [requested, setRequested] = useState<Set<number>>(() => new Set([0, 1 % slides.length]));
  const rootRef = useRef<HTMLDivElement>(null);

  // Show slide i, and make sure it and the one after it are requested.
  const go = useCallback(
    (i: number) => {
      setCurrent(i);
      setRequested((prev) => {
        const next = (i + 1) % slides.length;
        return prev.has(i) && prev.has(next) ? prev : new Set(prev).add(i).add(next);
      });
    },
    [slides.length],
  );

  // Pause when the slider is off-screen.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Restarting the timer whenever `current` changes means a dot click also resets the countdown.
  useEffect(() => {
    if (!visible) return;
    const id = setTimeout(() => {
      if (document.visibilityState === "visible") go((current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearTimeout(id);
  }, [current, visible, slides.length, go]);

  return (
    <div className="hero-slider" ref={rootRef}>
      {slides.map((src, i) =>
        requested.has(i) ? (
          <img
            key={src}
            src={src}
            alt=""
            className={i === current ? "slide active" : "slide"}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding="async"
          />
        ) : null,
      )}
      <span className="slider-badge">
        <span className="pulse" aria-hidden="true"></span>
        {badge} · {hours}
      </span>
      <div className="slide-dots">
        {slides.map((src, i) => (
          <button
            key={src}
            type="button"
            className={i === current ? "active" : undefined}
            aria-label={`${slideLabel} ${i + 1}`}
            aria-current={i === current}
            onClick={() => go(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
