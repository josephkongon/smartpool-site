import type { Metadata } from "next";

// Bare root layout for "/" only; every real page lives under app/[lang].
export const metadata: Metadata = {
  title: "Smartpool — Douala",
  icons: { icon: "/favicon.png", shortcut: "/favicon.ico" },
  alternates: { languages: { en: "/en", fr: "/fr" } },
};

export default function RootRedirectLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body style={{ background: "#14100D", color: "#EDE6D6", fontFamily: "system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
