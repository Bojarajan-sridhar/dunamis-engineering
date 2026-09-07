import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companyData } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dunamisengg.com"),
  title: {
    default: "DUNAMIS Engineering and Construction | Industrial Fabrication & PEB Solutions",
    template: "%s | DUNAMIS Engineering",
  },
  description:
    "Dunamis Engineering and Construction Private Limited is a premier B2B industrial engineering company in Chennai & Sriperumbudur specializing in PEB fabrication, heavy structural steel (70,000+ sq.ft. yard), pipeline works, and turnkey construction.",
  keywords: [
    "Dunamis Engineering",
    "Dunamis Engineering and Construction",
    "PEB Fabrication",
    "Structural Fabrication",
    "Equipment Fabrication",
    "Erection Works",
    "Pipeline Works",
    "Industrial Construction",
    "Engineering Services",
    "Sriperumbudur Industrial Corridor",
    "Chennai Structural Steel",
    "Rock Wool Panel Fixing",
  ],
  authors: [{ name: "Dunamis Construction and Engineering Pvt Ltd" }],
  creator: "Dunamis Engineering",
  publisher: "Dunamis Engineering",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "DUNAMIS Engineering and Construction | Industrial Fabrication & PEB Solutions",
    description:
      "Premier industrial engineering company specializing in PEB fabrication, 70,000+ sq.ft. heavy open yard structural works, pipeline works, and turnkey execution.",
    url: "https://dunamisengg.com",
    siteName: "Dunamis Engineering",
    images: [
      {
        url: "/images/hero/slider-1.jpg",
        width: 1200,
        height: 630,
        alt: "Dunamis Engineering Industrial Fabrication Facility",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DUNAMIS Engineering and Construction",
    description:
      "Premier industrial engineering, PEB fabrication, and structural construction in Chennai & Sriperumbudur.",
    images: ["/images/hero/slider-1.jpg"],
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: companyData.legalName,
    alternateName: companyData.brandName,
    url: "https://dunamisengg.com",
    logo: "https://dunamisengg.com/images/logo.png",
    description: companyData.subheadline,
    telephone: companyData.contact.primaryPhone,
    email: companyData.contact.email,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: companyData.addresses.registeredOffice.street,
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: companyData.addresses.registeredOffice.pincode,
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: companyData.addresses.fabricationUnit.street,
        addressLocality: "Sriperumbudur Taluk",
        addressRegion: "Tamil Nadu",
        postalCode: companyData.addresses.fabricationUnit.pincode,
        addressCountry: "IN",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.002338,
      longitude: 79.903656,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-brand-accent selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
