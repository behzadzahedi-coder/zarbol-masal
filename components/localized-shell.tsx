import BrandLogo from './brand-logo';
import LanguageSwitch from './language-switch';
import { type Locale, localizedPath, ui } from '@/app/i18n';
export default function LocalizedShell({locale,path='',wide=false,children}:{locale:Locale;path?:string;wide?:boolean;children:React.ReactNode}){
 const t=ui[locale];
 return <div className="content-page localized-site" lang={locale} dir={locale==='fa'?'rtl':'ltr'}>
  <a className="learning-skip no-print" href="#inhalt">{t.skip}</a>
  <header className="locale-header no-print"><div className="locale-header-top">
   <a className="brand-link" href={localizedPath(locale)} aria-label={t.home}><BrandLogo /></a><LanguageSwitch locale={locale} path={path}/>
  </div><nav className="locale-navigation" aria-label={t.nav}><a href={localizedPath(locale)}>{t.home}</a><a href={localizedPath(locale,'/lernpaket')}>{locale==='fa'?'بستهٔ آموزشی':'Lernpaket'}</a><a href={localizedPath(locale,'/fuer-sprachkurse')}>{locale==='fa'?'برای کلاس زبان':'Für Sprachkurse'}</a><a href={localizedPath(locale,'/ueber-die-sammlung')}>{t.about}</a></nav></header>
  <main id="inhalt" className={wide?'locale-collection':'content-wrap'}>{children}</main>
  <footer className="learning-footer no-print"><div className="learning-wrap"><p>{t.footer}</p><nav className="shop-footer" aria-label={locale==='fa'?'اطلاعات حقوقی':'Rechtliche Informationen'}><a href={localizedPath(locale,'/impressum')}>{locale==='fa'?'ارائه‌دهنده':'Impressum'}</a><a href={localizedPath(locale,'/datenschutz')}>{locale==='fa'?'حریم خصوصی':'Datenschutz'}</a><a href={localizedPath(locale,'/kaufhinweise')}>{locale==='fa'?'خرید و ارسال':'Kauf und Lieferung'}</a><a className="withdrawal-link" href={localizedPath(locale,'/widerruf')}>{locale==='fa'?'انصراف از خرید':'Vertrag widerrufen'}</a></nav></div></footer>
 </div>;
}
