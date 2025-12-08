import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
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

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${dmSans.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
