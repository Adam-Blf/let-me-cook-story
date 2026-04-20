// Scène 05 · recette hero (photo + overlay) et ingrédients cascade · safe zone 1320 px
import React from 'react';
import { Easing, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';
import { foodPhotos } from '../food';
import { StoryLayout } from '../StoryLayout';

const INGREDIENTS = [
  { q: '200', u: 'g', name: 'spaghetti' },
  { q: '100', u: 'g', name: 'guanciale' },
  { q: '2', u: '', name: "jaunes d'œufs" },
  { q: '1', u: '', name: 'œuf entier' },
  { q: '50', u: 'g', name: 'pecorino' },
  { q: '1', u: 'c.à.c', name: 'poivre noir' },
];

export const Scene05Recipe: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const heroScale = spring({ frame, fps, config: { damping: 14 }, durationInFrames: 30 });
  const titleOp = interpolate(frame, [8, 28], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const kcalOp = interpolate(frame, [20, 40], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  return (
    <StoryLayout bg={tokens.cream} justify="flex-start">
      {/* hero photo */}
      <div
        style={{
          width: '100%',
          height: 680,
          position: 'relative',
          overflow: 'hidden',
          transform: `scale(${heroScale})`,
          transformOrigin: 'top',
        }}
      >
        <Img src={foodPhotos.carbonara} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 30%, transparent 55%, rgba(0,0,0,0.7) 100%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 30,
            left: 40,
            fontFamily: fontFamily.mono,
            fontSize: 18,
            color: tokens.saffronSoft,
            letterSpacing: 3,
          }}
        >
          TIKTOK · @NONNAROMA · 0:47
        </div>

        <div style={{ position: 'absolute', bottom: 40, left: 40, right: 40, opacity: titleOp }}>
          <div
            style={{
              fontFamily: fontFamily.serifItalic,
              fontSize: 100,
              color: tokens.cream,
              letterSpacing: -2,
              lineHeight: 1,
              textShadow: '0 4px 24px rgba(0,0,0,0.45)',
            }}
          >
            Carbonara crémeuse
          </div>
          <div
            style={{
              fontFamily: fontFamily.sans,
              fontSize: 24,
              color: tokens.cream,
              opacity: 0.92,
              marginTop: 12,
            }}
          >
            La vraie · sans crème · 20 min · 2 portions
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            top: 30,
            right: 40,
            background: tokens.saffron,
            padding: '10px 18px',
            borderRadius: 999,
            display: 'flex',
            alignItems: 'baseline',
            gap: 8,
            opacity: kcalOp,
          }}
        >
          <div style={{ fontFamily: fontFamily.mono, fontSize: 28, color: tokens.cream, fontWeight: 700 }}>
            685
          </div>
          <div style={{ fontFamily: fontFamily.mono, fontSize: 14, color: tokens.cream, letterSpacing: 2 }}>
            KCAL
          </div>
        </div>
      </div>

      {/* ingredients list */}
      <div style={{ padding: '30px 70px', width: '100%', boxSizing: 'border-box', flex: 1 }}>
        <div
          style={{
            fontFamily: fontFamily.mono,
            fontSize: 18,
            letterSpacing: 3,
            color: tokens.inkMuted,
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          Ingrédients
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {INGREDIENTS.map((ing, i) => (
            <IngredientRow key={i} ingredient={ing} index={i} />
          ))}
        </div>
      </div>
    </StoryLayout>
  );
};

function IngredientRow({ ingredient, index }: { ingredient: typeof INGREDIENTS[number]; index: number }) {
  const frame = useCurrentFrame();

  const startFrame = 40 + index * 10;
  const op = interpolate(frame, [startFrame, startFrame + 12], [0, 1], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
    easing: Easing.out(Easing.cubic),
  });
  const x = interpolate(frame, [startFrame, startFrame + 12], [30, 0], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        padding: '12px 0',
        borderBottom: `1px solid ${tokens.line}`,
        opacity: op,
        transform: `translateX(${x}px)`,
      }}
    >
      <div
        style={{
          fontFamily: fontFamily.mono,
          fontSize: 22,
          color: tokens.saffron,
          width: 130,
          fontWeight: 600,
        }}
      >
        {ingredient.q} {ingredient.u}
      </div>
      <div style={{ fontFamily: fontFamily.sans, fontSize: 26, color: tokens.ink }}>{ingredient.name}</div>
    </div>
  );
}
