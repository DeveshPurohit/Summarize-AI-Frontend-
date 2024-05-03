import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getGlobalPageData, getGlobalPageMetaData } from "@/components/data/loader";
import { Header } from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const globalMetadata = await getGlobalPageMetaData()
  
  return {
    title: globalMetadata?.title,
    description: globalMetadata?.description,
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const globalData = await getGlobalPageData();
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header data={globalData.header} />
        <div> {children}</div>
        <Footer data={globalData.footer} />
      </body>
    </html>
  );
}
