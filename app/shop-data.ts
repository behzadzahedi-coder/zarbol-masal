export const shop = {
  seller: 'Behzad Zahedi',
  street: 'Josephsburgstraße 4a',
  city: '81673 München',
  email: 'behzad.zahedi@gmail.com',
  paymentUrl: 'https://www.paypal.com/ncp/payment/TQYAAJRKQWVTS',
  price: '9,90 €',
  pages: 41,
  sampleUrl: '/downloads/zarbol-masal-leseprobe.pdf',
} as const;

export const shopPageText = {
  '/fuer-sprachkurse': { de: ['Sprichwörter für Sprachkurse', 'Unterrichtsmaterial mit persischen Sprichwörtern, Fotos und deutschen Erklärungen für Ihren Sprachkurs anfragen.'], fa: ['ضرب‌المثل‌ها برای کلاس زبان', 'برای استفاده از ضرب‌المثل‌ها، تصویرها و تمرین‌ها در کلاس زبان درخواست بفرستید.'] },
  '/impressum': { de: ['Impressum', 'Anbieter und Kontakt von Zarbol Masal.'], fa: ['اطلاعات ارائه‌دهنده', 'مشخصات و راه تماس با ارائه‌دهندهٔ زَربُ‌المَثَل.'] },
  '/datenschutz': { de: ['Datenschutz', 'Informationen zum Umgang mit Daten bei Zarbol Masal.'], fa: ['حریم خصوصی', 'اطلاعات مربوط به پردازش داده‌ها در زَربُ‌المَثَل.'] },
  '/kaufhinweise': { de: ['Kauf und Lieferung', 'Preis, Lieferung per E-Mail, Nutzung und Widerruf des digitalen Lernpakets.'], fa: ['خرید و دریافت فایل', 'قیمت، دریافت PDF با ایمیل، استفاده از فایل و حق انصراف.'] },
  '/widerruf': { de: ['Vertrag widerrufen', 'Widerrufsbelehrung und Formular für Ihren Kauf bei Zarbol Masal.'], fa: ['انصراف از خرید', 'توضیح حق انصراف و فرم اعلام انصراف از خرید.'] },
  '/anfrage-gesendet': { de: ['Nachricht übermittelt', 'Vielen Dank für Ihre Nachricht.'], fa: ['پیام ارسال شد', 'از پیام شما سپاسگزاریم.'] },
} as const;
export type ShopPath = keyof typeof shopPageText;
