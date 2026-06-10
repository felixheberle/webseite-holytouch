# Holytouch Website — Stand & nächste Schritte

**Datum:** 28. Mai 2026 (Update nach erweiterter Session: Yes-Laddering, Font-Konsolidierung, Vercel-Staging, Brand-Entscheidungen, non-HP-Klärung)
**Projektordner:** `/Users/felixheberle/Desktop/webseite-holytouch/`
**Dev-Server:** localhost:3003 (oder :3004 falls belegt)
**Workflow:** Mac-App (Strategie) + Claude Code Terminal (Execution)
**Git:** Branch `main`, sauber, letzter Commit `c98fbc8`
**GitHub:** `https://github.com/felixheberle/webseite-holytouch` (private)
**Vercel-Staging:** `https://webseite-holytouch.vercel.app` (live, Auto-Deploy bei push auf main)
**Auth:** GitHub CLI (`gh auth login`, Browser-OAuth)

---

## Rechtlicher Kontext (Stand nach Sprach-Bereinigung 28.05.)

Marisha ist keine Heilpraktikerin — sie bietet **Coaching mit Körpertherapie** an, ist „In Ausbildung zur Heilpraktikerin für Psychotherapie" (so wörtlich in den Credentials, korrekte Formulierung für den Ausbildungsstand).

