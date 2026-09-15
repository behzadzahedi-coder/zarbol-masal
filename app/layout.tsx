import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.zarbol-masal.de'),
  alternates: { canonical: '/' },
  title: 'Zarbol Masal | Persische & deutsche Sprichwörter',
  description:
    'Persische und deutsche Sprichwörter mit Bedeutung, Übersetzung und kulturell passender Entsprechung entdecken.',
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
      'Persische und deutsche Sprichwörter mit Bedeutung und kulturell passender Entsprechung entdecken.',
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
      <body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Zarbol Masal', url: 'https://www.zarbol-masal.de/', inLanguage: ['de', 'fa'], description: 'Persische und deutsche Sprichwörter im kulturellen Vergleich.' }) }} />{children}</body>
    </html>
  );
}
