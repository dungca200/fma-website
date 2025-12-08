import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PageTransition } from "@/components/providers/page-transition";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const baseUrl = "https://futuremindsacademy.edu.ph";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Future Minds Academy | Preschool & Elementary in Mandaluyong",
    template: "%s | Future Minds Academy",
  },
  description:
    "Future Minds Academy - 20 years of quality education in Mandaluyong. DepEd-recognized preschool and elementary school. Enroll now!",
  keywords: [
    "private school Mandaluyong",
    "elementary school Boni Avenue",
    "preschool Plainview",
    "Future Minds Academy",
    "FMA",
    "DepEd recognized school",
  ],
  openGraph: {
    title: "Future Minds Academy | Preschool & Elementary in Mandaluyong",
    description:
      "20 years of quality education. DepEd-recognized preschool and elementary school in Mandaluyong City.",
    url: baseUrl,
    siteName: "Future Minds Academy",
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Minds Academy",
    description: "20 years of quality education in Mandaluyong City.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Future Minds Academy",
  alternateName: "FMA",
  description:
    "DepEd-recognized private preschool and elementary school in Mandaluyong City, Philippines. Serving families since 2005.",
  url: baseUrl,
  telephone: "(02) 746-12-91",
  address: {
    "@type": "PostalAddress",
    streetAddress: "650 Boni Avenue, Brgy. Plainview",
    addressLocality: "Mandaluyong City",
    addressRegion: "Metro Manila",
    postalCode: "1550",
    addressCountry: "PH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 14.5761,
    longitude: 121.03805,
  },
  foundingDate: "2005",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 20,
  },
  sameAs: ["https://www.facebook.com/FUTUREMINDSACADEMY"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* GA4 Placeholder - Replace G-XXXXXXXXXX with actual tracking ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PLACEHOLDER');
            `,
          }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${dmSans.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
