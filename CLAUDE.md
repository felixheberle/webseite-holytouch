# CLAUDE.md

Arbeitsanweisungen für Claude Code in diesem Repo. Stehende Entscheidungen —
nicht bei jeder Session neu erfragen.

## Projekt

Marketing-Website für HolyTouch (Marisha). Next.js 15 App Router, React 19,
Tailwind 4, TypeScript. Statische Seiten, kein Backend, keine Datenbank.

Kontext-Dokumente, vor größeren Änderungen lesen statt neu herzuleiten:

- `PRODUCT.md` — Positionierung, Zielgruppe, Inhalte, Typografie, Rechtliches
- `STATUS.md` — aktueller Stand pro Section, offene Punkte, gelernte Lektionen
- `DESIGN.md` — visuelle Sprache, Farben, Spacing

## Package Manager: pnpm

**Immer pnpm, nie npm.** `pnpm install`, `pnpm build`, `pnpm dev`.

Kein `package-lock.json` anlegen. Falls eines auftaucht, ist das ein Fehler —
es hat schon einmal dazu geführt, dass Produktion und lokale Entwicklung auf
unterschiedlichen Dependency-Versionen liefen (siehe PR #2).

Einzige Ausnahme: `npx tsc --noEmit` für den Typecheck ist in Ordnung.

## Deployment: Push auf `main` ist ein Live-Deploy

Vercel deployt automatisch bei jedem Push auf `main`
(`https://webseite-holytouch.vercel.app`). `main` ist damit Produktion.

**Niemals direkt auf `main` committen oder pushen.** Immer:

1. Feature-Branch (`chore/...`, `feat/...`, `fix/...`)
2. Commit, Push, PR gegen `main`
3. Vercel baut eine Preview-URL — die ist der eigentliche Review-Gegenstand
4. Gemergt wird ausschließlich von Felix

Auf Feature-Branches darf autonom committet und gepusht werden. Nur der Merge
nach `main` bleibt manuell.

## Checks vor jedem PR

```bash
npx tsc --noEmit
pnpm build
grep -rn "PLATZHALTER\|TODO\|FIXME" app/ components/
```

Der grep ist kein Stilthema. Unfertige Inhalte werden bewusst mit
`[[PLATZHALTER: ...]]` markiert (STATUS.md, Lektion 21), damit sie auffindbar
sind. Ein Platzhalter, der in Impressum oder Datenschutz live geht, ist ein
rechtliches Risiko, kein Schönheitsfehler.

## Sprache

Commits, PR-Titel, PR-Beschreibungen und Antworten auf Deutsch. Code,
Branch-Namen und technische Bezeichner auf Englisch.

Commit-Messages beschreiben das Warum, nicht nur das Was.

## Rechtlich sensible Seiten

`app/impressum/` und `app/datenschutz/` sind rechtlich relevant. Änderungen
dort nie stillschweigend mitnehmen — immer explizit im PR benennen, damit
Felix gezielt draufschaut. Laut `PRODUCT.md` ist vor dem Live-Gang noch eine
anwaltliche Prüfung vorgesehen.

## Bilder

Fotos in `public/photos/` sind bereits optimiert (max 2400px, JPEG Q75).
Originale liegen in `material/` und sind gitignored — nie ins Repo committen.
