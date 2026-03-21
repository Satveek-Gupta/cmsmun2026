import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridScan } from "@/components/GridScan";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://cmsmun2026.vercel.app"),
  title: "CMSMUN '26",
  description:
    "Official website for CMSMUN 2026 (5th Edition) hosted by City Montessori School, Aliganj Campus I.",
  icons: {
    icon: "/CMSMUN.jpeg",
    apple: "/CMSMUN.jpeg",
  },
  openGraph: {
    title: "CMSMUN '26",
    description: "Official website for CMSMUN 2026 (5th Edition)",
    images: [{ url: "/CMSMUN.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/CMSMUN.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${geistSans.variable} ${geistMono.variable}`}>
      <body
        className={`bg-transparent text-slate-100 antialiased min-h-screen relative`}
      >
        <div className="fixed inset-0 z-[-10] bg-navy-light/90">
          <GridScan
            linesColor="#22d3ee"
            scanColor="#06b6d4"
            scanOpacity={0.2}
            gridScale={0.15}
            bloomIntensity={0.4}
            scanDuration={3}
            enableWebcam={false}
            className=""
            style={{}}
          />
        </div>
        <div className="flex min-h-screen flex-col relative z-0">
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}