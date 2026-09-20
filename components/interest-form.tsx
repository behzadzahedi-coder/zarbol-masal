'use client';

import {useState, type FormEvent} from 'react';
import type {Locale} from '@/app/i18n';

export default function InterestForm({locale}:{locale:Locale}){
 const fa=locale==='fa';
 const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle');
 async function submit(event:FormEvent<HTMLFormElement>){
  event.preventDefault();
  const form=event.currentTarget;
  if(!form.reportValidity())return;
  const fields=new FormData(form);
  if(fields.get('website'))return;
  setStatus('sending');
  try{
   const response=await fetch('https://formsubmit.co/ajax/behzad.zahedi@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({email:fields.get('email'),message:fields.get('message'),_subject:'Zarbol Masal – Interesse am Lernpaket',_url:`https://www.zarbol-masal.de/${locale}/lernpaket`})});
   const result=await response.json();
   if(!response.ok||result.success===false||result.success==='false')throw new Error('Delivery failed');
   form.reset();setStatus('success');
  }catch{setStatus('error');}
 }
 return <form className="interest-form no-print" onSubmit={submit} aria-labelledby="interest-title">
  <h2 id="interest-title">{fa?'به بستهٔ آموزشی علاقه دارید؟':'Interesse am Lernpaket?'}</h2>
  <p>{fa?'ایمیل خود را بفرستید تا بدانیم آیا این بسته برای شما مفید است. این درخواست خرید نیست.':'Schreib uns, wenn du das Paket für 9,90 € interessant findest. Deine Nachricht ist keine Bestellung.'}</p>
  <label htmlFor="interest-email">{fa?'ایمیل شما':'Deine E-Mail-Adresse'}</label>
  <input id="interest-email" name="email" type="email" autoComplete="email" required disabled={status==='sending'}/>
  <label htmlFor="interest-message">{fa?'پیام (اختیاری)':'Was würdest du gern damit lernen? (optional)'}</label>
  <textarea id="interest-message" name="message" rows={3} maxLength={1000} disabled={status==='sending'}/>
  <div className="interest-honey" aria-hidden="true"><label htmlFor="interest-website">Website</label><input id="interest-website" name="website" tabIndex={-1} autoComplete="off"/></div>
  <p className="interest-privacy">{fa?'برای ارسال پیام، اطلاعات شما به سرویس FormSubmit منتقل می‌شود و به آدرس ایمیل ما فرستاده می‌شود.':'Für den Versand gehen deine Angaben an FormSubmit und anschließend per E-Mail an uns.'} <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">{fa?'حریم خصوصی FormSubmit':'Datenschutzhinweise von FormSubmit'}</a></p>
  <button type="submit" disabled={status==='sending'}>{status==='sending'?(fa?'در حال ارسال…':'Wird gesendet…'):(fa?'اعلام علاقه':'Interesse senden')}</button>
  <p className="interest-status" role="status" aria-live="polite">{status==='success'?(fa?'پیام شما ارسال شد. سپاسگزاریم.':'Deine Nachricht wurde gesendet. Danke!'):status==='error'?(fa?'ارسال انجام نشد. لطفاً دوباره تلاش کنید.':'Die Nachricht konnte nicht gesendet werden. Bitte versuche es erneut.'):''}</p>
 </form>;
}
