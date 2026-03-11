import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://investment-personality.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "호구냐 씹고수냐 테스트 | STOCK MIND",
  description: "맑은 눈의 광인들을 위한 초매운맛 호구냐 씹고수냐 테스트",
  openGraph: {
    siteName: "호구냐 씹고수냐 테스트",
    title: "호구냐 씹고수냐 테스트 | STOCK MIND",
    description: "맑은 눈의 광인들을 위한 초매운맛 호구냐 씹고수냐 테스트",
    images: [
      {
        url: `${SITE_URL}/results/Ipmain.png`,
        width: 1200,
        height: 630,
        alt: "호구냐 씹고수냐 테스트"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "호구냐 씹고수냐 테스트 | STOCK MIND",
    description: "맑은 눈의 광인들을 위한 초매운맛 호구냐 씹고수냐 테스트",
    images: [`${SITE_URL}/results/Ipmain.png`]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3289869145816531"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
