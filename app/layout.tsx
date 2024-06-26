import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "../app.css";

const notosansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "임예은 이해람 모바일 청첩장",
  description: "12월 14일 저희 결혼식에 초대합니다.",
  openGraph: {
    title: "임예은 이해람 모바일 청첩장",
    description: "12월 14일 저희 결혼식에 초대합니다.",
    images: "https://hae-ram.ye-eun.love/imgs/1.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notosansKR.className}>{children}</body>
    </html>
  );
}
