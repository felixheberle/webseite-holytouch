# Holytouch Website — Stand & nächste Schritte

**Datum:** 25. Mai 2026 (Update nach Git-Setup-Session)  
**Projektordner:** `/Users/felixheberle/Desktop/webseite-holytouch/`  
**Dev-Server:** localhost:3003  
**Workflow:** Mac-App (Strategie) + Claude Code Terminal (Execution)  
**Git:** Branch `main`, 3 Commits, sauber aufgesetzt

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
| Hero | hero.jpg, objectPosition `80% 34%`, Cormorant-Tagline |
| Methode | Drei-Absatz-Struktur (Definition → Mechanismus → Differenzierung) |
| Marisha | „ÜBER MARISHA"-Label, Headline noch im Reword-Pending |
| Angebot | Anamnese + Einzelsitzung-Gruppe (3 Varianten), lineare Preise €100/h, keine Discount-Mechanik |
| Erfahrungen | Drei Karten: Susann B., Maike D., Claudia B. — Sterne, Cormorant-Zitate, „Google Rezension"-Footer, Footer-Alignment via `marginTop: auto` |
| CTA-Section | Olivgrün ohne Bild, Solid Olivgold-Button mit Cormorant-Label, Headline „Zwanzig Minuten reichen, um zu spüren,<br />ob ich die Richtige bin.", Kontaktinfo cream 1rem opacity 0.85 |
| Footer | Logo 56px voll-opacity, Links olivgold, Copyright „© 2026 HolyTouch · Praxis am Ammersee" |
| Impressum | Mit echten Daten gefüllt: Hechenwang-Adresse, Kleinunternehmerin §19 UStG, Vercel-Adresse, EB Garamond Body |
| Datenschutz | Mit echten Daten gefüllt |

### Letzte Eingriffe in der Git-Setup-Session (heute)
- Altes Git komplett neu aufgesetzt — vorheriger Stand enthielt 9579 fälschlich getrackte `node_modules`-Dateien plus 138 `.next/`-Build-Artifacts. Cleanup wäre fehleranfälliger gewesen als Neustart.
- Backup gesichert: `~/Desktop/webseite-holytouch-BACKUP-2026-05-25` (in einigen Tagen löschbar wenn alles läuft).
- `.gitignore` sauber konfiguriert: `node_modules/`, `.next/`, `material/`, `.DS_Store`, `.env*`, `.vercel`, `*.tsbuildinfo`, IDE-Configs, plus `.claude/` und `.impeccable/` (Laufzeit-State, kein Code).
- Drei Commits auf Branch `main`:
  - `f28dac0` Initial commit: vollständiger Site-Stand vom 25. Mai 2026
  - `c086564` Toten Code entfernt: `app/compare-hero`
  - `596483d` Impeccable-Skill wieder getrackt (`.agents/` + `skills-lock.json`)
- Branch von `master` auf `main` umbenannt (moderner Standard, kompatibel mit GitHub).

### Letzte Eingriffe in der Design-Session (vorher)
- Erfahrungen-Section erstellt und zwischen Angebot und CTA platziert
- Footer-Alignment in Erfahrungen via `marginTop: auto`
- Section-Übergang Methode → Marisha via `marginTop: clamp(4rem, 6vw, 6rem)` ([Unverified] Verifikation nach Build steht aus — bei nächster Session prüfen)

---

## Offene Tagesordnungs-Punkte

### Schnell, kein Marisha-Input nötig — Kandidaten für nächste Session
- **#5 Credentials-Format in Marisha-Sektion:** All-Caps + Letter-Spacing + monochromes Olivgold ergibt Mauerwerk-Effekt, Aufzählungen gehen unter. Lösung: Mixed-Case + Datumsangaben pro Eintrag
- **#6 „Angebot"-Label umbenennen:** Klingt geschäftsmäßig. Kandidaten: „Begleitung", „Sessions", „Praxis". Strategisch besser mit Marisha klären

