import { localizedPath, type Locale } from '@/app/i18n';
import { shop } from '@/app/shop-data';

export default function PackageOffer({ locale }: { locale: Locale }) {
  const fa = locale === 'fa';
  return <section className="package-offer no-print" id="lernpaket" aria-labelledby="package-heading">
    <div className="package-copy">
      <h1 id="package-heading">{fa ? '۵۰ ضرب‌المثل فارسی، یک بستهٔ آموزشی' : '50 Sprichwörter. Ein Lernpaket.'}</h1>
      <p className="content-lead">{fa ? 'با تصویر، معنی و موقعیت‌های روزمره یاد بگیرید. یک PDF برای مطالعه، تمرین و چاپ.' : 'Mit Fotos, Bedeutungen und Alltagssituationen lernen. Eine PDF zum Lesen, Üben und Ausdrucken.'}</p>
      <ul className="offer-list">
        <li>{fa ? '۴۱ صفحه با ۵۰ ضرب‌المثل فارسی و ۵۰ تصویر' : '41 Seiten mit 50 persischen Sprichwörtern und 50 Fotos'}</li>
        <li>{fa ? 'آوانویسی لاتین و توضیح‌ها به زبان آلمانی' : 'Lateinische Umschrift und deutsche Erklärungen'}</li>
        <li>{fa ? 'مثال‌های فارسی و آلمانی، ۲۰ تمرین با پاسخ' : 'Beispiele auf Deutsch und Persisch, 20 Aufgaben mit Lösungen'}</li>
        <li>{fa ? '۵۰ کارت یادگیری قابل چاپ' : '50 druckbare Lernkarten'}</li>
      </ul>
      <p className="offer-price">{fa ? '۹٫۹۰ یورو، یک‌بار' : '9,90 € einmalig'}</p>
      <p className="offer-note">{fa ? 'قیمت نهایی، بدون هزینهٔ ارسال. طبق § 19 UStG مالیات بر ارزش افزوده محاسبه نمی‌شود.' : 'Gesamtpreis, keine Versandkosten. Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.'}</p>
      <p>{fa ? 'PDF را حداکثر تا ۲۴ ساعت پس از تأیید پرداخت به ایمیل ثبت‌شده در پرداخت PayPal می‌فرستیم. ارسال فایل به‌صورت دستی انجام می‌شود.' : 'Du erhältst die PDF innerhalb von 24 Stunden nach bestätigter Zahlung an die beim PayPal-Kauf verwendete E-Mail-Adresse. Wir versenden sie persönlich per E-Mail.'}</p>
      <a className="shop-button" href={shop.paymentUrl}>{fa ? 'ادامهٔ خرید در PayPal' : 'Weiter zu PayPal – 9,90 €'}</a>
      <p className="offer-note">{fa ? 'پرداخت نهایی در PayPal انجام می‌شود. اشتراک نیست.' : 'Den Kauf schließt du bei PayPal ab. Kein Abo.'} <a href={localizedPath(locale, '/kaufhinweise')}>{fa ? 'خرید و دریافت فایل' : 'Kauf und Lieferung'}</a> · <a href={localizedPath(locale, '/widerruf')}>{fa ? 'حق انصراف' : 'Widerrufsrecht'}</a></p>
    </div>
    <figure className="package-preview">
      <a href={shop.sampleUrl} aria-label={fa ? 'باز کردن نمونهٔ رایگان PDF' : 'Kostenlose PDF-Leseprobe öffnen'}><img src="/learning-package/preview.jpg" alt={fa ? 'دو صفحه‌درس از بسته با تصویر، ضرب‌المثل فارسی و مثال‌ها' : 'Echte Lernheftseite mit zwei Sprichwörtern, Fotos und Alltagsbeispielen'} width={636} height={900} /></a>
      <figcaption><a href={shop.sampleUrl}>{fa ? 'نمونهٔ رایگان: ۴ صفحهٔ PDF' : 'Kostenlose Leseprobe: 4 Seiten als PDF'}</a></figcaption>
    </figure>
    <div className="package-audience"><p>{fa ? 'زبان اصلی توضیح‌ها و تمرین‌های این PDF آلمانی است. متن ضرب‌المثل‌ها و مثال‌های فارسی نیز در آن آمده‌اند.' : 'Für Menschen, die Persisch mit deutschen Erklärungen lernen möchten. Du brauchst einen PDF-Reader und für den Ausdruck einen Drucker; ein Konto auf dieser Website ist nicht nötig.'}</p><a href={localizedPath(locale, '/fuer-sprachkurse')}>{fa ? 'برای کلاس زبان می‌خواهید؟ درخواست بدهید' : 'Für einen Sprachkurs? Unterrichtsnutzung anfragen'}</a></div>
  </section>;
}
