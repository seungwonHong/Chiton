import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import AOSProvider from "@/features/landing/components/AOSProvider";
import "aos/dist/aos.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "@/components/ui/sonner";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Chiton - The Best Community for Developers",
  description:
    "Chiton is the best platform for various kind of developers. You can post your ideas, create a topics, recruit people for projects.",
  keywords: [
    "Chiton",
    "Chiton IO",
    "Chiton",
    "Chiton Official",
    "Chiton Official Website",
    "developer platform",
    "community for developers",
    "community for video creators",
    "community for audio creators",
    "community for designers",
    "developer community",
    "programmer community",
    "developer collaboration",
    "project recruitment",
    "tech community",
    "topic creation",
  ],
  authors: [{ name: "Chiton Team" }],
  creator: "Chiton",
  publisher: "Chiton",
  metadataBase: new URL("https://www.Chiton.io/"),
  category: "technology",
  applicationName: "Chiton - The Best Community for Developers",

  openGraph: {
    type: "website",
    title: "Chiton - The Best Community for Developers",
    description:
      "Chiton is the best platform for various kind of developers. You can post your ideas, create a topics, recruit people for projects.",
    url: "https://www.Chiton.io/",
    siteName: "Chiton - The Best Community for Developers",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chiton - The Best Community for Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chiton - The Best Community for Developers",
    description:
      "Chiton is the best platform for various kind of developers. You can post your ideas, create a topics, recruit people for projects.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.Chiton.io/",
  },

  icons: {
    icon: [
      {
        url: "/faviconDark.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        sizes: "48x48",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/faviconDark.png",
        sizes: "48x48",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    shortcut: "/faviconDark.png",
    apple: "/faviconDark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        <AOSProvider>{children}</AOSProvider>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              borderRadius: "0.8rem",
            },
          }}
        />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
