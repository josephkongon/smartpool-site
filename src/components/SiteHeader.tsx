"use client";

/* eslint-disable @next/next/no-img-element -- static export serves images as-is (no optimizer) */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LOCALE_STORAGE_KEY, locales, localizePath, stripLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { navLinks, site } from "@/lib/site";

interface SiteHeaderProps {
  lang: Locale;
  t: Dictionary["nav"];
  callUs: string;
}

export default function SiteHeader({ lang, t, callUs }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const current = stripLocale(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const rememberLocale = (l: Locale) => {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, l);
    } catch {
      // Storage can be blocked (private mode); the URL still carries the language.
    }
  };

  return (
    <header className={scrolled ? "site-header scrolled" : "site-header"}>
      <div className="nav">
        <Link href={localizePath(lang, "/")} className="brand">
          <img src="/img/logo.png" alt="" className="brand-logo" width={44} height={44} />
          <span>
            SMARTPOOL<small>{t.tagline}</small>
          </span>
        </Link>

        <nav className={open ? "links open-mobile" : "links"} aria-label="Main">
          {navLinks.map((link) => {
            const active = !link.href.includes("#") && link.href === current;
            return (
              <Link
                key={link.href}
                href={localizePath(lang, link.href)}
                className={active ? "active" : undefined}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {t[link.key]}
              </Link>
            );
          })}
          <a href={site.phoneHref} className="btn btn-primary nav-call-mobile">
            {callUs} · {site.phone}
          </a>
        </nav>

        <div className="nav-actions">
          <div className="lang-switch" role="group" aria-label={t.language}>
            {locales.map((l) => (
              <Link
                key={l}
                href={localizePath(l, current)}
                hrefLang={l}
                lang={l}
                className={l === lang ? "active" : undefined}
                aria-current={l === lang ? "true" : undefined}
                onClick={() => {
                  rememberLocale(l);
                  setOpen(false);
                }}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <a href={site.phoneHref} className="nav-call" aria-label={`${callUs} ${site.phone}`}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.6a1 1 0 01-.25 1z"
                fill="currentColor"
              />
            </svg>
            <span>{callUs}</span>
          </a>
          <button
            className={open ? "burger open" : "burger"}
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
