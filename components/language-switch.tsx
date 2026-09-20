'use client';
import type { Locale } from '@/app/i18n';
import { localizedPath, ui } from '@/app/i18n';
export default function LanguageSwitch({locale,path}:{locale:Locale;path:string}) {
  return <nav className="language-switch" dir="ltr" aria-label={ui[locale].language}>
    {(['de','fa'] as const).map(next=><a key={next} href={localizedPath(next,path)} lang={next} hrefLang={next} aria-current={locale===next?'page':undefined} onClick={event=>{
      document.cookie=`zarbol_locale=${next}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol==='https:'?'; Secure':''}`;
      // Keep anchors and search state when changing language, while retaining crawlable links.
      event.currentTarget.href=localizedPath(next,path)+location.search+location.hash;
    }}>{next==='de'?'Deutsch':'فارسی'}</a>)}
  </nav>;
}
