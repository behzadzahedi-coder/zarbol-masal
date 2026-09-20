import {headers} from 'next/headers';
import LocalizedShell from '@/components/localized-shell';
import {ui,localizedPath} from './i18n';
export default async function NotFound(){const locale=(await headers()).get('x-zarbol-locale')==='fa'?'fa':'de';return <LocalizedShell locale={locale}><h1>{ui[locale].notFound}</h1><a href={localizedPath(locale)}>{ui[locale].back}</a></LocalizedShell>;}
