import type { Metadata } from 'next';
import LearningPackage from '@/components/learning-package';

export const metadata: Metadata = {
  title: 'Persisch–Deutsch Lernpaket & kostenlose Lernprobe | Zarbol Masal',
  description: 'Fünf persische Sprichwörter mit Umschrift, deutschen Entsprechungen und interaktiven Übungen kostenlos ausprobieren und ausdrucken.',
  alternates: { canonical: '/lernpaket/' },
  openGraph: { title: 'Sprichwörter lernen mit Zarbol Masal', description: 'Kostenlose Lernprobe mit fünf persischen und deutschen Sprichwörtern.', url: '/lernpaket/' },
};

export default function LearningPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: 'Zarbol Masal – kostenlose Lernprobe',
    url: 'https://www.zarbol-masal.de/lernpaket/#lernprobe',
    description: 'Fünf persische Sprichwörter mit Umschrift, deutschen Entsprechungen und Übungen.',
    inLanguage: ['de', 'fa'],
    isAccessibleForFree: true,
    learningResourceType: 'Übung',
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><LearningPackage /></>;
}
