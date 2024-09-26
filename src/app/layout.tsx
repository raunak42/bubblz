import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-alpino",
});

export const metadata: Metadata = {
  title: "bubblz",
  description: "soda perfected",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className="bg-yellow-300">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
