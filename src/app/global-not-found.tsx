import Link from "next/link";
import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { localeRedirectScript } from "@/i18n/redirect-script";
import en from "@/i18n/dictionaries/en";
import fr from "@/i18n/dictionaries/fr";
import { navLinks } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({ variable: "--font-display", subsets: ["latin"] });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 — Smartpool",
  icons: { icon: "/favicon.png", shortcut: "/favicon.ico" },
};

// Old links from before the site had /en and /fr (e.g. "/bar") are sent to
// the right language instead of showing this page.
const legacyPaths = navLinks.map((l) => l.href).filter((h) => h !== "/" && !h.includes("#"));

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script dangerouslySetInnerHTML={{ __html: localeRedirectScript(legacyPaths) }} />
        <main className="not-found">
          <div className="nf-ball" aria-hidden="true">
            <span>8</span>
          </div>
          <p className="eyebrow">404</p>
          <h1>
            {en.notFound.title} <span lang="fr">/ {fr.notFound.title}</span>
          </h1>
          <p>{en.notFound.text}</p>
          <p lang="fr">{fr.notFound.text}</p>
          <div className="cta-row center">
            <Link href="/en" className="btn btn-primary">{en.notFound.cta}</Link>
            <Link href="/fr" className="btn btn-outline" lang="fr">{fr.notFound.cta}</Link>
          </div>
        </main>
      </body>
    </html>
  );
}
