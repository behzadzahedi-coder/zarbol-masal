import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zarbol-masal.de'),
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
  title: 'Persische Sprichwörter auf Deutsch: Bedeutung & Beispiele | Zarbol Masal',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  description:
    'Persische und deutsche Sprichwörter mit lateinischer Umschrift, Bedeutungen und Alltagsbeispielen auf Deutsch und Persisch entdecken – auch ohne persische Lesekenntnisse.',
  keywords: [
    'persische Sprichwörter',
    'deutsche Sprichwörter',
    'Farsi Deutsch',
    'ضرب المثل فارسی',
    'Übersetzung',
  ],
  openGraph: {
    title: 'Zarbol Masal | Sprichwörter neu verstehen',
    description:
      'Mit lateinischer Umschrift, Bedeutungen und Beispielen in beiden Sprachen.',
    url: '/',
    siteName: 'Zarbol Masal',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1730,
        height: 909,
        alt: 'Zarbol Masal – Sprichwörter neu verstehen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zarbol Masal | Sprichwörter neu verstehen',
    description:
      'Persische und deutsche Sprichwörter kulturell vergleichen.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebSite', '@id': 'https://www.zarbol-masal.de/#website', name: 'Zarbol Masal', alternateName: 'ضرب‌المثل', url: 'https://www.zarbol-masal.de/', inLanguage: ['de', 'fa'], description: 'Persische und deutsche Sprichwörter mit Umschrift, Bedeutung und Alltagsbeispielen.' }) }} />{children}</body>
    </html>
  );
}
