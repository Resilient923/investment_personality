import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "호구냐 씹고수냐 테스트 | STOCK MIND",
  description: "맑은 눈의 광인들을 위한 초매운맛 호구냐 씹고수냐 테스트",
  openGraph: {
    siteName: "호구냐 씹고수냐 테스트",
    title: "호구냐 씹고수냐 테스트 | STOCK MIND",
    description: "맑은 눈의 광인들을 위한 초매운맛 호구냐 씹고수냐 테스트",
    images: [
      {
        url: `${siteUrl}/results/Ipmain.png`,
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
    images: [`${siteUrl}/results/Ipmain.png`]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

