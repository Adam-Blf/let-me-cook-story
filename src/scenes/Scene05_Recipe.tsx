// Scène 05 · recette hero avec vraie photo carbonara · ingrédients cascade
import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';
import { foodPhotos } from '../food';

const INGREDIENTS = [
  { q: '200', u: 'g', name: 'spaghetti' },
  { q: '100', u: 'g', name: 'guanciale' },
  { q: '2', u: '', name: "jaunes d'œufs" },
  { q: '1', u: '', name: 'œuf entier' },
  { q: '50', u: 'g', name: 'pecorino romano' },
  { q: '1', u: 'c.à.c', name: 'poivre noir' },
];

export const Scene05Recipe: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const heroScale = spring({ frame, fps, config: { damping: 12 }, durationInFrames: 25 });
  const titleOp = interpolate(frame, [5, 20], [0, 1], { extrapolateRight: 'clamp' });
  const kcalOp = interpolate(frame, [15, 30], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ background: tokens.cream, flexDirection: 'column' }}>
      {/* hero image */}
      <div
        style={{
          height: 900,
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
            background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 30%, transparent 55%, rgba(0,0,0,0.65) 100%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 60,
            left: 60,
            fontFamily: fontFamily.mono,
            fontSize: 22,
            color: tokens.saffronSoft,
            letterSpacing: 3,
          }}
        >
          TIKTOK · @NONNAROMA · 0:47
        </div>

        <div style={{ position: 'absolute', bottom: 80, left: 60, right: 60, opacity: titleOp }}>
          <div
            style={{
              fontFamily: fontFamily.serifItalic,
              fontSize: 130,
              color: tokens.cream,
              letterSpacing: -2,
              lineHeight: 1,
              textShadow: '0 4px 30px rgba(0,0,0,0.4)',
            }}
          >
            Carbonara crémeuse
          </div>
          <div
            style={{
              fontFamily: fontFamily.sans,
              fontSize: 30,
              color: tokens.cream,
              opacity: 0.92,
              marginTop: 16,
            }}
          >
            La vraie · sans crème · 20 min · 2 portions
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            top: 60,
            right: 60,
            background: tokens.saffron,
            padding: '14px 22px',
            borderRadius: 999,
            display: 'flex',
            alignItems: 'baseline',
            gap: 10,
            opacity: kcalOp,
          }}
        >
          <div style={{ fontFamily: fontFamily.mono, fontSize: 34, color: tokens.cream, fontWeight: 700 }}>
            685
          </div>
          <div style={{ fontFamily: fontFamily.mono, fontSize: 18, color: tokens.cream, letterSpacing: 2 }}>
            KCAL
          </div>
        </div>
      </div>

      {/* ingredients list */}
      <div style={{ padding: '50px 90px', flex: 1 }}>
        <div
          style={{
            fontFamily: fontFamily.mono,
            fontSize: 22,
            letterSpacing: 3,
            color: tokens.inkMuted,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          Ingrédients
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {INGREDIENTS.map((ing, i) => (
            <IngredientRow key={i} ingredient={ing} index={i} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};

function IngredientRow({ ingredient, index }: { ingredient: typeof INGREDIENTS[number]; index: number }) {
  const frame = useCurrentFrame();

  const startFrame = 30 + index * 8;
  const op = interpolate(frame, [startFrame, startFrame + 8], [0, 1], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });
  const x = interpolate(frame, [startFrame, startFrame + 8], [30, 0], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        padding: '18px 0',
        borderBottom: `1px solid ${tokens.line}`,
        opacity: op,
        transform: `translateX(${x}px)`,
      }}
    >
      <div
        style={{
          fontFamily: fontFamily.mono,
          fontSize: 28,
          color: tokens.saffron,
          width: 160,
          fontWeight: 600,
        }}
      >
        {ingredient.q} {ingredient.u}
      </div>
      <div style={{ fontFamily: fontFamily.sans, fontSize: 32, color: tokens.ink }}>{ingredient.name}</div>
    </div>
  );
}
