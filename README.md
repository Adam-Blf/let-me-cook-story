# Let Me Cook · Story 45s (Remotion)

Teaser vidéo 45 s qui montre tout le parcours de l'app
[Let Me Cook](https://github.com/Adam-Blf/let-me-cook). Cooky mascotte
+ Splash + Feed social + Share sheet + Extraction + Recipe + Cook mode
+ Finished + Library + Outro.

Produit en Remotion 4 · 1080×1920 portrait (Stories Insta / TikTok /
Reels) · 30 fps · 1350 frames.

## Lancer le studio

```bash
cd C:\Users\adamb\let-me-cook-story
npm install --legacy-peer-deps
npm run start     # ouvre l'interface Remotion Studio
```

## Render en mp4

```bash
npm run render              # story 1080×1920 → out/let-me-cook-story.mp4
npm run render:square       # version carrée 1080×1080 pour feed Insta
```

## Structure

```
let-me-cook-story/
  src/
    index.ts               · entry · registerRoot
    Root.tsx               · Compositions (story, story-square, scenes/*)
    Story.tsx              · Series qui enchaîne les 9 scènes
    tokens.ts              · palette (même que l'app)
    fonts.ts               · Google Fonts (Instrument Serif, Geist, Geist Mono)
    Cooky.tsx              · mascotte SVG (7 poses)
    PhoneFrame.tsx         · iPhone shell réutilisable
    scenes/
      Scene01_Intro.tsx    · 5s · Cooky + wordmark
      Scene02_Feed.tsx     · 5s · scroll TikTok
      Scene03_Share.tsx    · 4s · share sheet iOS
      Scene04_Extraction.tsx · 5s · loader + 4 étapes
      Scene05_Recipe.tsx   · 6s · fiche recette + ingrédients cascade
      Scene06_CookMode.tsx · 5s · cook mode dark + timer
      Scene07_Finished.tsx · 5s · Cooky happy + stars
      Scene08_Library.tsx  · 5s · grille 8 recettes
      Scene09_Outro.tsx    · 5s · CTA + wordmark + stores
  remotion.config.ts
  package.json
```

## Timing (30 fps · total 1350 frames · 45 s)

| Scène | Frames | Durée |
|---|--:|--:|
| Intro | 150 | 5 s |
| Feed | 150 | 5 s |
| Share | 120 | 4 s |
| Extraction | 150 | 5 s |
| Recipe | 180 | 6 s |
| CookMode | 150 | 5 s |
| Finished | 150 | 5 s |
| Library | 150 | 5 s |
| Outro | 150 | 5 s |

## Exports prévus

- `let-me-cook-story.mp4` · 1080×1920 · Insta Story, TikTok, Reels, Shorts
- `let-me-cook-square.mp4` · 1080×1080 · Feed Insta
- (Futur) `let-me-cook-landscape.mp4` · 1920×1080 · YouTube, X, LinkedIn
