import { localizedPath, type Locale } from '@/app/i18n';
import { shop } from '@/app/shop-data';

export default function PackageTeaser({ locale }: { locale: Locale }) {
  const fa = locale === 'fa';
  return <aside className="homepage-offer no-print" aria-labelledby="home-package-title">
    <a className="homepage-offer-preview" href={shop.sampleUrl} aria-label={fa ? 'باز کردن نمونهٔ رایگان PDF' : 'Kostenlose PDF-Leseprobe öffnen'}>
      <img src="/learning-package/preview.jpg" alt={fa ? 'نمونه‌ای از صفحهٔ آموزشی با عکس و ضرب‌المثل فارسی' : 'Lernheftseite mit Fotos und persischen Sprichwörtern'} width={636} height={899} loading="lazy" />
    </a>
    <div className="homepage-offer-copy">
      <h2 id="home-package-title">{fa ? 'بستهٔ PDF برای یادگیری فارسی' : '50 persische Sprichwörter als PDF'}</h2>
      <p>{fa ? '۴۱ صفحه با تصویر، مثال، تمرین و کارت یادگیری. توضیح‌ها و تمرین‌ها به زبان آلمانی هستند.' : '41 Seiten mit Fotos, Beispielen, Übungen und Lernkarten. Zum Lesen, Üben und Ausdrucken.'}</p>
      <div className="homepage-offer-actions">
        <a className="learning-button" href={localizedPath(locale, '/lernpaket')}>{fa ? 'دیدن بسته · ۹٫۹۰ یورو' : `Lernpaket ansehen – ${shop.price}`}</a>
        <a className="homepage-sample-link" href={shop.sampleUrl}>{fa ? '۴ صفحهٔ رایگان' : '4 Seiten kostenlos ansehen'}</a>
      </div>
      <p className="homepage-offer-note">{fa ? 'پرداخت یک‌باره، بدون هزینهٔ ارسال. طبق § 19 UStG مالیات بر ارزش افزوده محاسبه نمی‌شود. ارسال با ایمیل طی ۲۴ ساعت پس از تأیید پرداخت.' : 'Einmaliger Gesamtpreis, keine Versandkosten. Gemäß § 19 UStG wird keine Umsatzsteuer berechnet. Versand per E-Mail innerhalb von 24 Stunden nach bestätigter Zahlung.'}</p>
    </div>
  </aside>;
}
