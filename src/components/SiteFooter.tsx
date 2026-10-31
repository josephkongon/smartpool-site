/* eslint-disable @next/next/no-img-element -- static export serves images as-is (no optimizer) */
import Link from "next/link";
import { localizePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { navLinks, site } from "@/lib/site";

export default function SiteFooter({ lang, t }: { lang: Locale; t: Dictionary }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link href={localizePath(lang, "/")} className="brand">
            <img src="/img/logo.png" alt="" className="brand-logo" width={44} height={44} loading="lazy" />
            <span>
              SMARTPOOL<small>{t.nav.tagline}</small>
            </span>
          </Link>
          <p>{t.footer.about}</p>
          <div className="foot-social">
            <a href={site.social.instagramQr} target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="18" cy="6" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={site.social.tiktok} target="_blank" rel="noopener" aria-label="TikTok">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16 3v9.5a3.5 3.5 0 11-3-3.46V6a6 6 0 006 4V7a4 4 0 01-3-4z" fill="currentColor" />
              </svg>
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 3h-2a5 5 0 00-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 011-1h3z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer-title">{t.footer.explore}</h3>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={localizePath(lang, link.href)}>{t.nav[link.key]}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-title">{t.footer.visit}</h3>
          <ul className="footer-links plain">
            <li>{t.common.address}</li>
            <li>{t.common.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">{t.footer.contact}</h3>
          <ul className="footer-links">
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={site.whatsappHref} target="_blank" rel="noopener">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-wordmark" aria-hidden="true">
        Smartpool
      </div>

      <div className="wrap footer-bottom">
        <span>
          &copy; {new Date().getFullYear()} Smartpool · {t.footer.rights}
        </span>
        <span>{t.footer.services}</span>
      </div>
    </footer>
  );
}
