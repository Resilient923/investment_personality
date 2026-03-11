import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
      "http://localhost:3000"
  ),
  title: "호구냐 씹고수냐 테스트 | STOCK MIND",
  description: "맑은 눈의 광인들을 위한 초매운맛 호구냐 씹고수냐 테스트",
  openGraph: {
    siteName: "호구냐 씹고수냐 테스트"
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

