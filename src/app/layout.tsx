import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#4A0E4E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bolacious-events.netlify.app"),
  title: {
    default: "Bolacious Events | Premier Event Planning in Nigeria",
    template: "%s | Bolacious Events"
  },
  description: "Bolacious Events is Nigeria's premier luxury event management company. We specialize in bespoke event planning, elegant styling, professional ushering, and gourmet catering to create unforgettable experiences.",
  keywords: ["Event Planner Lagos", "Wedding Planner Nigeria", "Luxury Event Management", "Corporate Event Organizer", "Professional Ushers Nigeria", "Event Catering Lagos", "Bolacious Events", "Event Architect", "Nigeria"],
  authors: [{ name: "Bolacious Events", url: "https://bolacious-events.netlify.app" }],
  creator: "Bolacious Events",
  publisher: "Bolacious Events",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bolacious Events | Premier Event Architects",
    description: "Transforming your visions into breathtaking realities. From grand weddings to exclusive corporate gatherings, we orchestrate perfection down to the last detail in Nigeria.",
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
  twitter: {
    card: "summary_large_image",
    title: "Bolacious Events | Premier Event Architects",
    description: "Transforming your visions into breathtaking realities in Nigeria.",
    images: ["/images/logo.jpeg"],
    creator: "@bolaciousevents",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
