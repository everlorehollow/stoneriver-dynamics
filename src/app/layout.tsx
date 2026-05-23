import type { Metadata } from "next";
import { siteConfig } from "../../site.config";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SelfHealingWidget } from "@/components/self-healing-widget";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.businessName,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <SelfHealingWidget />
      </body>
    </html>
  );
}
