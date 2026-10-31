import Link from "next/link";
import { localeRedirectScript } from "@/i18n/redirect-script";

// "/" → "/en" or "/fr", chosen in the browser (see localeRedirectScript).
export default function RootRedirect() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
      <script dangerouslySetInnerHTML={{ __html: localeRedirectScript(null) }} />
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/en" />
      </noscript>
      <p>
        <Link href="/en" style={{ color: "#E3AC5C" }}>English</Link>
        {" · "}
        <Link href="/fr" style={{ color: "#E3AC5C" }}>Français</Link>
      </p>
    </main>
  );
}
