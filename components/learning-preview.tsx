'use client';

import { useState } from 'react';

const lessons = [
  { fa: 'قطره قطره جمع گردد، وانگهی دریا شود', pronunciation: 'Qatre qatre jam gardad, vângahi daryâ shavad.', de: 'Kleinvieh macht auch Mist.', literal: 'Tropfen für Tropfen sammelt es sich, bis ein Meer entsteht.', context: 'Du lernst jeden Tag drei neue Wörter. Nach einigen Monaten kennst du schon viele.', question: 'Was steht hier im Mittelpunkt?', choices: ['Viele kleine Schritte ergeben zusammen viel.', 'Nur ein großer Schritt zählt.'], answer: 0, explanation: 'Beide Sprichwörter betonen, dass kleine Beiträge zusammen etwas Großes ergeben. Das deutsche Sprichwort wird besonders häufig bei Geld verwendet.' },
  { fa: 'جوجه را آخر پاییز می‌شمارند', pronunciation: 'Juje râ âkhar-e pâyiz mishomârand.', de: 'Man soll den Tag nicht vor dem Abend loben.', literal: 'Die Küken zählt man am Ende des Herbstes.', context: 'Deine Mannschaft führt zur Halbzeit. Jemand erklärt sie schon zum Sieger.', question: 'Wie passt das Sprichwort zur Situation?', choices: ['Das Ergebnis steht bereits fest.', 'Erst am Ende lässt sich der Erfolg beurteilen.'], answer: 1, explanation: 'Die Bilder unterscheiden sich, die Aussage ist ähnlich: Ein Zwischenstand ist noch kein endgültiges Ergebnis.' },
  { fa: 'آشپز که دو تا شد، آش یا شور می‌شود یا بی‌نمک', pronunciation: 'Âshpaz ke do tâ shod, âsh yâ shur mishavad yâ binamak.', de: 'Viele Köche verderben den Brei.', literal: 'Wenn es zwei Köche gibt, wird die Suppe entweder zu salzig oder ohne Salz.', context: 'Mehrere Personen ändern denselben Text gleichzeitig, ohne sich abzusprechen.', question: 'Welches Problem beschreibt das Sprichwort?', choices: ['Fehlende Abstimmung zwischen Verantwortlichen.', 'Zu wenig Zeit zum Kochen.'], answer: 0, explanation: 'Hier geht es um unkoordinierte Zuständigkeiten. Das Sprichwort bedeutet nicht, dass Zusammenarbeit grundsätzlich schlecht ist.' },
  { fa: 'ماهی را هر وقت از آب بگیری تازه است', pronunciation: 'Mâhi râ har vaqt az âb begiri tâze ast.', de: 'Besser spät als nie.', literal: 'Wann immer du den Fisch aus dem Wasser holst, ist er frisch.', context: 'Du möchtest nach vielen Jahren wieder mit dem Sprachenlernen anfangen.', question: 'Wozu ermutigt das Sprichwort?', choices: ['Auf den perfekten Zeitpunkt zu warten.', 'Auch nach einer Verzögerung anzufangen.'], answer: 1, explanation: 'Die deutsche Entsprechung gibt die Ermutigung wieder: Auch ein später Anfang kann sich lohnen.' },
  { fa: 'هر گردی گردو نیست', pronunciation: 'Har gerdi gerdu nist.', de: 'Es ist nicht alles Gold, was glänzt.', literal: 'Nicht alles Runde ist eine Walnuss.', context: 'Ein Angebot sieht auf den ersten Blick großartig aus. Du möchtest die Einzelheiten prüfen.', question: 'Welche Aussage passt?', choices: ['Ein schöner Eindruck beweist noch keinen Wert.', 'Alles Schöne ist wertlos.'], answer: 0, explanation: 'Beide Sprichwörter warnen vor vorschnellen Schlüssen aus dem äußeren Eindruck. Sie lehnen schöne Dinge nicht grundsätzlich ab.' },
];

export default function LearningPreview() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const answered = Object.keys(answers).length;
  const correct = lessons.filter((lesson, index) => answers[index] === lesson.answer).length;

  return <section id="lernprobe" className="learning-preview" aria-labelledby="preview-title">
    <div className="learning-section-heading">
      <div><h2 id="preview-title">Fünf Sprichwörter zum Ausprobieren</h2><p>Lesen, im Alltag einordnen und dein Verständnis prüfen. Ohne Anmeldung.</p></div>
      <button className="learning-button learning-button-secondary no-print" type="button" onClick={() => window.print()}>Lernprobe drucken / als PDF speichern</button>
    </div>
    <p className="learning-note">Die Umschrift ist eine vereinfachte Aussprachehilfe: â steht für ein langes a, sh für sch und j für dsch. Deutsche Entsprechungen sind sinngemäß; sie können im Gebrauch abweichen.</p>
    <div className="learning-lessons">
      {lessons.map((lesson, index) => <article className="learning-lesson" key={lesson.fa}>
        <h3 lang="fa" dir="rtl">{lesson.fa}</h3>
        <p className="learning-pronunciation">{lesson.pronunciation}</p>
        <p className="learning-equivalent">{lesson.de}</p>
        <p><strong>Wörtlich:</strong> {lesson.literal}</p>
        <p><strong>Im Alltag:</strong> {lesson.context}</p>
        <fieldset className="no-print"><legend>{lesson.question}</legend>
          {lesson.choices.map((choice, choiceIndex) => <label key={choice} className="learning-choice">
            <input type="radio" name={`lesson-${index}`} checked={answers[index] === choiceIndex} onChange={() => setAnswers(current => ({ ...current, [index]: choiceIndex }))} />
            <span>{choice}</span>
          </label>)}
        </fieldset>
        <div aria-live="polite" className="no-print">{answers[index] !== undefined && <p className={`learning-feedback ${answers[index] === lesson.answer ? 'is-correct' : ''}`}><strong>{answers[index] === lesson.answer ? 'Richtig.' : 'Noch nicht ganz.'}</strong> {answers[index] === lesson.answer ? lesson.explanation : 'Lies die Alltagssituation noch einmal und versuche die andere Antwort.'}</p>}</div>
        <div className="print-only"><p><strong>Übung:</strong> {lesson.question}</p><p>□ {lesson.choices[0]}<br />□ {lesson.choices[1]}</p></div>
        <details className="learning-context no-print"><summary>Kulturelle Einordnung lesen</summary><p>{lesson.explanation}</p></details>
      </article>)}
    </div>
    <div className="learning-progress no-print" role="status">
      {answered === lessons.length ? <p><strong>Alle fünf Übungen bearbeitet.</strong> {correct} von 5 Antworten sind richtig. Du kannst deine Antworten jederzeit ändern.</p> : <p>{answered} von 5 Übungen bearbeitet. Wähle eine Antwort, um direkt Rückmeldung zu erhalten.</p>}
    </div>
    {answered > 0 && <button className="learning-button learning-button-secondary no-print" type="button" onClick={() => setAnswers({})}>Übungen zurücksetzen</button>}
    <section className="print-only learning-solutions"><h2>Lösungen und Einordnung</h2>{lessons.map((lesson, index) => <p key={lesson.fa}><strong>{index + 1}. {lesson.choices[lesson.answer]}</strong><br />{lesson.explanation}</p>)}</section>
  </section>;
}
