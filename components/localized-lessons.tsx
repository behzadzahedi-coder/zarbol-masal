'use client';
import {useState} from 'react';
import {lessonIds,lessons,persianQuestions} from '@/app/lesson-data';
import {proverbLearning} from '@/app/proverb-learning';
import {type Locale,ui} from '@/app/i18n';
export default function LocalizedLessons({locale}:{locale:Locale}){
 const fa=locale==='fa';const t=ui[locale];const [answers,setAnswers]=useState<Record<number,number>>({});
 const count=Object.keys(answers).length;const correct=lessons.filter((l,i)=>answers[i]===l.answer).length;
 return <section id="lernprobe"><div className="learning-section-heading"><h2>{fa?'پنج ضرب‌المثل برای تمرین':'Fünf Sprichwörter zum Ausprobieren'}</h2><button type="button" className="learning-button learning-button-secondary no-print" onClick={()=>window.print()}>{t.print}</button></div>
 <div className="learning-lessons">{lessons.map((lesson,i)=>{const l=proverbLearning[lessonIds[i]];const choices=fa?persianQuestions[i].slice(1):lesson.choices;return <article className="learning-lesson" key={i}>
 <h3 lang={fa?'de':'fa'} dir={fa?'ltr':'rtl'}>{fa?lesson.de:lesson.fa}</h3>{!fa&&<p className="learning-pronunciation" lang="fa-Latn" dir="ltr">{l.latin}</p>}
 <p className="learning-equivalent">{fa?lesson.fa:lesson.de}</p><p><strong>{t.meaning}: </strong>{fa?l.meaningFa:lesson.explanation}</p>
 {fa&&<p lang="de" dir="ltr">{l.exampleDe}</p>}<p><strong>{t.example}: </strong>{fa?l.exampleFa:l.exampleDe}</p>
 <fieldset className="no-print"><legend>{fa?persianQuestions[i][0]:lesson.question}</legend>{choices.map((choice,k)=><label className="learning-choice" key={k}><input type="radio" name={`lesson-${i}`} checked={answers[i]===k} onChange={()=>setAnswers(old=>({...old,[i]:k}))}/><span>{choice}</span></label>)}</fieldset>
 <div aria-live="polite" className="no-print">{answers[i]!==undefined&&<p className={`learning-feedback ${answers[i]===lesson.answer?'is-correct':''}`}>{answers[i]===lesson.answer?t.right+' '+(fa?l.meaningFa:lesson.explanation):t.wrong}</p>}</div>
 <div className="print-only"><p>{fa?persianQuestions[i][0]:lesson.question}</p>{choices.map((choice,k)=><p key={k}>□ {choice}</p>)}</div>
 </article>})}</div>
 <div role="status" className="learning-progress no-print"><p>{count.toLocaleString(fa?'fa':'de')} {t.progress}</p>{count===5&&<p>{correct.toLocaleString(fa?'fa':'de')} {t.score}</p>}</div>
 {count>0&&<button type="button" className="learning-button learning-button-secondary no-print" onClick={()=>setAnswers({})}>{t.restart}</button>}
 <section className="print-only"><h2>{t.solutions}</h2>{lessons.map((l,i)=><p key={i}>{i+1}. {fa?persianQuestions[i][l.answer+1]:l.choices[l.answer]}</p>)}</section>
 </section>;
}
