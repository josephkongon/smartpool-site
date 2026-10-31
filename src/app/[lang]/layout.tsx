import { Bricolage_Grotesque, DM_Sans, Instrument_Serif } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { locales } from "@/i18n/config";
import { pageMetadata, resolveLang } from "@/i18n/get-dictionary";
import "../globals.css";

const display = Bricolage_Grotesque({ variable: "--font-display", subsets: ["latin"] });
const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const serif = Instrument_Serif({ variable: "--font-serif", weight: "400", style: ["normal", "italic"], subsets: ["latin"] });

// One static copy of every page per language: /en/... and /fr/...
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: LayoutProps<"/[lang]">) {
  const { lang, t } = await resolveLang(params);
  return {
    ...pageMetadata(lang, "/", t.meta.title, t.meta.description),
    icons: { icon: "/favicon.png", shortcut: "/favicon.ico" },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang, t } = await resolveLang(params);

  return (
    <html lang={lang} className={`${display.variable} ${body.variable} ${serif.variable}`}>
      <body>
        {/* Lazy images start transparent and fade in via JS; without JS, show them straight away. */}
        <noscript>
          <style>{`.lazy-img{opacity:1!important}`}</style>
        </noscript>
        <a href="#main" className="skip-link">
          {t.common.skipToContent}
        </a>
        <SiteHeader lang={lang} t={t.nav} callUs={t.common.callUs} />
        <div id="main">{children}</div>
        <SiteFooter lang={lang} t={t} />
      </body>
    </html>
  );
}
