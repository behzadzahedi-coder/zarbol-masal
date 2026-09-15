import BrandLogo from './brand-logo';
import LanguageSwitch from './language-switch';
import { type Locale, localizedPath, ui } from '@/app/i18n';
export default function LocalizedShell({locale,path='',wide=false,children}:{locale:Locale;path?:string;wide?:boolean;children:React.ReactNode}){
 const t=ui[locale];
 return <div className="content-page localized-site" lang={locale} dir={locale==='fa'?'rtl':'ltr'}>
  <a className="learning-skip no-print" href="#inhalt">{t.skip}</a>
  <header className="locale-header no-print"><div className="locale-header-top">
   <a className="brand-link" href={localizedPath(locale)} aria-label={t.home}><BrandLogo /></a><LanguageSwitch locale={locale} path={path}/>
  </div><nav className="locale-navigation" aria-label={t.nav}><a href={localizedPath(locale)}>{t.home}</a><a href={localizedPath(locale,'/lernpaket')}>{t.lessons}</a><a href={localizedPath(locale,'/ueber-die-sammlung')}>{t.about}</a></nav></header>
  <main id="inhalt" className={wide?'locale-collection':'content-wrap'}>{children}</main>
  <footer className="learning-footer no-print"><div className="learning-wrap"><p>{t.footer}</p><a href={localizedPath(locale,'/ueber-die-sammlung')}>{t.about}</a></div></footer>
 </div>;
}
