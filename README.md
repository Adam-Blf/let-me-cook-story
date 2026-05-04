# Let Me Cook · Story 45s (Remotion)

<!-- adam-badges:start -->
[![commits](https://img.shields.io/github/commit-activity/t/Adam-Blf/let-me-cook-story?color=001329&label=commits&style=flat-square)](https://github.com/Adam-Blf/let-me-cook-story/commits) [![visites](https://hits.sh/github.com/Adam-Blf/let-me-cook-story.svg?style=flat-square&label=visites&color=001329)](https://hits.sh/github.com/Adam-Blf/let-me-cook-story/) [![last commit](https://img.shields.io/github/last-commit/Adam-Blf/let-me-cook-story?color=D4A437&style=flat-square&label=dernier%20push)](https://github.com/Adam-Blf/let-me-cook-story/commits) [![top language](https://img.shields.io/github/languages/top/Adam-Blf/let-me-cook-story?style=flat-square)](https://github.com/Adam-Blf/let-me-cook-story) [![license](https://img.shields.io/github/license/Adam-Blf/let-me-cook-story?style=flat-square&color=D4A437)](LICENSE)
<!-- adam-badges:end -->


Teaser vidéo 25 s qui montre tout le parcours de l'app
[Let Me Cook](https://github.com/Adam-Blf/let-me-cook). Cooky mascotte
+ Splash + Feed social + Share sheet + Extraction + Recipe + Cook mode
+ Finished + Library + Outro.

Produit en Remotion 4 · 1080×1920 portrait (Stories Insta / TikTok /
Reels) · 30 fps · 750 frames. Vraies photos de plats via Pexels
(licence commerciale libre) dans `public/food/`.

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

## Timing (30 fps · total 750 frames · 25 s)

| Scène | Frames | Durée |
|---|--:|--:|
| Intro | 75 | 2.5 s |
| Feed | 90 | 3 s |
| Share | 60 | 2 s |
| Extraction | 75 | 2.5 s |
| Recipe | 120 | 4 s |
| CookMode | 75 | 2.5 s |
| Finished | 75 | 2.5 s |
| Library | 90 | 3 s |
| Outro | 90 | 3 s |

## Photos

Toutes les photos de plats viennent de [Pexels](https://pexels.com)
(licence libre, commercial OK, attribution non obligatoire mais
recommandée).

| Fichier | Auteur Pexels | ID |
|---|---|---|
| `carbonara.jpg` | Pexels | 29039082 |
| `mango-sticky.jpg` | Mr Marv | 36681615 |
| `shakshuka.jpg` | Oleksandr Plakhota | 30892286 |
| `cookies.jpg` | Pexels | 31116124 |
| `ramen.jpg` | Pexels | 33493350 |
| `salad.jpg` | Pexels | 1152237 |
| `tacos.jpg` | Pexels | 12034501 |
| `galette.jpg` | Pexels | 32762150 |

## Exports prévus

- `let-me-cook-story.mp4` · 1080×1920 · Insta Story, TikTok, Reels, Shorts
- `let-me-cook-square.mp4` · 1080×1080 · Feed Insta
- (Futur) `let-me-cook-landscape.mp4` · 1920×1080 · YouTube, X, LinkedIn