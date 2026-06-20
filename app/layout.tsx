import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://youronlinemba.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Online MBA - Top UGC-Approved Universities & Programs 2026",
    template: "%s | Your Online MBA",
  },
  description:
    "Compare India's top Online MBA universities: LPU, Amity, NMIMS, Manipal, Chandigarh University & more. UGC-approved programs with EMI options. Get free counselling.",
  keywords: [
    "Online MBA", "MBA distance learning", "online MBA India", "UGC approved MBA",
    "LPU online MBA", "Amity online MBA", "NMIMS online MBA", "Manipal online MBA",
    "Chandigarh University online MBA", "online MBA fees", "top MBA universities India",
  ],
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "Online MBA - Top UGC-Approved Universities & Programs 2026",
    description:
      "Compare India's top Online MBA universities. UGC-approved programs with flexible EMI. Get free expert counselling today.",
    url: siteUrl,
    siteName: "Your Online MBA",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online MBA - Top UGC-Approved Universities & Programs 2026",
    description:
      "Compare India's top Online MBA universities. UGC-approved programs with flexible EMI.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "" },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#C81E3D" />
        <meta name="geo.region" content="IN" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
