import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { LanguageProvider } from "@/hooks/useLanguage";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spectre-app.vercel.app"),
  title: {
    default: "SpectreCheats - Best Store FF",
    template: "%s | SpectreCheats",
  },
  description: "SpectreCheats - A melhor loja de produtos premium para Free Fire.",
  keywords: ["SpectreCheats", "Free Fire", "FF", "cheats", "gaming", "premium"],
  authors: [{ name: "SpectreCheats" }],
  creator: "SpectreCheats",
  publisher: "SpectreCheats",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://spectre-app.vercel.app",
    siteName: "SpectreCheats",
    title: "SpectreCheats - Best Store FF",
    description: "A melhor loja de produtos premium para Free Fire.",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "SpectreCheats",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpectreCheats - Best Store FF",
    description: "A melhor loja de produtos premium para Free Fire.",
    images: ["/favicon.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${space.variable}`} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="min-h-screen bg-bg text-text-primary antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}