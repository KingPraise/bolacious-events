import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bolacious-events.netlify.app"),
  title: "Bolacious Events | Creating Memorable Moments",
  description: "Bolacious Events specializes in creating memorable moments with excellence. We provide top-tier event planning, catering, and ushering services in Nigeria.",
  keywords: ["event planning", "catering", "ushers", "weddings", "Bolacious Events", "Nigeria events"],
  openGraph: {
    title: "Bolacious Events",
    description: "Creating Memorable Moments with Excellence.",
    url: "https://bolacious-events.netlify.app",
    siteName: "Bolacious Events",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
        <SmoothScroll>
          <CustomCursor />
          <LoadingScreen />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
