# Holytouch — Design-Dokumentation

**Stand:** 28. Mai 2026
**Verhältnis zu anderen Docs:** PRODUCT.md = Brand-Bibel (Strategie, Copy, Verbote). STATUS.md = Arbeitsstand & Sessions. DESIGN.md (dies) = technische Design-Spezifikation des implementierten Standes.
**Stack:** Next.js (App Router) + Tailwind CSS v4 (via `@import "tailwindcss"`, keine config-Datei)

**Verifikations-Hinweis:** Werte mit ✅ sind aus dem Code/Live-Site dieser Session verifiziert. Werte mit ⚠️ sind aus Komponenten abgeleitet die ich direkt bearbeitet habe. Werte mit ❓ benötigen noch Verifikation aus Komponenten-Code den ich nicht gesehen habe.

---

## 1. Design-Tokens (Farben)

✅ Verifiziert aus `app/globals.css` `:root`:

| Token | Wert (oklch) | Rolle | Ungefähr Hex |
|---|---|---|---|
| `--c-bg` | `oklch(18% 0.05 130)` | Haupt-Hintergrund, dunkles Olivgrün | ~#1a2010 |
| `--c-surface` | `oklch(20.5% 0.05 130)` | Erhöhte Flächen, leicht heller als bg | ~#1f2614 |
| `--c-text` | `oklch(93% 0.012 85)` | Body-Text, Cremeweiß | ~#efeae0 |
| `--c-muted` | `oklch(50% 0.01 75)` | Gedämpfter Text, sekundär | ~#7a766c |
| `--c-gold` | `oklch(67% 0.08 88)` | Primärakzent Olivgold (Labels, Bullets, CTA) | ~#b5a063 |
| `--c-rust` | `oklch(52% 0.13 35)` | Sekundärakzent Rost | ~#b24a2c |
| `--c-border` | `oklch(67% 0.08 88 / 0.14)` | Trennlinien, Gold mit 14% Alpha | — |

