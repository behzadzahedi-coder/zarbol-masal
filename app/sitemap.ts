import type { MetadataRoute } from 'next';
import { canonicalProverbs, proverbPath, siteUrl, topics } from './seo-content';
import {localizedPath} from './i18n';
export default function sitemap():MetadataRoute.Sitemap {
  const paths=['', '/lernpaket', '/fuer-sprachkurse', '/ueber-die-sammlung', ...topics.map(t=>`/themen/${t.slug}`), ...canonicalProverbs.map(proverbPath)];
  return (['de','fa'] as const).flatMap(locale=>paths.map(path=>({url:siteUrl+localizedPath(locale,path)})));
}
