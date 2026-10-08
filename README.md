# Koderia Pulse
React + TypeScript + Vite demo dochádzkového systému. Fiktívne dáta, bez backendu a bez skutočného biometrického spracovania.

## Spustenie
`pnpm install` a `pnpm dev`. Produkčný build: `pnpm build`.

## Prezentácia
- **L**: sken Martinovej dlane; strieda príchod a odchod. Počas skenu sa opakované stlačenia ignorujú.
- **R**: reset demo dát.
- **Escape**: zavretie detailu alebo notifikácie.
- Skratky nereagujú pri písaní do vyhľadávania.
- `/`: prehľad, `/dochadzka`: zoznam a detail dochádzky.
- Demo dáta pretrvávajú v localStorage konkrétneho prehliadača.

Logo: koderia.sk. Návrh optimalizovaný pre notebook.

## Firemný prehľad
320 fiktívnych zamestnancov v 8 oddeleniach: IT, Marketing, Support, HR, Manažment, Obchod, Financie, Dizajn. Kliknutie na kartu oddelenia filtruje dochádzku; horné súčty vždy predstavujú celú firmu. Zoznam má 10 ľudí na stranu a podporuje kombináciu oddelenia, stavu a vyhľadávania bez diakritiky. Mesačné súhrny sú fiktívne prezentačné profily.
