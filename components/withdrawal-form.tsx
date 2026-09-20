'use client';

import { useState } from 'react';
import { shop } from '@/app/shop-data';

export default function WithdrawalForm() {
  const [review, setReview] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contract, setContract] = useState('');
  const declaration = 'Hiermit widerrufe ich den Vertrag über den Kauf des digitalen Zarbol Masal Lernpakets.';
  if (review) return <form className="interest-form" action={`https://formsubmit.co/${shop.email}`} method="POST" aria-labelledby="withdraw-review">
    <h2 id="withdraw-review" tabIndex={-1} ref={node => { node?.focus(); }}>Widerruf prüfen und bestätigen</h2>
    <p>{declaration}</p><dl className="order-details"><dt>Name</dt><dd>{name}</dd><dt>Vertrag / Bestellung</dt><dd>{contract}</dd><dt>E-Mail für die Eingangsbestätigung</dt><dd>{email}</dd></dl>
    <input type="hidden" name="name" value={name} /><input type="hidden" name="email" value={email} /><input type="hidden" name="Vertrag" value={contract} /><input type="hidden" name="Widerrufserklaerung" value={declaration} />
    <input type="hidden" name="_subject" value="Zarbol Masal – Widerrufserklärung" /><input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_autoresponse" value={`Eingangsbestätigung Ihrer Widerrufserklärung an Behzad Zahedi / Zarbol Masal. Diese E-Mail bestätigt den Eingang Ihrer nachstehend wiedergegebenen Erklärung; Datum und Uhrzeit der Bestätigung stehen im Kopf dieser E-Mail.\n\n${declaration}\nName: ${name}\nVertrag / Bestellung: ${contract}\nE-Mail: ${email}\n\nWir bearbeiten den Widerruf und melden uns zur Rückzahlung. Kontakt: ${shop.email}`} />
    <p>Mit „Widerruf bestätigen“ übermittelst du deine Erklärung über FormSubmit. Dort kann eine Sicherheitsabfrage erscheinen. Nach erfolgreichem Versand erhältst du eine Kopie per E-Mail. Prüfe gegebenenfalls deinen Spam-Ordner.</p>
    <div className="shop-actions"><button type="submit">Widerruf bestätigen</button><button className="secondary-button" type="button" onClick={() => setReview(false)}>Angaben ändern</button></div>
    <p className="offer-note">Falls der Versand nicht funktioniert, sende deine Erklärung direkt an <a href={`mailto:${shop.email}`}>{shop.email}</a>.</p>
  </form>;
  return <form className="interest-form" onSubmit={event => { event.preventDefault(); setReview(true); }} aria-labelledby="withdraw-form-title">
    <h2 id="withdraw-form-title">Vertrag widerrufen</h2><p>Du brauchst kein Benutzerkonto. Eine Bestellnummer ist nicht zwingend erforderlich: Kaufdatum und verwendete E-Mail-Adresse helfen ebenfalls, den Kauf zuzuordnen.</p>
    <label htmlFor="withdraw-name">Dein vollständiger Name</label><input id="withdraw-name" value={name} onChange={e => setName(e.target.value)} type="text" autoComplete="name" required maxLength={160} />
    <label htmlFor="withdraw-contract">Welche Bestellung möchtest du widerrufen?</label><textarea id="withdraw-contract" value={contract} onChange={e => setContract(e.target.value)} rows={3} required maxLength={1000} placeholder="Zum Beispiel: Lernpaket, Kaufdatum und PayPal-Transaktionsnummer oder die beim Kauf verwendete E-Mail-Adresse." />
    <label htmlFor="withdraw-email">E-Mail-Adresse für die Eingangsbestätigung</label><input id="withdraw-email" value={email} onChange={e => setEmail(e.target.value)} type="email" autoComplete="email" required maxLength={254} />
    <p className="interest-privacy">Die Erklärung geht über FormSubmit an uns. Dieser Dienst sendet dir eine Kopie und verwendet für diesen Vorgang reCAPTCHA. <a href="/de/datenschutz">Datenschutz</a></p>
    <button type="submit">Weiter zur Bestätigung</button>
  </form>;
}
