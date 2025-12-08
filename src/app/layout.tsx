import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Future Minds Academy",
  description: "Building Strong Foundations for 20 Years",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
