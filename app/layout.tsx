import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI看板娘 - 飲食店のためのAI伴走支援プログラム",
  description:
    "汎用AIを店舗専用AIに育てる3ヶ月プログラム。月5万円でシフト管理・SNS投稿・顧客対応が自走化。",
  openGraph: {
    title: "AI看板娘 - 飲食店のためのAI伴走支援プログラム",
    description:
      "汎用AIを店舗専用AIに育てる3ヶ月プログラム。月5万円でシフト管理・SNS投稿・顧客対応が自走化。",
    type: "website",
    locale: "ja_JP",
    siteName: "AI看板娘",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI看板娘 - 飲食店のためのAI伴走支援プログラム",
    description:
      "汎用AIを店舗専用AIに育てる3ヶ月プログラム。月5万円でシフト管理・SNS投稿・顧客対応が自走化。",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F6] text-[#2C2A26]">
        {children}
      </body>
    </html>
  );
}
