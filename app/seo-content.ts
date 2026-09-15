import { proverbPairs } from './proverbs';
import type { Proverb } from './additional-proverbs';

export const siteUrl = 'https://www.zarbol-masal.de';
export const topics = [
  { slug: 'geduld', name: 'Geduld', fa: 'صبر', description: 'Persische Sprichwörter über Geduld beschreiben, warum kleine Schritte und Ausdauer zählen. Hier findest du passende deutsche Entsprechungen, eine lesbare Umschrift und Beispiele für den Alltag.' },
  { slug: 'weisheit', name: 'Weisheit', fa: 'خرد', description: 'Sprichwörter über Weisheit helfen, Erfahrungen einzuordnen und vorschnelle Urteile zu hinterfragen. Vergleiche die persischen Bilder mit deutschen Redewendungen und ihrer Bedeutung.' },
  { slug: 'arbeit', name: 'Arbeit', fa: 'کار', description: 'Diese persischen Sprichwörter handeln von Arbeit, Übung und Eigeninitiative. Deutsche Entsprechungen und konkrete Beispiele zeigen, wie du sie in Gesprächen verwenden kannst.' },
  { slug: 'zusammenarbeit', name: 'Zusammenarbeit', fa: 'همکاری', description: 'Gemeinsam gelingt vieles leichter – manchmal reden aber auch zu viele Menschen mit. Diese persischen und deutschen Sprichwörter zeigen beide Seiten der Zusammenarbeit.' },
  { slug: 'alltag', name: 'Alltag', fa: 'زندگی روزمره', description: 'Neid, Gewohnheiten und kleine Entscheidungen: Sprichwörter machen Alltagserfahrungen in wenigen Worten greifbar. Entdecke die persischen Formulierungen und ihre deutschen Entsprechungen.' },
  { slug: 'gelegenheit', name: 'Gelegenheit', fa: 'فرصت', description: 'Wann ist der richtige Moment zum Handeln? Diese persischen Sprichwörter über Gelegenheiten zeigen, wie ähnliche Gedanken auf Deutsch ausgedrückt werden.' },
] as const;

function normalizePersian(text: string) {
  return text.normalize('NFKC').replace(/ي/g, 'ی').replace(/ك/g, 'ک').replace(/[\s\u200c\u200d\u0640.,،؛!?؟:]/g, '');
}
function slug(text: string) {
  return text.toLowerCase().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}
// Identical Persian sayings share a single permanent page, even when listed twice.
export const canonicalProverbs = proverbPairs.filter((p,index,all) => all.findIndex(other => normalizePersian(other.proverb) === normalizePersian(p.proverb)) === index);
export function canonicalProverb(p: Proverb) { return canonicalProverbs.find(other => normalizePersian(other.proverb) === normalizePersian(p.proverb)) ?? p; }
export function proverbSlug(p: Proverb) { const item=canonicalProverb(p); return `${item.id}-${slug(item.equivalent)}`; }
export function proverbPath(p: Proverb) { return `/sprichwoerter/${proverbSlug(p)}`; }
export function findProverb(key: string) { return canonicalProverbs.find(p => proverbSlug(p) === key); }
export function topicPath(category: string) { return `/themen/${topics.find(t => t.name === category)?.slug ?? 'alltag'}`; }
export function jsonLd(value: unknown) { return JSON.stringify(value).replace(/</g,'\\u003c'); }