### Marisha-Input erforderlich
- **#2 Yes-Laddering nach Hero:** Aktuelle Section zu schwach. Brauchen 4-6 Mikro-Aussagen eskalierend. *Frage an Marisha:* 5-7 typische Klientinnen-Sätze, wie SIE sie selbst aussprechen würde
- **#3 Verstand-Körper-Graphik** neu bauen. *Frage an Marisha:* aktuelle Begriffe für beide Kreise, was in der Schnittmenge passiert, EIN-Satz-Erklärung für skeptische Freundin
- **#4 Marisha-Headline-Rewrite:** „Zwanzig Jahre. Körper, Gespräch, Verbindung." ist syntaktisch unverbunden. *Frage an Marisha:* eigene Headline-Idee + erweiterte Bio-Story
- **P2 Bio-Story-Erweiterung** der Marisha-Sektion

---

## Pre-Launch Blocker (nicht-verhandelbar)

| Punkt | Status |
|---|---|
| Anwalts-Check Impressum + Datenschutz (Fachanwalt Medizinrecht/Heilberuferecht) | ⏳ Offen |
| Berufshaftpflicht-Section ergänzen (Versicherer + Geltungsbereich) | ⏳ Offen, TODO im Impressum |
| HWG-Compliance prüfen (keine Erfolgsversprechen, keine Vorher/Nachher) | ⏳ Prüfen |
| Klientinnen-Einverständnis Testimonials dokumentieren | ⏳ Felix sagt rechtlich OK, Schriftlich sichern empfohlen |
| Email-Konsistenz `marisha@holytouch.com` site-wide | ⏳ Verifizieren (per `grep -ri "@" app/ components/`) |
| ~~Git-Repo initialisieren (Rollback-Safety)~~ | ✅ Erledigt 25. Mai 2026 |
| ~~Compare-Hero-Route entfernen~~ | ✅ Erledigt 25. Mai 2026 |

---

## Git-Workflow (neu, ab heute)

Vier Befehle decken den Alltag ab:

