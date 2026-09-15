import type { MetadataRoute } from 'next';
import { canonicalProverbs, proverbPath, siteUrl, topics } from './seo-content';
export default function sitemap():MetadataRoute.Sitemap {
  return ['/', '/lernpaket', '/ueber-die-sammlung', ...topics.map(t=>`/themen/${t.slug}`), ...canonicalProverbs.map(proverbPath)].map(path=>({url:siteUrl+path}));
}
