import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";

const geistSans = localFont({
  src: "../public/assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const sparkyRegular = localFont({
  src: "../public/assets/fonts/SparkyStonesRegular-BW6ld.ttf",
  variable: "--font-sparky-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Reduce - Recycle - Reuse",
  description: "3R is an intuitive web app designed to empower users to minimize waste. It offers tips for reducing consumption, guides for recycling materials effectively, and ideas for reusing items creatively. Connect with local services, track your impact, and foster a sustainable community for a greener future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sparkyRegular.variable} antialiased font-mono bg-white dark:bg-n-8/90`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
