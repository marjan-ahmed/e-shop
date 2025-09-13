import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat, Figtree } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import { Navbar1 } from "@/components/Navbar";
import { StoreProvider } from "@/context/StoreContext";

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


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Kaliz",
  description: "Pakistan Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${figtree.variable} antialiased`}
      >
      <StoreProvider>
        <Navbar1 />
        {children}
        <SiteFooter />
      </StoreProvider>
      </body>
    </html>
  );
}
