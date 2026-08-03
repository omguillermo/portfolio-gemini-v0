import type { Metadata } from "next";
import { Sora, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omarguillermo.vercel.app"),
  title: "Omar Guillermo | Senior Product Designer & Systems Architect",
  description: "Portfolio of Omar Guillermo, Senior Product Designer & Systems Architect. Designing high-impact digital products, scalable design systems & complex AI applications.",
  openGraph: {
    title: "Omar Guillermo | Senior Product Designer & Systems Architect",
    description: "Portfolio of Omar Guillermo, Senior Product Designer & Systems Architect. Designing high-impact digital products, scalable design systems & complex AI applications.",
    url: "https://omarguillermo.vercel.app",
    siteName: "Omar Guillermo Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Omar Guillermo | Senior Product Designer & Design System Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Guillermo | Senior Product Designer & Systems Architect",
    description: "Portfolio of Omar Guillermo, Senior Product Designer & Systems Architect. Designing high-impact digital products, scalable design systems & complex AI applications.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.classList.add(theme);
                  
                  const brand = localStorage.getItem('brand-theme') || 'forest';
                  document.documentElement.setAttribute('data-brand', brand);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col justify-between">
        <div>
          <Navbar />
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