Die Site nutzt bewusst nur nicht-geschützte Begriffe: „Körpertherapie" (in DE nicht geschützt), „Coaching", „Körperarbeit", „tiefe Gespräche". Die klinik-nahen Begriffe („psychosomatisch", „psychotherapeutische Elemente", „Symptome") wurden am 28.05. site-weit entfernt. Kein Heilversprechen, keine Therapie-/Heilung-Sprache.

**Anwaltlicher Check ist optionale Absicherung, kein harter Blocker.** PRODUCT.md sieht eine einmalige Kurzeinschätzung vor (Fachanwalt, ~200-600€). Nach gängiger Auffassung ist die Sprache jetzt clean; der Check nimmt Restunsicherheit, ist aber Risiko-Entscheidung von Felix/Marisha. [Unverified] — finale rechtliche Sicherheit kann nur ein Anwalt geben, dies ist keine Rechtsberatung.

---

## Was sitzt

### Globales Design-System
- **Hintergrund:** dunkles Olivgrün `oklch(18% 0.05 130)` (Abweichung von PRODUCT.md das „warmes Schwarz" sagt — Olivgrün ist die tatsächliche Brand-Farbe)
- **Fonts (nach Konsolidierung 28.05.):** Inkbleed Sans (self-hosted, Section-Labels + Legal-h2) + EB Garamond (alles andere: Body + Headlines). **Cormorant Garamond entfernt.**
- **Akzent:** Olivgold `var(--c-gold)` = `oklch(67% 0.08 88)`, Cream-Text `oklch(93% 0.012 85)`
- Vollständige Token-Liste + Section-Specs siehe **DESIGN.md** (neu im Repo)

### Section-Status (Reihenfolge wie live)
| # | Section | Status |
|---|---|---|
| 1 | Nav/Header | Logo, Phone, „KENNENLERNGESPRÄCH"-Button |
| 2 | Hero | hero.jpg, Tagline „Dein Körper **zeigt**, was dein Verstand nicht sagen kann." (zeigt = bestätigt gewollt) |
| 3 | PositioningLine | „Körpertherapie am Ammersee" |
| 4 | **Erkennen** (NEU) | Yes-Laddering Option C: 3 Klientinnen-Zitate (italic) → 2 Reflexionen (upright) → gold-uppercase Schluss „Wenn du dich wiedererkennst, bist du hier richtig." Ersetzt alte Yes-Laddering-Section. |
| 5 | Method („Die Arbeit") | „Behandlung" → „Körperarbeit" geändert. method.jpg |
| 6 | VerstandKoerper | Helix-SVG, zwei Spalten, Synthese. „Körperbehandlung" → „Körperberührung" (Konsistenz mit Method) |
| 7 | Marisha | Headline Vorschlag 5, Ich-Stimme, lesbare Credentials. marisha.jpg |
| 8 | **Begleitung** (umbenannt) | Section-Label „Angebot" → „Begleitung". Headline „So arbeiten wir zusammen." Lineare Preise (Anamnese 2h/200€, Einzelsitzung 1h/100€·1,5h/150€·2h/200€) |
| 9 | Erfahrungen | 3 Testimonials (Susann B., Maike D., Claudia B.) |
| 10 | CTA | „Zwanzig Minuten reichen..." + Olivgold-Button + Kontakt |
| 11 | Footer | Logo 56px, Impressum/Datenschutz/Instagram, Copyright |

### Eingriffe in dieser erweiterten Session (28. Mai)

**Content/Brand:**
- Erkennen-Section (Yes-Laddering) neu gebaut, Option C (3 Klientinnen-Zitate + 2 Reflexionen + Schluss)
- Method „Behandlung" → „Körperarbeit"
- VerstandKoerper „Körperbehandlung" → „Körperberührung"
- Hero-Tagline „zeigt" als gewollt bestätigt (PRODUCT.md sagte „weiß", jetzt synced)
- Email „.com" als korrekt bestätigt (PRODUCT.md sagte „.de", jetzt synced)
- Angebot-Label → „Begleitung"
- Impressum: Berufshaftpflicht-Section mit `[[PLATZHALTER: ...]]`-Markern (Marishas Versicherungsdaten ausstehend)
- „psychosomatisch" site-weit entfernt → „Körpertherapie"; „psychotherapeutische Elemente" → „tiefe Gespräche"; „Symptome" → „körperliche Spannungen" (Positionierung de-klinikalisiert, Marisha-freigegeben)

**Technik:**
- Font-Konsolidierung: Cormorant Garamond komplett entfernt, alles auf EB Garamond (außer Inkbleed-Sans-Labels)
- Vercel-Staging-Deploy aufgesetzt (Hobby-Plan, Auto-Deploy bei push)
- DESIGN.md erstellt — technische Design-Spezifikation

**Verifiziert/abgehakt:**
- Email-Konsistenz site-wide: alle `.com`, keine `.de`-Reste (Datenschutz 2×, Impressum 1×, CTASection 2×) → **Pre-Launch-Blocker erledigt**

### Letzte Commits (chronologisch, neueste oben)
```
c98fbc8 Impressum: Berufshaftpflicht-Section mit Platzhaltern
9853250 Angebot-Section: Label 'Angebot' → 'Begleitung'
28f8b5e VerstandKoerper: 'Körperbehandlung' → 'Körperberührung'
8657ed2 Doku-Sync: Hero-Tagline 'zeigt' und E-Mail '.com'
8cb3cfa DESIGN.md: technische Design-Spezifikation
00b7f4f Font-Konsolidierung: Cormorant entfernt → EB Garamond
cdf4059 Brand-Alignment: Method 'Körperarbeit' + Erkennen Option C
3e5f1cc Yes-Laddering: Erkennen-Section (--c-text)
8b01b5b STATUS-Update nach Session (Verstand-Körper + GitHub + Bildopt)
... (frühere: Bildoptimierung, GitHub-Setup, VerstandKoerper, CTA, Marisha, Git-Init)
```

---

## Pre-Launch Blocker

| Punkt | Status |
|---|---|
| Anwaltliche Kurzeinschätzung (optional, Absicherung) Impressum + Datenschutz | ⏳ optional — kein harter Blocker, ~200-600€, Risiko-Entscheidung Felix/Marisha |
| Berufshaftpflicht-Daten von Marisha → Platzhalter ersetzen | ⏳ Struktur steht, Daten ausstehend (Versicherer Name+Adresse, Geltungsbereich) |
| HWG-Compliance-Verifizierung | ⏳ Teil des Anwalts-Checks |
| Testimonial-Consent schriftlich (3 Klientinnen) | ⏳ Marisha |
| Yes-Laddering Veto-Check durch Marisha (Option C ohne ihr finales OK gebaut) | ⏳ Marisha — Screenshot zeigen, fragen ob ein Satz nicht stimmt |
| ~~Email-Konsistenz site-wide~~ | ✅ Erledigt 28.05. (alle .com) |
| ~~Bildoptimierung~~ | ✅ Erledigt 28.05. (~15× kleiner) |
| ~~GitHub-Remote / Off-Site-Backup~~ | ✅ Erledigt 28.05. |
| ~~Git-Repo-Init~~ | ✅ Erledigt 25.05. |

**Launch-Schutz — Platzhalter-Check:** Vor jedem echten Launch muss
```
grep -rn "PLATZHALTER" app/ components/
```
LEER sein. Solange Treffer → nicht launch-ready.

---

## Offene Tagesordnungs-Punkte

### Erledigt diese Session
- ~~#3 Verstand-Körper-Graphik~~ ✅
- ~~#4 Marisha-Headline~~ ✅ (Vorschlag 5)
- ~~#5 Credentials-Format~~ ✅
- ~~#6 Angebot-Label~~ ✅ → „Begleitung"
- ~~#2 Yes-Laddering~~ ✅ gebaut (Option C) — ABER Marisha-Veto-Check ausstehend (siehe Blocker)

### Noch offen
- **P2 Bio-Story-Erweiterung** Marisha-Sektion (Marisha-Input)
- **Berufsbezeichnungs-Konsistenz** — „psychosomatisch" wurde entfernt (28.05.), Site führt nur noch „Körpertherapie"/„Körpertherapeutin". Falls anwaltliche Kurzeinschätzung erfolgt, kann sie „Körpertherapeutin" als Restpunkt mitprüfen.

---

## Git-Workflow (etabliert)

```
git status                          # immer ZUERST
git add -A && git commit -m "..."   # alles stagen (sicherer als spezifische Files)
git push                            # Off-Site + triggert Vercel-Deploy
git restore .                       # ungesicherte Änderungen verwerfen
git log --oneline                   # History
```
Ein logischer Change = ein Commit. STATUS.md einmal pro Session am Ende.

---

## Doku-Dateien im Repo
- **PRODUCT.md** — Brand-Bibel (Strategie, Copy, Verbote, Zielgruppe). Heute synced: „zeigt", „.com".
- **STATUS.md** (dies) — Arbeitsstand & Sessions
- **DESIGN.md** — technische Design-Spezifikation (Tokens, Fonts, Sections, Patterns). Hat noch ❓-Lücken für Komponenten deren Code nicht gesehen wurde (Hero, Marisha, Angebot, Erfahrungen, CTASection, Footer, Nav, PositioningLine, FadeIn, vollständiger globals.css) — bei Bedarf füllen.

---

## Diagnostic Lessons

### Frühe Sessions (24./25. Mai)
1. Browser-Zoom checken bei „zu klein"-Feedback
2. Fonts müssen importiert sein (Inkbleed-Sans-Fehler war historisch, inzwischen behoben — Dateien in public/fonts/)
3. Outline-Buttons brauchen tonalen Hintergrund-Kontrast
4. Visibility: Color UND Size simultan
5. Color-Audit per Pattern-Matching (Alpha-Varianten)
6. Section-Übergänge mit edge-to-edge Bildern brauchen explizite Margin
7. STATUS.md kann stale sein — Realitäts-Check vor Aktionen
8. Initial-Commit ohne .gitignore = korruptes Repo
9. Ignore-Decisions: Tooling-Ordner erst inspizieren
10. Vor destruktiven Operationen: Backup

### Session 28. Mai
11. Non-Breaking-Space bei Listen: Phrase+Trennzeichen als geschlossene nowrap-Einheit, nicht Trenner zwischen zwei Phrasen verkleben
12. `git status` IMMER vor `git add`. `git add -A` sicherer als spezifische Files (hat mal app/page.tsx-Integration übersehen)
13. Bildoptimierung ist Pre-Launch P1. macOS `sips -Z 2400 -s format jpeg -s formatOptions 75 file.jpg --out file.jpg`
14. `.next/` Build-Cache hat stale Referenzen auf gelöschten Code — gitignored, harmlos, bei grep ignorieren
15. `git init`+`remote add`+`push` setzt KEIN `origin/HEAD` — manuell `git remote set-head origin -a` (sonst `/security-review` broken)
16. GitHub CLI (`gh auth login`) statt Personal Access Tokens
17. v0.dev-Workflow für Design-Sections: Mood-Ref → Varianten → SVG extrahieren → in Claude Code adaptieren
18. Bei Section-Iteration konkret benennen welches Element wo nicht passt — nicht „verschoben"
19. Keine `<...>`-Platzhalter in zu kopierenden Terminal-Befehlen (zsh-Redirect)
20. **„Aktuelle Section zu schwach" in einem Status-Doc heißt ERSETZEN, nicht HINZUFÜGEN.** Fehler diese Session: Erkennen-Section gebaut während alte Yes-Laddering-Section noch da war → Duplikat. Bei „überarbeiten/verbessern" zuerst prüfen ob die alte Version weg muss.
21. **`[[PLATZHALTER: ...]]`-Marker für unfertige Inhalte + grep-Guard vor Launch.** Niemals nackte TODO-Kommentare die live gehen könnten.
22. **Claude Code berichtet gelegentlich falsch** — diese Session: garbled Email-Stellen-Report („Zeile 224 zusätzlich zu 224"), und Font-Audit sagte `.font-display → cormorant` obwohl schon EB Garamond. Berichte gegen Diff-Stats / grep verifizieren statt blind glauben.
23. **non-HP ist die rechtliche Grund-Tatsache.** „Coaching mit Körpertherapie", kein Heilpraktiker. Site bewusst auf nicht-geschützte Begriffe ausgelegt. Anwaltlicher Check ist optionale Absicherung, kein Pflicht-Gate. Korrektur aus dieser Session: zwischenzeitlich als „kritisches Launch-Gate" überzeichnet — Pushback war berechtigt. Lehre: rechtliche Sorgen an der tatsächlichen Wortwahl der Site prüfen, nicht pauschal eskalieren.

---

## Felix' Working Preferences
- Direkt, kein Cushioning, keine Pleasantries
- `[Unverified]` vor nicht-verifizierten Aussagen
- Annahmen herausfordern, Pushback bei flawed reasoning — explizit gewünscht
- Recommendations begründen
- Chirurgische Prompts für Claude Code (Before/After, Code-Blöcke)
- Keine `<...>`-Platzhalter in Befehlen
- **Felix ist NICHT der Praktiker, Marisha ist es**
- Marisha sitzt teils direkt daneben — Entscheidungen können live geholt werden statt async

---

## Opening Prompt für nächste Session
```
Wir arbeiten am holytouch-Projekt weiter. Im Repo liegen PRODUCT.md
(Brand-Bibel), STATUS.md (Arbeitsstand) und DESIGN.md (Design-Spec).

Lies zuerst STATUS.md (cat STATUS.md), dann gib mir zurück:
1. Was du verstanden hast (knapp, eigene Worte)
2. Welchen offenen Punkt du zuerst angehen würdest und warum
3. Offene Fragen vor dem Loslegen

Beachte: Marisha ist keine HP (Coaching mit Körpertherapie). Site nutzt
bewusst nur nicht-geschützte Begriffe. Anwaltlicher Check ist optionale
Absicherung, kein harter Blocker.

Workflow: direkt, kein Cushioning, [Unverified] labeln, Annahmen
herausfordern. Vor Code-Änderungen: git status + ggf. git log --oneline.
```

---

## Backlog (post-launch)
- `<Image>`-Component-Refactor (responsive/WebP/Lazy — letzte 10% Performance)
- DESIGN.md ❓-Lücken füllen (Komponenten-Code durchgeben)
- Duplikat-Commits a806128+472ce7d (kosmetisch, nicht lohnend zu fixen)
- Backup-Ordner löschen: `~/Desktop/webseite-holytouch-BACKUP-2026-05-25` (~400MB), `~/Desktop/holytouch-photos-backup/` (~43MB)
- Vercel „4 Recommendations" (Caching/Headers/SEO) mal anschauen
