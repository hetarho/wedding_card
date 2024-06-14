import type { Metadata } from "next";
import { Roboto, Nanum_Myeongjo } from "next/font/google";
import "../app.css";

const inter = Nanum_Myeongjo({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "임예은 이해람 모바일 청첩장",
  description: "임예은 이해람 모바일 청첩장",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
