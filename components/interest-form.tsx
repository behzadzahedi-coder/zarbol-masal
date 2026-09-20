import type {Locale} from '@/app/i18n';

export default function InterestForm({locale}:{locale:Locale}){
 const fa=locale==='fa';
 return <form className="interest-form no-print" action="https://formsubmit.co/behzad.zahedi@gmail.com" method="POST" aria-labelledby="interest-title">
  <h2 id="interest-title">{fa?'به بستهٔ آموزشی علاقه دارید؟':'Interesse am Lernpaket?'}</h2>
  <p>{fa?'ایمیل خود را بفرستید تا بدانیم آیا این بسته برای شما مفید است. این درخواست خرید نیست.':'Schreib uns, wenn du das Paket für 9,90 € interessant findest. Deine Nachricht ist keine Bestellung.'}</p>
  <input type="hidden" name="_subject" value="Zarbol Masal – Interesse am Lernpaket"/>
  <input type="hidden" name="_captcha" value="false"/>
  <input type="hidden" name="_url" value={`https://www.zarbol-masal.de/${locale}/lernpaket`}/>
  <label htmlFor="interest-email">{fa?'ایمیل شما':'Deine E-Mail-Adresse'}</label>
  <input id="interest-email" name="email" type="email" autoComplete="email" required/>
  <label htmlFor="interest-message">{fa?'پیام (اختیاری)':'Was würdest du gern damit lernen? (optional)'}</label>
  <textarea id="interest-message" name="message" rows={3} maxLength={1000}/>
  <div className="interest-honey" aria-hidden="true"><label htmlFor="interest-website">Website</label><input id="interest-website" name="_honey" tabIndex={-1} autoComplete="off"/></div>
  <p className="interest-privacy">{fa?'برای ارسال پیام، اطلاعات شما به سرویس FormSubmit منتقل می‌شود و به آدرس ایمیل ما فرستاده می‌شود.':'Für den Versand gehen deine Angaben an FormSubmit und anschließend per E-Mail an uns.'} <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">{fa?'حریم خصوصی FormSubmit':'Datenschutzhinweise von FormSubmit'}</a></p>
  <button type="submit">{fa?'اعلام علاقه':'Interesse senden'}</button>
 </form>;
}
