'use client';

import { useState } from 'react';
import { proverbLearning } from '@/app/proverb-learning';
import { pronunciationGuideDe } from '@/app/pronunciation';

const lessonIds = [1, 2, 4, 56, 62];
const persianQuestions = [
  ['نکتهٔ اصلی چیست؟', 'قدم‌های کوچک در کنار هم نتیجه‌ای بزرگ می‌سازند.', 'فقط یک قدم بزرگ اهمیت دارد.'],
  ['این ضرب‌المثل چطور به موقعیت مربوط است؟', 'نتیجه از همین حالا قطعی است.', 'موفقیت را باید در پایان سنجید.'],
  ['این ضرب‌المثل چه مشکلی را بیان می‌کند؟', 'نبودِ هماهنگی میان مسئولان.', 'کم بودنِ زمان برای آشپزی.'],
  ['این ضرب‌المثل به چه چیزی تشویق می‌کند؟', 'منتظرِ بهترین زمان ماندن.', 'حتی بعد از تأخیر هم شروع کردن.'],
  ['کدام جمله مناسب است؟', 'ظاهرِ خوب، ارزشِ واقعی را ثابت نمی‌کند.', 'هر چیز زیبایی بی‌ارزش است.'],
];

const lessons = [
  { fa: 'قطره قطره جمع گردد، وانگهی دریا شود', de: 'Kleinvieh macht auch Mist.', literal: 'Tropfen für Tropfen sammelt es sich, bis ein Meer entsteht.', context: 'Du lernst jeden Tag drei neue Wörter. Nach einigen Monaten kennst du schon viele.', question: 'Was steht hier im Mittelpunkt?', choices: ['Viele kleine Schritte ergeben zusammen viel.', 'Nur ein großer Schritt zählt.'], answer: 0, explanation: 'Beide Sprichwörter betonen, dass kleine Beiträge zusammen etwas Großes ergeben. Das deutsche Sprichwort wird besonders häufig bei Geld verwendet.' },
  { fa: 'جوجه را آخر پاییز می‌شمارند', de: 'Man soll den Tag nicht vor dem Abend loben.', literal: 'Die Küken zählt man am Ende des Herbstes.', context: 'Deine Mannschaft führt zur Halbzeit. Jemand erklärt sie schon zum Sieger.', question: 'Wie passt das Sprichwort zur Situation?', choices: ['Das Ergebnis steht bereits fest.', 'Erst am Ende lässt sich der Erfolg beurteilen.'], answer: 1, explanation: 'Die Bilder unterscheiden sich, die Aussage ist ähnlich: Ein Zwischenstand ist noch kein endgültiges Ergebnis.' },
  { fa: 'آشپز که دو تا شد، آش یا شور می‌شود یا بی‌نمک', de: 'Viele Köche verderben den Brei.', literal: 'Wenn es zwei Köche gibt, wird die Suppe entweder zu salzig oder ohne Salz.', context: 'Mehrere Personen ändern denselben Text gleichzeitig, ohne sich abzusprechen.', question: 'Welches Problem beschreibt das Sprichwort?', choices: ['Fehlende Abstimmung zwischen Verantwortlichen.', 'Zu wenig Zeit zum Kochen.'], answer: 0, explanation: 'Hier geht es um unkoordinierte Zuständigkeiten. Das Sprichwort bedeutet nicht, dass Zusammenarbeit grundsätzlich schlecht ist.' },
  { fa: 'ماهی را هر وقت از آب بگیری تازه است', de: 'Besser spät als nie.', literal: 'Wann immer du den Fisch aus dem Wasser holst, ist er frisch.', context: 'Du möchtest nach vielen Jahren wieder mit dem Sprachenlernen anfangen.', question: 'Wozu ermutigt das Sprichwort?', choices: ['Auf den perfekten Zeitpunkt zu warten.', 'Auch nach einer Verzögerung anzufangen.'], answer: 1, explanation: 'Die deutsche Entsprechung gibt die Ermutigung wieder: Auch ein später Anfang kann sich lohnen.' },
  { fa: 'هر گردی گردو نیست', de: 'Es ist nicht alles Gold, was glänzt.', literal: 'Nicht alles Runde ist eine Walnuss.', context: 'Ein Angebot sieht auf den ersten Blick großartig aus. Du möchtest die Einzelheiten prüfen.', question: 'Welche Aussage passt?', choices: ['Ein schöner Eindruck beweist noch keinen Wert.', 'Alles Schöne ist wertlos.'], answer: 0, explanation: 'Beide Sprichwörter warnen vor vorschnellen Schlüssen aus dem äußeren Eindruck. Sie lehnen schöne Dinge nicht grundsätzlich ab.' },
];

