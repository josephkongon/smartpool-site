"use client";

/* eslint-disable @next/next/no-img-element -- static export serves images as-is (no optimizer) */
import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  /** Above-the-fold images (page heroes) should load immediately. */
  eager?: boolean;
};

/**
 * An <img> that the browser only downloads once it scrolls near the viewport
 * (native `loading="lazy"`), then fades in when it has finished loading.
 * The src is in the server-rendered HTML, so it still works without JS —
 * a <noscript> rule in the layout keeps it visible in that case.
 */
export default function LazyImage({ eager = false, className, onLoad, ...props }: LazyImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  // The image may have finished loading (e.g. from cache) before React hydrated
  // and attached onLoad, in which case the load event has already fired.
  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <img
      ref={ref}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      alt=""
      {...props}
      className={className ? `lazy-img ${className}` : "lazy-img"}
      data-loaded={loaded ? "" : undefined}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      onError={() => setLoaded(true)}
    />
  );
}
