import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/layout/SkipLink";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { site } from "@/lib/site";

const sans = Source_Sans_3({
  variable: "--font-sans-loaded",
  subsets: ["latin"],
  display: "swap",
});

const serif = Newsreader({
  variable: "--font-serif-loaded",
  subsets: ["latin"],
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL("https://sanjaypst1.github.io"),
  title: {
    default: site.title,
    template: "%s | Sanjay Singh Rawat",
  },
  description: `${site.headline} ${site.proposition}`,
  alternates: { canonical: `${basePath || "/"}` },
  openGraph: {
    title: site.title,
    description: site.headline,
    type: "website",
    locale: "en_AU",
  },
  keywords: [
    "Data Product Manager",
    "Product Manager Data",
    "Financial Services Product Manager",
    "Wealth Platform Product Manager",
    "Data Product Strategy",
    "Data Governance",
    "Product Discovery",
    "Product Roadmaps",
    "Power BI Product Management",
    "Melbourne Product Manager",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Senior Product Manager",
    email: site.email,
    telephone: site.phone,
    address: { "@type": "PostalAddress", addressLocality: "Melbourne", addressRegion: "VIC", addressCountry: "AU" },
    url: site.url,
    sameAs: [site.linkedin],
  };

  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SkipLink />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