**Wichtige Abweichung von PRODUCT.md:** PRODUCT.md spezifiziert den Hintergrund als „warmes, leicht getöntes Schwarz (~#0F0E0D)". Implementiert ist stattdessen **dunkles Olivgrün** `oklch(18% 0.05 130)`. Das ist eine bewusste Brand-Evolution während des Builds — das Olivgrün wurde zum tatsächlichen Marken-Hintergrund. PRODUCT.md ist an dieser Stelle stale.

**Anti-Farben (aus PRODUCT.md):** Pastellrosa, Lavendel, Royal Blue, knalliges Türkis, gesättigte Töne, reines #000, reines #fff.

---

## 2. Typografie

✅ Verifiziert aus `app/layout.tsx` + `app/globals.css` (Stand: nach Cormorant-Entfernung 28. Mai):

### Geladene Fonts

| Font | Quelle | Gewichte / Stile | CSS-Zugriff |
|---|---|---|---|
| **Inkbleed Sans** | self-hosted, `public/fonts/` (.woff/.woff2) | Regular (400), Oblique | direkt `'Inkbleed Sans', Georgia, serif` |
| **EB Garamond** | Next.js Google Fonts | 400, normal + italic | `var(--font-eb-garamond)` |

**Cormorant Garamond wurde am 28. Mai entfernt** (Font-Konsolidierung auf EB Garamond). Vorher Display-Font, jetzt durch EB Garamond ersetzt.

### Font-Rollen

| Element | Font | CSS-Quelle |
|---|---|---|
| Body / Fließtext | EB Garamond | `<body>` Selektor |
| Headlines (`.font-display`-Klasse, 17× in 10 Komponenten) | EB Garamond (nach Migration) | `.font-display` (globals.css:55) |
| Section-Labels (gold uppercase, z.B. „GESPRÄCH UND KÖRPER") | Inkbleed Sans | globals.css:61/99/119/128 ❓ exakte Zuordnung |
| Legal-Pages h2 | Inkbleed Sans | `.legal-content h2` (globals.css:159) |
| Legal-Pages Body | EB Garamond | `.legal-content p` (globals.css:160) |
| CTA-Button-Label | EB Garamond (nach Migration) | `.cta-button` (globals.css:82) |

### @font-face Setup (Inkbleed Sans)

✅ globals.css Zeile 15-30:
```css
@font-face {
  font-family: 'Inkbleed Sans';
  src: url('/fonts/inkbleed-sans-regular.woff2') format('woff2'),
       url('/fonts/inkbleed-sans-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
/* + oblique-Variante */
```

---

## 3. Layout & Spacing

### Responsive-Strategie

⚠️ Durchgängiges Muster (aus bearbeiteten Komponenten): **`clamp()` für fluide Skalierung** statt fixer Breakpoints. Format `clamp(MIN, PREFERRED-vw, MAX)`.

### Section-Padding-Konventionen

⚠️ Aus Erkennen.tsx (selbst geschrieben, repräsentativ für neue Sections):
```
padding: clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 3rem)
```
Vertikal großzügig (5-9rem), horizontal moderater (1.5-3rem).

### Container-Breiten

⚠️ Verifiziert aus Komponenten die ich bearbeitet habe:
| Komponente | maxWidth |
|---|---|
| Erkennen (Yes-Laddering) | `750px` |
| VerstandKoerper | `950px` |
| Method (Body) | `54ch` (aus geseh. Code) |

### Typografie-Größen (Headlines)

⚠️ Aus Erkennen.tsx:
- Zeilen-Statements: `clamp(1.4rem, 2.3vw, 1.85rem)`, lineHeight 1.5
- Section-Label-Schluss: `clamp(0.75rem, 0.9vw, 0.85rem)`, letter-spacing 0.18em, uppercase

❓ Exakte Headline-Größen anderer Sections (Hero, Marisha, Angebot etc.) aus deren Komponenten-Code zu ergänzen.

---

## 4. Komponenten-Patterns

### `.font-display` (CSS-Klasse, NICHT Tailwind-Utility)
✅ Definiert in globals.css:55. Verwendet für alle Display-Headlines. 17 Vorkommen in 10 Komponenten. Nach Migration: EB Garamond.

### `.section-label`
⚠️ Gold-uppercase Label oben in Sections (z.B. „ÜBER MARISHA", „GESPRÄCH UND KÖRPER", „ANGEBOT"). Inkbleed Sans, letter-spacing, `var(--c-gold)`, uppercase.
**Lesson aus Session:** Diese Klasse NICHT für Listen-Items verwenden — sie ist für Section-Header. Credentials-Liste in Marisha.tsx hatte fälschlich diese Klasse, ergab unlesbaren Gold-Teppich. Fix: explizites Cream-Mixed-Case-Styling.

### `.cta-button`
✅ globals.css:78-94 (aus Memory). Stufe-2-Stand: Background `oklch(76% 0.12 88)` (heller/saturierter als `--c-gold`), Padding `1.5rem 3.5rem`, font-size `0.95rem`, letter-spacing `0.14em`, Hover `oklch(82% 0.13 88)`. Font: EB Garamond (nach Migration).

### `FadeIn`
❓ Wrapper-Komponente für Scroll-Animationen, in Method.tsx + VerstandKoerper.tsx verwendet. Parameter/Implementierung nicht gesehen — aus `components/FadeIn.tsx` zu dokumentieren.

### Helix-SVG (VerstandKoerper)
✅ Aus v0.dev extrahiert. ViewBox `0 0 220 300`, zwei sich kreuzende Stränge in `oklch(67% 0.08 88)`, Knot-Punkt bei Kreuzung. Render-Größe 180×245px.

### Subtitle-Wrap-Pattern (Lesson #11)
✅ Phrasen mit Trennzeichen als geschlossene Einheit per `<span style={{whiteSpace: 'nowrap'}}>Phrase ·</span>`, dazwischen normale Wrap-Points. Verhindert orphan-Trennzeichen.

---

## 5. Section-Architektur

✅ Reihenfolge verifiziert aus Live-Site (28. Mai):

1. **Nav/Header** — Logo „holy touch / Marisha Sarah" links, Phone + „KENNENLERNGESPRÄCH" rechts
2. **Hero** — hero.jpg (objectPosition `80% 34%` ❓), Tagline „Dein Körper zeigt, was dein Verstand nicht sagen kann." ⚠️ (PRODUCT.md sagt „weiß" — Drift ungelöst)
3. **PositioningLine** — „Psychosomatische Körpertherapie am Ammersee" (gold)
4. **Erkennen** (Yes-Laddering) — 3 Klientinnen-Zitate (italic, deutsche Quotes) → 2 Reflexionen (upright) → gold-uppercase Schluss „Wenn du dich wiedererkennst, bist du hier richtig."
5. **Method** („Die Arbeit") — Headline „Manchmal braucht es mehr als Worte.", drei Absätze (Definition → Mechanismus → Differenzierung), method.jpg
6. **VerstandKoerper** („Gespräch und Körper") — Headline „In Gespräch und Körper — bis sich beides *berührt*.", zwei Spalten (Gespräch / Körper) mit Helix-SVG dazwischen, Synthese-Statement
7. **Marisha** („Über Marisha") — Headline „Zwanzig Jahre. Sich im eigenen Körper wieder spüren.", Ich-Stimme-Body, Credentials-Liste (gold Dash-Bullets), marisha.jpg
8. **Angebot** („So arbeiten wir zusammen.") — Anamnese (2h/200€), Einzelsitzung (1h/100€, 1.5h/150€, 2h/200€). Lineare Preise, keine Paket-Rabatte (bewusste Abweichung von PRODUCT.md das Begleitungs-Pakete vorsah)
9. **Erfahrungen** — drei Testimonials (Susann B., Maike D., Claudia B.), 5-Sterne, „Google Rezension"-Footer
10. **CTA** — Headline „Zwanzig Minuten reichen, um zu spüren, ob ich die Richtige bin.", Olivgold-Button, Phone + E-Mail
11. **Footer** — Logo (56px), Impressum/Datenschutz/Instagram-Links, „© 2026 HolyTouch · Praxis am Ammersee"

---

## 6. Visuelle Prinzipien (aus PRODUCT.md)

1. **Im Zweifel zurückhaltender, nie lauter.** Holytouch flüstert.
2. **Bildwelt vor Schmuck.** Forenoon-Studios-Fotoserie trägt. Grafiken/Icons selten.
3. **Konkret vor allgemein.** „Nicht runterkommen" vor „Stress reduzieren".
4. **Eine Hauptaktion.** Kennenlerngespräch ist immer der primäre Klick.
5. **Lange Scrolls, große Flächen.** Keine Karten-Grids. Editoriales Tempo.
6. **Spannungsbogen warm-klar.** Warm UND substantiell, direkt UND sanft, körperlich UND klar.

### Bildwelt
Forenoon Studios (Marlene Etzel). Dunkel, intim, dokumentarisch, Wald, somatisch, Berührungsmomente, Gesichter oft abgewandt/unscharf, erdige Töne, weiches Tageslicht. Web-Nutzungsrechte vorhanden.

### Bild-Optimierung (Lesson #13)
Alle Fotos via macOS `sips` komprimiert: max 2400px lange Seite, JPEG Q75. Von ~43MB auf ~2.8MB (~15×). Next.js `<Image>` re-optimiert zusätzlich runtime.

---

## 7. Performance

✅ Foto-Größen nach Optimierung:
| Foto | Größe |
|---|---|
| cta-bg.jpg | 1.3 MB |
| method.jpg | 517 KB |
| marisha.jpg | 497 KB |
| hero.jpg | 462 KB |

**Keine Drittanbieter-Embeds** (kein Calendly-Embed, kein Maps-Embed) → kein Cookie-Consent-Banner nötig. Externe Dienste nur als Link in neuem Tab.
**Webfonts:** Inkbleed Sans self-hosted, EB Garamond via Next.js Google Fonts (mit `display: swap`).

---

## 8. Offene Verifikationen (für vollständige Doku)

Um diese Doku auf 100% zu bringen, fehlen mir noch Komponenten-Code-Einsichten:

- `components/Hero.tsx` — exakte Tagline-Typografie, objectPosition, Höhe
- `components/Marisha.tsx` — Headline-Größe, Credentials-Styling-Details
- `components/Angebot.tsx` — Preis-Layout, Spacing
- `components/Erfahrungen.tsx` — Karten-Struktur, Stern-Rendering
- `components/CTASection.tsx` — vollständige Button-Specs
- `components/Footer.tsx` — Logo-Größe, Link-Styling
- `components/Nav.tsx` — Header-Layout, Sticky-Verhalten
- `components/PositioningLine.tsx` — Typografie
- `components/FadeIn.tsx` — Animations-Parameter
- `app/globals.css` (vollständig, Zeile 50-Ende) — alle Klassen-Definitionen

Wenn du diese Dateien per `cat` durchgibst, ergänze ich die ❓-Stellen mit verifizierten Werten.

---

## 9. Bekannte Design-Drift gegenüber PRODUCT.md

| Punkt | PRODUCT.md | Implementiert | Status |
|---|---|---|---|
| Hintergrundfarbe | warmes Schwarz #0F0E0D | dunkles Olivgrün oklch(18% 0.05 130) | bewusste Evolution, PRODUCT.md stale |
| Hero-Tagline | „Dein Körper **weiß**..." | „Dein Körper **zeigt**..." | ✅ 'zeigt' bestätigt als gewollt, PRODUCT.md aktualisiert |
| Display-Font | Inkbleed Sans (nur Display) | Inkbleed Sans (Labels) + EB Garamond (Headlines) | Headlines nutzen EB Garamond, nicht Inkbleed |
| Angebot-Struktur | Begleitungs-Pakete (4/8 Termine, rabattiert) | Lineare Einzelpreise | bewusste Abweichung |
| E-Mail | marisha@holytouch.**de** | marisha@holytouch.**com** | ✅ '.com' bestätigt, PRODUCT.md aktualisiert |
