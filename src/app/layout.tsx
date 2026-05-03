import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import CursorGlow from "@/components/effects/CursorGlow";
import ScrollProgress from "@/components/effects/ScrollProgress";
import Preloader from "@/components/effects/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://himanshupandey.dev"),
  title: {
    default: "Himanshu Pandey — DevOps & Cloud Engineer",
    template: "%s · Himanshu Pandey",
  },
  description:
    "DevOps & Cloud Engineer with 4+ years of experience designing scalable, secure, automated cloud infrastructure on AWS, Kubernetes and Terraform.",
  applicationName: "Himanshu Pandey — Portfolio",
  keywords: [
    "Himanshu Pandey",
    "DevOps Engineer",
    "Cloud Engineer",
    "AWS Specialist",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "SRE",
    "Jenkins",
    "GitHub Actions",
    "Infrastructure as Code",
    "Platform Engineering",
    "Site Reliability Engineering",
    "AI DevOps",
  ],
  authors: [{ name: "Himanshu Pandey" }],
  creator: "Himanshu Pandey",
  publisher: "Himanshu Pandey",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://himanshupandey.dev",
    title: "Himanshu Pandey — DevOps & Cloud Engineer",
    description:
      "Building scalable, secure, automated cloud infrastructure for high-velocity engineering teams.",
    siteName: "Himanshu Pandey",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Pandey — DevOps & Cloud Engineer",
    description:
      "Building scalable, secure, automated cloud infrastructure for high-velocity engineering teams.",
    creator: "@himanshugzp66",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${grotesk.variable} ${mono.variable} dark`}
    >
      <body className="bg-ink-950 text-white font-sans">
        <Preloader />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
