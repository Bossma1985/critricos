import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LaNaranjaDigna - Cítricos al por Mayor de la Valldigna",
  description: "Calidad de agricultor, directo a tu negocio. Somos comercializadores de cítricos al por mayor y agricultores de tercera generación. Ofrecemos la fruta más fresca y una solución integral de zumo para hostelería.",
  keywords: "naranjas, cítricos, venta mayor, hostelería, zumo natural, valldigna, agricultura",
  authors: [{ name: "LaNaranjaDigna" }],
  creator: "LaNaranjaDigna",
  publisher: "LaNaranjaDigna",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "LaNaranjaDigna - Cítricos al por Mayor de la Valldigna",
    description: "Calidad de agricultor, directo a tu negocio. Solución integral de zumo para hostelería.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'LaNaranjaDigna',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'LaNaranjaDigna - Cítricos de la Valldigna',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LaNaranjaDigna - Cítricos al por Mayor de la Valldigna",
    description: "Calidad de agricultor, directo a tu negocio. Solución integral de zumo para hostelería.",
    images: ['/logo.png'],
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
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