\`\`\`bash
# Was hat sich seit dem letzten Commit geändert?
git status

# Änderung als neuen Fallback-Punkt festhalten
git add -A
git commit -m "Konkrete Beschreibung was geändert wurde"

# Ungesicherte Änderungen wegwerfen (zurück zum letzten Commit)
git restore .

# Wo bin ich in der History?
git log --oneline
\`\`\`

**Rhythmus:** Nach jeder funktionierenden Änderung committen. Lieber zu viele kleine als zu wenige große. Vor riskanten Änderungen vorher committen — der vorherige Stand ist dann ein klarer Rücksprung-Punkt.

**Was getrackt wird:** Code in `app/`, `components/`, Konfig-Files, `public/`-Assets, `.agents/`-Skills, `package.json` + `package-lock.json`, `skills-lock.json`, `STATUS.md`.

**Was NICHT getrackt wird:** `node_modules/` (kommt mit `npm install` zurück), `.next/` (Build-Output), `material/` (Original-Fotos), `.claude/` und `.impeccable/` (Laufzeit-State).

**STATUS.md-Rhythmus:** Eine Aktualisierung pro Session, am Sessionende. Nicht nach jeder kleinen Änderung. Ein Commit pro Session: „STATUS-Update nach Session vom [Datum]: [Hauptthema]".

---

## Brand-Guardrails

- **Keine „Therapie"** ohne „Körper-" davor (Heilberuferecht)
- **Kein Heilversprechen** (HWG §3) — auch nicht in Marketing-Copy oder Klientinnen-Zitaten („heilende Hände" wurde aus Claudias Zitat entfernt)
- **Tonalität:** warm, intim, ehrlich, nicht-pressuring, kein Marketing-Sprech
- **Visuelle DNA:** dunkel-warm, editorial, Fire/Ember-Ästhetik (Holy-Touch-Brand)

---

## Diagnostic Lessons

### Aus der Design-Session
1. **Browser-Zoom checken** bei „zu klein"-Feedback — nicht nur Display abfragen. Felix hatte Chrome bei 80%, das hat 3+ Iterationen gekostet
2. **Fonts müssen importiert sein** — Inkbleed-Sans-Fehler: Font war nie im Projekt, Browser hat Georgia gerendert
3. **Outline-Buttons brauchen tonalen Hintergrund-Kontrast** — funktionieren nicht auf Backgrounds tonal nahe zur Outline-Farbe
4. **Visibility-Beschwerden:** Color UND Size simultan adressieren — beide tragen zur „Schwäche" bei
5. **Color-Audit per Pattern-Matching** statt exact-string-search (Alpha-Channel-Varianten wie `oklch(X / 0.25)` werden sonst übersehen)
6. **Section-Übergänge mit edge-to-edge Bildern** brauchen explizite Margin zwischen Sections — gerade wenn alle Sections denselben Background haben

### Aus der Git-Setup-Session
7. **STATUS.md kann stale sein** — Git-Init war als „offen" markiert, aber Repo existierte längst (mit Müll). Vor Aktionen kurzer Realitäts-Check (`ls -la .git`, `git log`) bevor man auf STATUS-Aussagen baut.
8. **Initial-Commit ohne `.gitignore` = korruptes Repo** — `node_modules` landet permanent in History. Bei jedem neuen Projekt zuerst `.gitignore` schreiben, dann erst `git add`.
9. **Bei Ignore-Decisions Tooling-Ordner-Inhalte erst inspizieren** — Claude hatte initial `.agents/` und `skills-lock.json` blind ignoriert, ohne zu wissen was Impeccable braucht. Erst `ls`, dann entscheiden.
10. **Vor destruktiven Operationen Backup** — `cp -R` des ganzen Projektordners kostet 30 Sekunden, gibt komplettes Sicherheitsnetz.

---

## Felix' Working Preferences

- **Direkt, kein Cushioning, keine Pleasantries** — wenn falsch, sofort sagen warum
- **`[Unverified]`** vor Aussagen, die nicht aus verifizierbaren Quellen stammen
- **Annahmen herausfordern, Pushback bei Flawed Reasoning** — explizit gewünscht
- **Recommendations begründen** — nicht nur „mach das", sondern „mach das weil X"
- **Chirurgische Prompts** für Claude Code: explizite Before/After-Werte, Code-Blöcke, gezielte Find/Replace
- **Bei Skill-Unsicherheit zu Tooling/Setup:** Felix lieber lassen führen — Optionen kurz, Entscheidung treffen, Schritt für Schritt ausführen

---

## Two-Claude Workflow

- **Mac-App (Strategie-Instanz):** Coaching, Design-Entscheidungen, Diagnose, Prompt-Authoring, Git-Workflow-Guidance
- **Claude Code (Terminal):** Execution mit den chirurgischen Prompts aus der Mac-App

---

## Opening Prompt für nächste Session

\`\`\`
Wir arbeiten am holytouch-Projekt weiter. STATUS.md liegt im Repo.

Lies bitte zuerst STATUS.md durch (cat STATUS.md), dann gib mir zurück:
1. Was du aus dem Status verstanden hast (in eigenen Worten, knapp)
2. Welchen der offenen Punkte du zuerst angehen würdest und warum
3. Welche Fragen du jetzt schon hast bevor wir loslegen

Workflow-Regeln aus STATUS beachten: direkt, kein Cushioning, 
[Unverified] labeln, Annahmen herausfordern.

Vor jeder Code-Änderung: kurzer git status und ggf. git log --oneline,
um den aktuellen Stand zu verifizieren.
\`\`\`

---

**[Unverified] Hinweis zur Memory zwischen Sessions:** Die Memory-Funktion liefert der nächsten Claude-Instanz eine high-level Zusammenfassung mit Verzögerung. Granulare Decisions aus dieser Session sind dort nicht abgebildet — daher dieses Dokument als Übergabe. Diese Aussage beruht auf der Systembeschreibung des Memory-Systems, nicht auf Tests.

**Korrektur Memory:** In früheren Memory-Summaries wurde Felix fälschlich als Heilpraktiker geführt. Tatsächlich ist Felix der Entwickler/Stratege, Marisha Pommerenke ist die Heilpraktikerin. Memory wurde in dieser Session korrigiert.
