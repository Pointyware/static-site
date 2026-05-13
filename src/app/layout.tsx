import type { Metadata } from "next";
import { Harmattan, ZCOOL_XiaoWei, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer";
import Header from "./_components/header";

const harmattan = Harmattan({
  weight: '500',
  // variable: '--font-harmattan',
  subsets: ['latin', 'arabic']
})

const chinese = ZCOOL_XiaoWei({
  weight: '400'
  // variable: "--font-zcool-xiaowei"
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pointyware",
  description: "Open Source Software with a Point",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
