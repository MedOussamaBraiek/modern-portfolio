import type { Metadata } from "next";
import { DM_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Oussama Braiek — Software Engineer",
  description:
    "Full Stack Developer & AI Engineer. Building fast, clean web & mobile applications.",
  openGraph: {
    title: "Oussama Braiek — Software Engineer",
    description:
      "Impression 3D de précision — figurines anime, Formula 1, décoration et plus.",
    url: "https://braiek-mohamed-oussama.vercel.app/",
    siteName: "Oussama Braiek — Software Engineer",
    images: [
      {
        url: "https://braiek-mohamed-oussama.vercel.app/assets/oussama.jpg",
        width: 1200,
        height: 630,
        alt: "FabrionLab",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oussama Braiek — Software Engineer",
    description:
      "Impression 3D de précision — figurines anime, Formula 1, décoration et plus.",
    images: ["https://braiek-mohamed-oussama.vercel.app/assets/oussama.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
