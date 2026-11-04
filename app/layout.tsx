import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "opsz"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://schreinerei-embs.de"),
  title: {
    default: "Schreinerei Embs — Innenausbau, Möbel, Küchen aus Saarbrücken",
    template: "%s · Schreinerei Embs",
  },
  description:
    "Schreinerei Embs aus Saarbrücken-Ensheim. Innenausbau, Küchen, Möbel, Treppen, Badmöbel, Büro, Ladenbau, Schlafzimmer und Tische. Meisterbetrieb, dreizehn Mitarbeitende, seit 1998.",
  keywords: [
    "Schreinerei",
    "Innenausbau",
    "Möbelbau",
    "Küchen",
    "Treppen",
    "Saarbrücken",
    "Ensheim",
    "Meisterbetrieb",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Schreinerei Embs",
    description:
      "Innenausbau, Möbel, Küchen und Ladenbau aus Saarbrücken-Ensheim.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-paper text-walnut-deep antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
