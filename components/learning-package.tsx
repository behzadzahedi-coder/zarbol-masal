import LearningPreview from './learning-preview';
import BrandLogo from './brand-logo';

const base = process.env.NEXT_PUBLIC_ASSET_BASE ?? '';

export default function LearningPackage() {
  return <main className="learning-page" id="top">
    <a className="learning-skip no-print" href="#lerninhalt">Zum Inhalt</a>
    <header className="learning-header no-print"><div className="learning-wrap">
      <a className="brand-link" href={`${base}/`} aria-label="Zarbol Masal · ضرب‌المثل – Startseite"><BrandLogo /></a>
      <nav aria-label="Hauptnavigation"><a href={`${base}/#sammlung`}>Sammlung · مجموعه</a><a href="#lernprobe">Lernprobe · تمرین</a></nav>
    </div></header>
    <div className="learning-wrap" id="lerninhalt">
      <section className="learning-hero no-print" aria-labelledby="package-title">
        <div><p className="learning-kicker">Persisch und Deutsch gemeinsam entdecken</p><h1 id="package-title">Zwei Sprachen.<br />Gemeinsam mehr verstehen.</h1>
          <p className="learning-intro">Sprichwörter bleiben besser im Gedächtnis, wenn du weißt, wann sie passen. Entdecke ihre Bilder, ihre Bedeutung und ihren Platz im Alltag.</p>
          <p dir="rtl" lang="fa" className="mb-6 text-lg">دو زبان، درکِ مشترک. با معنی و مثال‌های روزمره، ضرب‌المثل‌های فارسی و آلمانی را بهتر یاد بگیرید.</p>
          <a className="learning-button" href="#lernprobe">Kostenlose Lernprobe · تمرین رایگان</a>
          <p className="learning-note">Fünf Sprichwörter mit Übungen. Direkt hier und zum Ausdrucken.</p>
        </div>
        <aside className="learning-offer" aria-labelledby="offer-title"><h2 id="offer-title">Das Zarbol Masal Lernpaket</h2><p>Für Sprachlernende und Menschen, die persische und deutsche Kultur verbinden möchten.</p>
          <ul><li>50 ausgewählte Sprichwörter</li><li>Persische Schrift und vereinfachte Umschrift</li><li>Deutsche Entsprechungen und Alltagssituationen</li><li>Druckbare Lernkarten und Übungen mit Lösungen</li></ul>
          <p className="learning-price">9,90 € <span>geplanter Einmalpreis</span></p>
          <p className="learning-availability"><strong>Verkauf startet bald</strong><br />Das vollständige Paket wird vorbereitet. Aktuell ist noch kein Kauf möglich.<span dir="rtl" lang="fa" className="block mt-2">بستهٔ کامل در حال آماده‌سازی است و هنوز امکان خرید وجود ندارد.</span></p>
          <a className="learning-text-link" href="#lernprobe">Jetzt die kostenlose Lernprobe ansehen</a>
        </aside>
      </section>
      <div className="print-only"><h1>Zarbol Masal · Kostenlose Lernprobe</h1><p>Persische und deutsche Sprichwörter · www.zarbol-masal.de</p></div>
      <LearningPreview />
      <section className="learning-faq no-print" aria-labelledby="faq-title"><h2 id="faq-title">Gut zu wissen</h2>
        <details><summary>Bleibt die Sprichwort-Sammlung kostenlos?</summary><p>Ja. Die Sammlung mit Suche und Erklärungen bleibt frei zugänglich. Das geplante Lernpaket ergänzt sie um aufbereitete Lernmaterialien.</p></details>
        <details><summary>Muss ich Persisch lesen können?</summary><p>Die Lernprobe enthält eine vereinfachte Umschrift und deutsche Erklärungen. So kannst du auch ohne Kenntnis der persischen Schrift beginnen. Die Umschrift ersetzt keine Audioaufnahme oder Aussprachekorrektur.</p></details>
        <details><summary>Wie kann ich die Lernprobe speichern?</summary><p>Wähle „Lernprobe drucken / als PDF speichern“. Im Druckdialog deines Browsers kannst du einen Drucker oder „Als PDF speichern“ auswählen. Übungen und Lösungen werden mit ausgegeben.</p></details>
        <details><summary>Kann ich schon mit PayPal bezahlen?</summary><p>Noch nicht. Der Verkauf wird erst freigeschaltet, wenn das vollständige Paket und der Zahlungs- und Downloadablauf bereitstehen.</p></details>
      </section>
    </div>
    <footer className="learning-footer no-print"><div className="learning-wrap"><p>Zarbol Masal · Eine Brücke zwischen zwei Sprachen.</p><a href={`${base}/#sammlung`}>Zur kostenlosen Sammlung</a></div></footer>
  </main>;
}
