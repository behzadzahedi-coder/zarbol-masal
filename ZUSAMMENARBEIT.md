# Zarbol Masal: Zusammenarbeit

Live-Website: https://www.zarbol-masal.de
GitHub: https://github.com/behzadzahedi-coder/zarbol-masal

## Parallel arbeiten

1. Dieses Repository in jedem verwendeten Codex-Account mit dem GitHub-Account behzadzahedi-coder verbinden.
2. Vor jeder Aufgabe den aktuellen Stand von main laden.
3. Pro Aufgabe einen eigenen Branch und einen eigenen Checkout/Worktree verwenden, z. B. account-2/kontaktformular.
4. Änderungen als Pull Request zur Prüfung bereitstellen. Bei Konflikten den aktuellen main-Stand einarbeiten.
5. Erst nach Prüfung zusammenführen. Nicht gleichzeitig im selben lokalen Ordner arbeiten und main nicht mit force push überschreiben.

## Lokal starten

Node.js >=22.13.0 verwenden. pnpm verwenden; Abhängigkeiten mit `pnpm install --frozen-lockfile` installieren, dann `pnpm dev`.
Vor einer Veröffentlichung: `pnpm run build`.

## Veröffentlichung

Die bestehende Website wird über OpenAI Sites betrieben. Die Zuordnung steht in .openai/hosting.json. Ein GitHub-Commit veröffentlicht derzeit NICHT automatisch die Website.
Nach dem Zusammenführen muss ein berechtigter Sites-Account den aktuellen GitHub-Stand übernehmen, bauen und über die bestehende Site veröffentlichen. GitHub-Zugriff erteilt keinen Zugriff auf die Sites-Verwaltung.
Produktionsgeheimnisse, Datenbanken und Uploads bleiben beim bestehenden Hosting. Keine .env-Dateien oder Zugangstoken einchecken.

Die vorhandenen gebauten Dateien im Repository-Stamm gehören zu einem älteren Veröffentlichungsstand. Der aktuelle bearbeitbare Code liegt in app/, components/, public/ und den Projektkonfigurationen. Die alten Dateien werden für die bestehende Veröffentlichung zunächst beibehalten.

