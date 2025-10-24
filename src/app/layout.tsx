import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import { getAllIndustryMenuItem } from "@/lib/industryContent";
import { getAllProductsForMenu } from "@/lib/productContent";
import BackToTopButton from "@/components/Global/BackToTopButton";
import { getFooterContent, getHeaderContent } from "@/lib/homepageContent";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Flairdocs",
  description: "",
};
interface Industry {
  title: string;
  slug: string;
  industryDescriptionInMenu: string;
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const industries: Industry[] = await getAllIndustryMenuItem();
  const productMenu = await getAllProductsForMenu();
  const headerData = await getHeaderContent();
  const footerData = await getFooterContent();
  return (
    <html lang="en" className="">
      <body className="m-0 p-0 hide-scrollbar">
        <Header
          headerData={headerData}
          industries={industries}
          products={productMenu}
        />
        <BackToTopButton />
        {children}
        <div id="portal-root" />
        <Footer footerData={footerData} />
        {/*industries={industries} products={productMenu}*/}
      </body>
    </html>
  );
}
