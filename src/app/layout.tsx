import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteOrigin } from "@/lib/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Flint Launcher",
  applicationCategory: "GameApplication",
  operatingSystem: "Windows 64-bit",
  softwareVersion: "0.3 Beta",
  description: "A focused Minecraft launcher for managing versions, isolated profiles, Java runtimes, Fabric, and compatible mods.",
  url: siteOrigin,
  downloadUrl: "https://github.com/harshittpanday/Flint/releases/tag/v0.3-Beta",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  sameAs: ["https://github.com/harshittpanday/Flint", "https://x.com/harshittpanday"],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "Flint Launcher — A Lightweight Minecraft Launcher",
  description: "A focused Windows launcher for managing Minecraft versions, isolated profiles, Java runtimes, Fabric, and compatible mods.",
  keywords: ["Flint Launcher", "Minecraft launcher", "open source Minecraft launcher", "Fabric launcher", "Minecraft mod launcher"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Flint Launcher — A Lightweight Minecraft Launcher",
    description: "Manage Minecraft versions, isolated profiles, Java runtimes, Fabric, and compatible mods from one focused Windows launcher.",
    url: "/",
    siteName: "Flint Launcher",
  },
  twitter: {
    card: "summary",
    title: "Flint Launcher — A Lightweight Minecraft Launcher",
    description: "A focused Windows launcher for Minecraft profiles, Fabric, Java runtimes, and compatible mods.",
    creator: "@harshittpanday",
  },
  category: "technology",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
