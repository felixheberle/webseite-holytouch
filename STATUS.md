# Holytouch Website — Stand & nächste Schritte

**Datum:** 28. Mai 2026 (Update nach Design-/Section-/GitHub-/Performance-Session)
**Projektordner:** `/Users/felixheberle/Desktop/webseite-holytouch/`
**Dev-Server:** localhost:3003 (oder :3004 falls 3003 belegt)
**Workflow:** Mac-App (Strategie) + Claude Code Terminal (Execution)
**Git:** Branch `main`, 11+ Commits, lokal sauber + auf GitHub gepusht
**GitHub:** `https://github.com/felixheberle/webseite-holytouch` (private)
**Auth:** GitHub CLI (`gh auth login`, OAuth via Browser, kein Token-Hantieren)

---

## Was sitzt

### Globales Design-System
- **Hintergrund:** Olivgrün `oklch(18% 0.05 130)` durchgängig auf allen Sections
- **Fonts:** Cormorant Garamond (Display/Headlines, Button-Labels, Preise), EB Garamond (Body + Legal Pages)
- **Akzentfarbe:** Olivgold `var(--c-gold)` ≈ `oklch(67% 0.08 88)`
- **Cream/Body-Text:** `oklch(93% 0.012 85)`

### Section-Status
| Section | Status |
|---|---|
| Hero | hero.jpg, objectPosition `80% 34%`, Cormorant-Tagline. Foto optimiert auf 462KB. |
| Methode | Drei-Absatz-Struktur (Definition → Mechanismus → Differenzierung). Foto 517KB. |
| **Verstand-Körper** (NEU) | Editorial V01-Layout (zentriert) mit Helix-SVG-Symbol zwischen zwei Spalten. Headline „In Gespräch und Körper — bis sich beides *berührt*." mit italic-gold-„berührt". Subtitle-Wrap-Bug-Fix via nowrap-Spans pro Phrase. Synthese-Statement als Sub-Headline-Größe. Felix hat Inhalt rechte Spalte angepasst (Berührung Massage · Atem Nervensystem). |
| Marisha | „ÜBER MARISHA"-Label. Headline (Vorschlag 5): „Zwanzig Jahre. Sich im eigenen Körper wieder spüren." Body auf Ich-Stimme („Ich habe..." statt „Marisha hat..."). Credentials-Liste mit lesbarer Cream-Mixed-Case-Styling (section-label-Klasse entfernt), goldene Dash-Bullets bleiben. Foto 497KB. |
| Angebot | Anamnese + Einzelsitzung-Gruppe (3 Varianten), lineare Preise €100/h, keine Discount-Mechanik |
| Erfahrungen | Drei Karten: Susann B., Maike D., Claudia B. — Sterne, Cormorant-Zitate, „Google Rezension"-Footer, Footer-Alignment via `marginTop: auto` |
| CTA-Section | Olivgrün ohne Bild, Solid Olivgold-Button (Stufe 2: leuchtenderer Background `oklch(76% 0.12 88)`, größeres Padding 1.5rem 3.5rem, größere Schrift 0.95rem), Cormorant-Label. Headline „Zwanzig Minuten reichen, um zu spüren,<br />ob ich die Richtige bin." Foto cta-bg 1.3MB. |
| Footer | Logo 56px voll-opacity, Links olivgold, Copyright „© 2026 HolyTouch · Praxis am Ammersee" |
| Impressum | Mit echten Daten gefüllt: Hechenwang-Adresse, Kleinunternehmerin §19 UStG, Vercel-Adresse, EB Garamond Body |
| Datenschutz | Mit echten Daten gefüllt |

### Eingriffe in der heutigen Session (28. Mai 2026)

**Design & Content:**
- Marisha-Headline auf Vorschlag 5 gesetzt: „Zwanzig Jahre. Sich im eigenen Körper wieder spüren."
- Marisha-Body auf Ich-Stimme umgestellt
- Credentials-Liste lesbar gemacht: `section-label`-Klasse entfernt, explizites Cream-Mixed-Case-Styling, goldene Dash-Bullets bleiben
- CTA-Button Stufe 2: heller/saturierter Gold-Background, größeres Padding, mehr Letter-Spacing
- **Verstand-Körper-Section komplett neu gebaut** (`components/VerstandKoerper.tsx`):
  - v0.dev V01-Layout adaptiert (zentriertes Editorial mit Helix-Symbol)
  - Marishas Inhalte (Innere Anteile · Trauma · Persönlichkeitsmuster / Massage · Nervensystem · Atem) integriert (rechte Spalte später von Felix angepasst)
  - Synthese-Statement: „Wo beides sich berührt, entsteht eine durchgängige, körperlich gespürte Aufmerksamkeit."
  - Helix-SVG direkt aus v0 extrahiert via Inspect (exakte Pfade)
  - Mehrere Iterationen: Spalten-Alignment, Helix-Größe, Body-Font-Größe, Synthese-Größe als Sub-Headline
  - Subtitle-Wrap-Bug-Fix via nowrap-Spans pro Phrase (jede Phrase + ihr · als geschlossene Einheit, dazwischen normale Wrap-Points)

