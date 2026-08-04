import type { Metadata } from "next";
import { Bebas_Neue, Archivo_Narrow, Space_Mono, Rock_Salt, Monoton } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const archivoNarrow = Archivo_Narrow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

const rockSalt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rock-salt",
  display: "swap",
});

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-monoton",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JUDAH FESTIVAL BERLIN 2026 | In the Name of Yahweh We Praise",
  description:
    "Official website for Judah Festival Berlin 2026. Saturday, October 3 • 4:00 PM - 9:30 PM at Church at the South Star, Berlin, BE.",
  keywords: [
    "Judah Festival Berlin",
    "Gospel Festival 2026",
    "African Gospel Worship",
    "Afrogospel Festival Berlin",
    "Church at the South Star",
    "Nathaniel Bassey",
    "Sinach",
    "Limoblaze",
    "Praise Gathering",
  ],
  openGraph: {
    title: "JUDAH FESTIVAL BERLIN 2026 | In the Name of Yahweh We Praise",
    description:
      "Saturday, October 3 • 4:00 PM - 9:30 PM at Church at the South Star, Berlin, BE.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${bebasNeue.variable} ${archivoNarrow.variable} ${spaceMono.variable} ${rockSalt.variable} ${monoton.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:ital,wght@0,400..700;1,400..700&family=Bebas+Neue&family=Monoton&family=Rock+Salt&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-paper text-ink selection:bg-tertiary-gold selection:text-ink font-body">
        {children}
      </body>
    </html>
  );
}
