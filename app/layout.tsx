import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { LanguageProvider } from "@/hooks/useLanguage";
import { SITE } from "@/lib/constants";

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
  metadataBase: new URL(SITE.url),
  title: {
    default: "Spectre — Premium Technology",
    template: "%s | Spectre",
  },
  description: SITE.description.pt,
  keywords: ["Spectre", "technology", "security", "premium", "software"],
  authors: [{ name: "Spectre" }],
  creator: "Spectre",
  publisher: "Spectre",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: "Spectre",
    title: "Spectre — Premium Technology",
    description: SITE.description.pt,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Spectre" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spectre — Premium Technology",
    description: SITE.description.en,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/spectre.svg",
    apple: "/spectre.svg",
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