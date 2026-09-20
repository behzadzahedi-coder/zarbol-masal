import BrandLogo from './brand-logo';

export default function ContentShell({children}: {children: React.ReactNode}) {
  return <div className="content-page">
    <a className="learning-skip" href="#inhalt">Zum Inhalt · رفتن به محتوا</a>
    <header className="learning-header"><div className="learning-wrap">
      <a className="brand-link" href="/" aria-label="Zarbol Masal · ضرب‌المثل – Startseite"><BrandLogo /></a>
      <nav aria-label="Hauptnavigation"><a href="/">Sammlung · مجموعه</a><a href="/lernpaket">Lernprobe · تمرین</a></nav>
    </div></header>
    <main id="inhalt" className="content-wrap">{children}</main>
    <footer className="learning-footer"><div className="learning-wrap"><p>Zarbol Masal · Persische und deutsche Sprichwörter</p><a href="/ueber-die-sammlung">Über die Sammlung · دربارهٔ مجموعه</a></div></footer>
  </div>;
}