**Git/Infrastruktur:**
- GitHub-Repo `webseite-holytouch` (private) angelegt + per `gh auth login` verknüpft
- Initial-Push: alle 148 Objekte (~50 MiB) gepusht
- `git remote set-head origin -a` ausgeführt → `origin/HEAD` zeigt auf `main` (sonst `/security-review` broken)
- `/security-review` läuft erfolgreich („No security vulnerabilities found")

**Performance (Bilder):**
- **hero-v2.jpg gelöscht** (Dead Asset seit Compare-Hero-Entfernung, 8.6 MB)
- **4 Fotos via macOS `sips` komprimiert** (max 2400px lange Seite, JPEG Q75):
  - cta-bg.jpg: 13.2MB → 1.3MB
  - method.jpg: 10.4MB → 517KB
  - marisha.jpg: 10.0MB → 497KB
  - hero.jpg: 9.7MB → 462KB
  - **Total: ~43MB → ~2.8MB (~15× kleiner)**
- Originale gesichert in `~/Desktop/holytouch-photos-backup/`

---

## Offene Tagesordnungs-Punkte

### Schnell, kein Marisha-Input nötig — Kandidaten für nächste Session
- **#6 „Angebot"-Label umbenennen:** Klingt geschäftsmäßig. Kandidaten: „Begleitung", „Sessions", „Praxis". Strategisch besser mit Marisha klären — kann aber auch als Vorschlag formuliert werden
- **Email-Konsistenz-Audit:** `grep -ri "@" app/ components/` durchgehen, jede E-Mail-Erwähnung auf `marisha@holytouch.com` prüfen (~10 Min)

### Marisha-Input erforderlich
- **#2 Yes-Laddering nach Hero:** Aktuelle Section zu schwach. Brauchen 4-6 Mikro-Aussagen eskalierend. *Frage an Marisha:* 5-7 typische Klientinnen-Sätze, wie SIE sie selbst aussprechen würde
- **P2 Bio-Story-Erweiterung** der Marisha-Sektion

### ERLEDIGT in dieser Session
- ~~#3 Verstand-Körper-Graphik~~ ✅ Section gebaut und integriert
- ~~#4 Marisha-Headline-Rewrite~~ ✅ Vorschlag 5 implementiert
- ~~#5 Credentials-Format~~ ✅ section-label-Klasse entfernt, lesbar

---

## Pre-Launch Blocker (nicht-verhandelbar)

| Punkt | Status |
|---|---|
| Anwalts-Check Impressum + Datenschutz (Fachanwalt Medizinrecht/Heilberuferecht) | ⏳ Offen |
| Berufshaftpflicht-Section ergänzen (Versicherer + Geltungsbereich) | ⏳ Offen, TODO im Impressum |
| HWG-Compliance prüfen (keine Erfolgsversprechen, keine Vorher/Nachher) | ⏳ Prüfen |
| Klientinnen-Einverständnis Testimonials dokumentieren | ⏳ Felix sagt rechtlich OK, Schriftlich sichern empfohlen |
| Email-Konsistenz `marisha@holytouch.com` site-wide | ⏳ Verifizieren (per `grep -ri "@" app/ components/`) |
| ~~Git-Repo initialisieren (Rollback-Safety)~~ | ✅ Erledigt 25.05.2026 |
| ~~Compare-Hero-Route entfernen~~ | ✅ Erledigt 25.05.2026 |
| ~~GitHub-Remote-Setup (Off-Site-Backup)~~ | ✅ Erledigt 28.05.2026 |
| ~~Bildoptimierung Mobile-Performance~~ | ✅ Erledigt 28.05.2026 (~15× kleiner) |

---

## Git-Workflow (etabliert)

Vier Befehle decken den Alltag ab:

```
git status                          # Was hat sich geändert
git add -A && git commit -m "..."   # Änderung als Fallback-Punkt
git push                            # Off-Site sichern
git restore .                       # Ungesicherte Änderungen verwerfen
git log --oneline                   # History anschauen
```

**Rhythmus:** Nach jeder funktionierenden Änderung committen + push. Lieber zu viele kleine als zu wenige große. Vor riskanten Änderungen vorher committen.

**WICHTIG — Workflow-Regel ab heute:** Vor jedem `git add` immer `git status` ausführen und alle modifizierten Files bewusst entscheiden. `git add -A` ist meist sicherer als `git add <spezifische-Datei>`. Eine spezifische Add-Operation hat in dieser Session die `app/page.tsx`-Integration für VerstandKoerper übersehen.

**Was getrackt wird:** Code in `app/`, `components/`, Konfig-Files, `public/`-Assets (jetzt optimiert), `.agents/`-Skills, `package.json` + `package-lock.json`, `skills-lock.json`, `STATUS.md`.

**Was NICHT getrackt wird:** `node_modules/`, `.next/`, `material/`, `.claude/`, `.impeccable/`.

**STATUS.md-Rhythmus:** Eine Aktualisierung pro Session, am Sessionende. Ein Commit pro Session: „STATUS-Update nach Session vom [Datum]: [Hauptthema]".

---

## Brand-Guardrails

- **Keine „Therapie"** ohne „Körper-" davor (Heilberuferecht)
- **Kein Heilversprechen** (HWG §3) — auch nicht in Marketing-Copy oder Klientinnen-Zitaten
- **Tonalität:** warm, intim, ehrlich, nicht-pressuring, kein Marketing-Sprech
- **Visuelle DNA:** dunkel-warm, editorial, Fire/Ember-Ästhetik (Holy-Touch-Brand)
- **Brand voice:** Simplicity, warmth, authenticity über Cleverness. Kurze Sätze, direkte Anrede, low-pressure. „Kühlschrank-tauglich" — universell resonant, nicht overly spiritual oder niche.

---

## Diagnostic Lessons

### Aus der Design-Session (24./25. Mai)
1. **Browser-Zoom checken** bei „zu klein"-Feedback — nicht nur Display abfragen
2. **Fonts müssen importiert sein** — Inkbleed-Sans-Fehler war ein invented font name
3. **Outline-Buttons brauchen tonalen Hintergrund-Kontrast**
4. **Visibility-Beschwerden:** Color UND Size simultan adressieren
5. **Color-Audit per Pattern-Matching** statt exact-string-search (Alpha-Channel-Varianten werden sonst übersehen)
6. **Section-Übergänge mit edge-to-edge Bildern** brauchen explizite Margin zwischen Sections

### Aus der Git-Setup-Session (25. Mai)
7. **STATUS.md kann stale sein** — vor Aktionen kurzer Realitäts-Check
8. **Initial-Commit ohne `.gitignore` = korruptes Repo** — `node_modules` landet permanent in History
9. **Bei Ignore-Decisions Tooling-Ordner-Inhalte erst inspizieren** — nicht blind ignorieren
10. **Vor destruktiven Operationen Backup** — `cp -R` kostet 30 Sekunden

### Aus der Design-/GitHub-/Performance-Session (28. Mai)
11. **Non-Breaking-Space-Schema bei aufgelisteten Begriffen:** Jede Phrase mit ihrem Trennzeichen als geschlossene Einheit verkleben (`<span style={{whiteSpace: 'nowrap'}}>Phrase ·</span>`), nicht den Trenn-Punkt zwischen zwei Phrasen mit Non-Breaking-Spaces verkleben — sonst entsteht eine monolithische unbreakable Wurst die das Layout sprengt.
12. **`git status` IMMER vor `git add` ausführen.** `git add -A` ist meist sicherer als `git add <spezifische-Datei>`. Letztere Variante hat die VerstandKoerper-Integration in `app/page.tsx` übersehen — Section war committed, aber nicht in die Seite eingebunden.
13. **Bildoptimierung ist Pre-Launch P1, nicht Backlog.** 50MB unoptimierte Bilder = 5-10s Mobile-Ladezeit. macOS hat `sips` built-in: `sips -Z 2400 -s format jpeg -s formatOptions 75 file.jpg --out file.jpg`.
14. **`.next/` Build-Cache enthält gelegentlich stale Referenzen auf gelöschten Code** (z.B. `hero-v2.jpg` nach Compare-Hero-Entfernung). Ist gitignored, regeneriert sich, harmlos. Bei grep-Audit `.next/`-Matches ignorieren.
15. **`git init` + `git remote add` + `git push` reicht NICHT für `origin/HEAD` symbolic ref.** Der wird nur bei `git clone` automatisch gesetzt. Nach manuellem Remote-Setup einmalig `git remote set-head origin -a` ausführen — sonst scheitern Diff-Tools wie `/security-review` mit „unknown revision".
16. **GitHub CLI statt Personal Access Tokens.** `brew install gh` + `gh auth login` macht Browser-OAuth statt Token-Juggling. Einmalig Setup, danach push ohne Auth-Friction.
17. **v0.dev-Workflow für Design-Sections:** Mood-Referenz (z.B. von Midjourney) hochladen → 3-6 Layout-Varianten generiert → eine picken → Inspect/Copy SVG-Elemente direkt extrahieren → in Claude Code adaptieren. Spart manuelles SVG-Pfad-Coding.
18. **Bei Section-Iteration: konkret benennen welches Element wo nicht passt.** „Völlig verschoben" ist mehrdeutig — „Helix zu klein", „Synthese-Zeile zu klein für Sub-Headline", „Body-Text in Spalten nicht in Marisha-Body-Größe" ist iterationsfähig.
19. **Keine Platzhalter wie `<...>` in zu kopierenden Befehlen** — Shell interpretiert `<` als Redirect-Operator. URLs/Paths vorab erfragen und in den Befehl einsetzen, damit copy-paste 1:1 funktioniert.

---

## Felix' Working Preferences

- **Direkt, kein Cushioning, keine Pleasantries** — wenn falsch, sofort sagen warum
- **`[Unverified]`** vor Aussagen, die nicht aus verifizierbaren Quellen stammen
- **Annahmen herausfordern, Pushback bei Flawed Reasoning** — explizit gewünscht
- **Recommendations begründen** — nicht nur „mach das", sondern „mach das weil X"
- **Chirurgische Prompts** für Claude Code: explizite Before/After-Werte, Code-Blöcke, gezielte Find/Replace
- **Keine Platzhalter wie `<...>` in Befehlen** — siehe Lesson #19
- **Bei Skill-Unsicherheit zu Tooling/Setup:** Felix lieber lassen führen — Optionen kurz, Entscheidung treffen, Schritt für Schritt ausführen
- **Felix ist NICHT der Praktiker, Marisha ist es** (Korrektur aus früherer Memory)

---

## Two-Claude Workflow

- **Mac-App (Strategie-Instanz):** Coaching, Design-Entscheidungen, Diagnose, Prompt-Authoring, Git-Workflow-Guidance
- **Claude Code (Terminal):** Execution mit den chirurgischen Prompts aus der Mac-App

---

## Opening Prompt für nächste Session

```
Wir arbeiten am holytouch-Projekt weiter. STATUS.md liegt im Repo.

Lies bitte zuerst STATUS.md durch (cat STATUS.md), dann gib mir zurück:
1. Was du aus dem Status verstanden hast (in eigenen Worten, knapp)
2. Welchen der offenen Punkte du zuerst angehen würdest und warum
3. Welche Fragen du jetzt schon hast bevor wir loslegen

Workflow-Regeln aus STATUS beachten: direkt, kein Cushioning,
[Unverified] labeln, Annahmen herausfordern.

Vor jeder Code-Änderung: kurzer git status und ggf. git log --oneline,
um den aktuellen Stand zu verifizieren.
```

---

## Backlog / Nice-to-have (post-launch)

- **`<Image>`-Component-Refactor:** Aktuell werden Bilder als statische URLs aus `public/` referenziert. Next.js `<Image>` macht responsive Größen, WebP/AVIF-Konvertierung und Lazy-Loading automatisch. Letzte 10% Performance-Gewinn — nach Launch.
- **Duplikat-Commits in History (a806128 + 472ce7d):** Beide „Fotos optimiert"-Commits sind funktional gleich, kosmetisch unschön. Cleanup via `git rebase -i` möglich, aber Rewriting bereits gepushter History — nicht lohnend.
- **Backup-Ordner-Cleanup:** `~/Desktop/webseite-holytouch-BACKUP-2026-05-25` (~400 MB) und `~/Desktop/holytouch-photos-backup/` (~43 MB Originale) können in einigen Tagen gelöscht werden, sobald sicher dass nichts mehr gebraucht wird.

---

**[Unverified] Hinweis zur Memory zwischen Sessions:** Die Memory-Funktion liefert der nächsten Claude-Instanz eine high-level Zusammenfassung mit Verzögerung. Granulare Decisions aus dieser Session sind dort nicht abgebildet — daher dieses Dokument als Übergabe.