export default function LearningPreview() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const answered = Object.keys(answers).length;
  const correct = lessons.filter((lesson, index) => answers[index] === lesson.answer).length;

  return <section id="lernprobe" className="learning-preview" aria-labelledby="preview-title">
    <div className="learning-section-heading">
      <div><h2 id="preview-title">Fünf Sprichwörter zum Ausprobieren</h2><p dir="rtl" lang="fa">پنج ضرب‌المثل برای تمرین</p><p>Lesen, im Alltag einordnen und dein Verständnis prüfen. Ohne Anmeldung.</p></div>
      <button className="learning-button learning-button-secondary no-print" type="button" onClick={() => window.print()}>Lernprobe drucken / als PDF speichern</button>
    </div>
    <p className="learning-note">{pronunciationGuideDe} <a href="/ueber-die-sammlung#umschrift">Aussprachehinweise und Quellen</a></p>
    <div className="learning-lessons">
      {lessons.map((lesson, index) => <article className="learning-lesson" key={lesson.fa}>
        <h3 lang="fa" dir="rtl">{lesson.fa}</h3>
        <p className="learning-pronunciation" lang="fa-Latn" dir="ltr">{proverbLearning[lessonIds[index]].latin}</p>
        <p className="learning-equivalent">{lesson.de}</p>
        <p><strong>Wörtlich:</strong> {lesson.literal}</p>
        <p><strong>Im Alltag:</strong> {proverbLearning[lessonIds[index]].exampleDe}</p>
        <p dir="rtl" lang="fa"><strong>معنی:</strong> {proverbLearning[lessonIds[index]].meaningFa}</p>
        <p dir="rtl" lang="fa"><strong>مثال:</strong> {proverbLearning[lessonIds[index]].exampleFa}</p>
        <fieldset className="no-print"><legend>{lesson.question}<span lang="fa" dir="rtl" className="block mt-2">{persianQuestions[index][0]}</span></legend>
          {lesson.choices.map((choice, choiceIndex) => <label key={choice} className="learning-choice">
            <input type="radio" name={`lesson-${index}`} checked={answers[index] === choiceIndex} onChange={() => setAnswers(current => ({ ...current, [index]: choiceIndex }))} />
            <span>{choice}<span lang="fa" dir="rtl" className="block mt-2">{persianQuestions[index][choiceIndex + 1]}</span></span>
          </label>)}
        </fieldset>
        <div aria-live="polite" className="no-print">{answers[index] !== undefined && <div className={`learning-feedback ${answers[index] === lesson.answer ? 'is-correct' : ''}`}><p><strong>{answers[index] === lesson.answer ? 'Richtig.' : 'Noch nicht ganz.'}</strong> {answers[index] === lesson.answer ? lesson.explanation : 'Lies die Alltagssituation noch einmal und versuche die andere Antwort.'}</p><p lang="fa" dir="rtl">{answers[index] === lesson.answer ? 'درست است. ' + proverbLearning[lessonIds[index]].meaningFa : 'هنوز درست نیست. مثال را دوباره بخوان و پاسخ دیگر را امتحان کن.'}</p></div>}</div>
        <div className="print-only"><p><strong>Übung:</strong> {lesson.question}</p><p lang="fa" dir="rtl">{persianQuestions[index][0]}</p><p>□ {lesson.choices[0]}<br />□ {lesson.choices[1]}</p><p lang="fa" dir="rtl">□ {persianQuestions[index][1]}<br />□ {persianQuestions[index][2]}</p></div>
        <details className="learning-context no-print"><summary>Kulturelle Einordnung · توضیح کاربرد</summary><p>{lesson.explanation}</p><p lang="fa" dir="rtl">{proverbLearning[lessonIds[index]].meaningFa}</p></details>
      </article>)}
    </div>
    <div className="learning-progress no-print" role="status">
      {answered === lessons.length ? <p><strong>Alle fünf Übungen bearbeitet.</strong> {correct} von 5 Antworten sind richtig. Du kannst deine Antworten jederzeit ändern.</p> : <p>{answered} von 5 Übungen bearbeitet. Wähle eine Antwort, um direkt Rückmeldung zu erhalten.</p>}
      <p lang="fa" dir="rtl">{answered === lessons.length ? `هر پنج تمرین انجام شد. ${correct} پاسخ از ۵ پاسخ درست است. می‌توانی پاسخ‌ها را تغییر بدهی.` : `${answered} تمرین از ۵ تمرین انجام شده است. یک پاسخ انتخاب کن تا نتیجه را ببینی.`}</p>
    </div>
    {answered > 0 && <button className="learning-button learning-button-secondary no-print" type="button" onClick={() => setAnswers({})}>Übungen zurücksetzen · شروع دوباره</button>}
    <section className="print-only learning-solutions"><h2>Lösungen und Einordnung</h2>{lessons.map((lesson, index) => <p key={lesson.fa}><strong>{index + 1}. {lesson.choices[lesson.answer]}</strong><br />{lesson.explanation}</p>)}</section>
  </section>;
}
