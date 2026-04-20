// Scène 08 · bibliothèque · grille avec vraies photos
import React from 'react';
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';
import { foodPhotos } from '../food';

const RECIPES = [
  { title: 'Carbonara', photo: foodPhotos.carbonara, kcal: 685, author: '@nonnaroma' },
  { title: 'Riz gluant mangue', photo: foodPhotos.mangoSticky, kcal: 420, author: '@thaichef' },
  { title: 'Shakshuka', photo: foodPhotos.shakshuka, kcal: 310, author: '@mediterranea' },
  { title: 'Cookies chocolat', photo: foodPhotos.cookies, kcal: 215, author: '@bakehouse' },
  { title: 'Ramen tonkotsu', photo: foodPhotos.ramen, kcal: 760, author: 'Ramen Club' },
  { title: 'Salade feta', photo: foodPhotos.salad, kcal: 390, author: 'greenblog.fr' },
  { title: 'Tacos al pastor', photo: foodPhotos.tacos, kcal: 480, author: '@tacomaria' },
  { title: 'Galette bretonne', photo: foodPhotos.galette, kcal: 340, author: 'Grand-mère' },
];

export const Scene08Library: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOp = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill style={{ background: tokens.cream, padding: 80 }}>
      <div style={{ opacity: titleOp }}>
        <div
          style={{
            fontFamily: fontFamily.mono,
            fontSize: 22,
            letterSpacing: 4,
            color: tokens.saffron,
            textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          Bibliothèque
        </div>
        <div
          style={{
            fontFamily: fontFamily.serifItalic,
            fontSize: 120,
            color: tokens.ink,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          Ta cuisine
        </div>
        <div
          style={{
            fontFamily: fontFamily.sans,
            fontSize: 28,
            color: tokens.inkMuted,
            marginTop: 16,
          }}
        >
          <span style={{ color: tokens.saffron, fontWeight: 600 }}>28</span> plats ce mois-ci.
        </div>
      </div>

      <div
        style={{
          marginTop: 40,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 16,
          flex: 1,
        }}
      >
        {RECIPES.map((r, i) => (
          <Card key={i} recipe={r} index={i} />
        ))}
      </div>
    </AbsoluteFill>
  );
};

function Card({ recipe, index }: { recipe: typeof RECIPES[number]; index: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delay = 10 + index * 5;
  const scale = spring({ frame: frame - delay, fps, config: { damping: 14 }, durationInFrames: 25 });
  const y = interpolate(frame, [delay, delay + 15], [30, 0], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
  });

  return (
    <div
      style={{
        transform: `scale(${scale}) translateY(${y}px)`,
        borderRadius: 24,
        overflow: 'hidden',
        minHeight: 260,
        position: 'relative',
      }}
    >
      <Img src={recipe.photo} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 40%, rgba(0,0,0,0.75) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 24,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontFamily: fontFamily.mono,
            fontSize: 14,
            letterSpacing: 2,
            color: tokens.cream,
            textTransform: 'uppercase',
            opacity: 0.9,
          }}
        >
          {recipe.author}
        </div>
        <div>
          <div
            style={{
              fontFamily: fontFamily.serifItalic,
              fontSize: 38,
              color: tokens.cream,
              letterSpacing: -0.5,
              lineHeight: 1,
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            }}
          >
            {recipe.title}
          </div>
          <div
            style={{
              marginTop: 12,
              alignSelf: 'flex-start',
              background: '#ffffffb0',
              padding: '4px 12px',
              borderRadius: 999,
              fontFamily: fontFamily.mono,
              fontSize: 14,
              color: tokens.espresso,
              letterSpacing: 1,
              display: 'inline-block',
            }}
          >
            {recipe.kcal} KCAL
          </div>
        </div>
      </div>
    </div>
  );
}
