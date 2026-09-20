import { localizedPath, type Locale } from '@/app/i18n';
import { shop } from '@/app/shop-data';

export default function CourseInquiry({ locale }: { locale: Locale }) {
  const fa = locale === 'fa';
  return <>
    <h1>{fa ? 'ضرب‌المثل‌ها برای کلاس زبان شما' : 'Sprichwörter für Ihren Sprachkurs'}</h1>
    <p className="content-lead">{fa ? 'با تصویر شروع کنید، دربارهٔ معنی گفت‌وگو کنید و با موقعیت‌های واقعی تمرین کنید.' : 'Mit einem Foto einsteigen, über die Bedeutung sprechen und an Alltagssituationen üben.'}</p>
    <img className="course-photo" src="/photos/fa/8.webp" alt={fa ? 'تصویری برای ضرب‌المثل «یک دست صدا ندارد»' : 'Merkbild zum persischen Sprichwort „Eine Hand allein macht kein Geräusch“'} width={960} height={640} />
    <section><h2>{fa ? 'مواد آموزشی برای استفاده در کلاس' : 'Material für den Einsatz im Unterricht'}</h2><p>{fa ? 'بسته شامل ۵۰ ضرب‌المثل فارسی، تصویر، توضیح آلمانی، تمرین و کارت یادگیری است. اگر می‌خواهید فایل‌ها را در کلاس استفاده کنید، برای شرایط استفادهٔ گروهی با ما تماس بگیرید.' : 'Das Lernpaket enthält 50 persische Sprichwörter mit Fotos, deutschen Erklärungen, Übungen und Lernkarten. Für Kopien oder digitale Nutzung innerhalb eines Kurses stimmen wir den Umfang mit Ihnen ab.'}</p><p>{fa ? 'نمونهٔ PDF را پیش از درخواست ببینید. توضیح‌ها و تمرین‌های بسته به زبان آلمانی هستند.' : 'Sehen Sie sich vorab die Leseprobe an. Die Erklärungen und Aufgaben im Paket sind auf Deutsch; persische Texte und Beispiele ergänzen sie.'}</p><a href={shop.sampleUrl}>{fa ? 'نمونهٔ PDF' : 'PDF-Leseprobe ansehen'}</a></section>
    <form className="interest-form" action={`https://formsubmit.co/${shop.email}`} method="POST" aria-labelledby="course-form-title">
      <h2 id="course-form-title">{fa ? 'درخواست پیشنهاد برای کلاس' : 'Angebot für Ihren Kurs anfragen'}</h2>
      <p>{fa ? 'درخواست رایگان و بدون تعهد است. پس از بررسی نیاز شما، دربارهٔ محتوا، اجازهٔ استفاده و قیمت توافق می‌کنیم.' : 'Die Anfrage ist kostenlos und unverbindlich. Inhalt, Nutzungsumfang und Preis vereinbaren wir anschließend mit Ihnen.'}</p>
      <input type="hidden" name="_subject" value="Zarbol Masal – Anfrage für Sprachkurs" /><input type="hidden" name="_captcha" value="false" /><input type="hidden" name="_next" value={`https://www.zarbol-masal.de/${locale}/anfrage-gesendet`} />
      <label htmlFor="course-name">{fa ? 'نام شما یا مؤسسه' : 'Ihr Name oder Ihre Einrichtung'}</label><input id="course-name" name="name" type="text" autoComplete="name" required maxLength={160} />
      <label htmlFor="course-email">{fa ? 'ایمیل' : 'E-Mail-Adresse'}</label><input id="course-email" name="email" type="email" autoComplete="email" required />
      <label htmlFor="course-size">{fa ? 'تعداد زبان‌آموزان' : 'Anzahl der Lernenden'}</label><select id="course-size" name="Gruppengroesse" required defaultValue=""><option value="" disabled>{fa ? 'انتخاب کنید' : 'Bitte auswählen'}</option><option>1–10</option><option>11–25</option><option>26–50</option><option value="mehr als 50">{fa ? 'بیش از ۵۰' : 'Mehr als 50'}</option></select>
      <label htmlFor="course-message">{fa ? 'چطور می‌خواهید از مطالب استفاده کنید؟' : 'Wie möchten Sie das Material einsetzen?'}</label><textarea id="course-message" name="message" rows={4} maxLength={2000} placeholder={fa ? 'مثلاً چاپ کارت‌ها برای یک کلاس حضوری' : 'Zum Beispiel: gedruckte Lernkarten für einen Präsenzkurs.'} required />
      <div className="interest-honey" aria-hidden="true"><label htmlFor="course-honey">Website</label><input id="course-honey" name="_honey" tabIndex={-1} autoComplete="off" /></div>
      <p className="interest-privacy">{fa ? 'اطلاعات برای پاسخ به درخواست، از طریق FormSubmit به ایمیل ما ارسال می‌شود.' : 'Ihre Angaben werden für die Beantwortung über FormSubmit an uns per E-Mail übermittelt.'} <a href={localizedPath(locale, '/datenschutz')}>{fa ? 'حریم خصوصی' : 'Datenschutz'}</a></p>
      <button type="submit">{fa ? 'ارسال درخواست بدون تعهد' : 'Unverbindlich anfragen'}</button>
      <p className="offer-note">{fa ? 'اگر ارسال انجام نشد، مستقیم ایمیل بفرستید:' : 'Falls der Versand nicht funktioniert, schreiben Sie direkt an'} <a href={`mailto:${shop.email}`}>{shop.email}</a>.</p>
    </form>
  </>;
}
