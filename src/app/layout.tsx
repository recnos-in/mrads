import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces } from 'next/font/google';
import { siteUrl } from '@/lib/site';
import '../styles/tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Hyperlocal Advertising Partner — Display, Outdoor & Digital | Mr. Ads',
  description:
    'Mr. Ads connects brands with the right local audience through in-venue displays, moving media, offline distribution, print and AI solutions. Request a media plan.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/assets/images/app_logo.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Mr. Ads (MR) — Hyperlocal Advertising Partner',
    description: 'Display, Outdoor, Offline & Digital Advertising Solutions.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1400&auto=format&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Mr. Ads (MR)',
    url: siteUrl,
    description:
      'Hyperlocal Advertising: Display Advertising, Advertising on the Move, Offline Distribution, Print & Creative, Website & AI Solutions.',
    telephone: '+91 96865 44644',
    email: 'knowus@mr-ads.in',
    slogan: 'Your Hyperlocal Advertising Partner',
  };

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Mr. Ads (MR)',
    url: siteUrl,
    publisher: { '@id': `${siteUrl}/#organization` },
  };

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Serif+Display:ital@0;1&family=Instrument+Serif:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,300..700;1,14..32,300..700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
