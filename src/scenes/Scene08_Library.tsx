// Scène 08 · bibliothèque · grille avec vraies photos (safe zone)
import React from 'react';
import { Easing, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';
import { foodPhotos } from '../food';
import { StoryLayout } from '../StoryLayout';

const RECIPES = [
  { title: 'Carbonara', photo: foodPhotos.carbonara, kcal: 685, author: '@nonnaroma' },
  { title: 'Riz mangue', photo: foodPhotos.mangoSticky, kcal: 420, author: '@thaichef' },
  { title: 'Shakshuka', photo: foodPhotos.shakshuka, kcal: 310, author: '@mediterranea' },
  { title: 'Cookies choco', photo: foodPhotos.cookies, kcal: 215, author: '@bakehouse' },
  { title: 'Ramen tonkotsu', photo: foodPhotos.ramen, kcal: 760, author: 'Ramen Club' },
  { title: 'Salade feta', photo: foodPhotos.salad, kcal: 390, author: 'greenblog.fr' },
  { title: 'Tacos al pastor', photo: foodPhotos.tacos, kcal: 480, author: '@tacomaria' },
  { title: 'Galette', photo: foodPhotos.galette, kcal: 340, author: 'Grand-mère' },
];

export const Scene08Library: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOp = interpolate(frame, [0, 14], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  return (
    <StoryLayout bg={tokens.cream} padding={50} justify="flex-start" align="stretch" gap={24}>
      <div style={{ opacity: titleOp }}>
        <div
          style={{
            fontFamily: fontFamily.mono,
            fontSize: 18,
            letterSpacing: 4,
            color: tokens.saffron,
            textTransform: 'uppercase',
            marginBottom: 8,
          }}
        >
          Bibliothèque
        </div>
        <div
          style={{
            fontFamily: fontFamily.serifItalic,
            fontSize: 100,
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
            fontSize: 22,
            color: tokens.inkMuted,
            marginTop: 10,
          }}
        >
          <span style={{ color: tokens.saffron, fontWeight: 600 }}>28</span> plats ce mois-ci.
        </div>
      </div>

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr 1fr',
          gap: 14,
        }}
      >
        {RECIPES.map((r, i) => (
          <Card key={i} recipe={r} index={i} />
        ))}
      </div>
    </StoryLayout>
  );
};

function Card({ recipe, index }: { recipe: typeof RECIPES[number]; index: number }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const delay = 10 + index * 4;
  const scale = spring({ frame: frame - delay, fps, config: { damping: 15 }, durationInFrames: 28 });
  const y = interpolate(frame, [delay, delay + 18], [30, 0], {
    extrapolateRight: 'clamp',
    extrapolateLeft: 'clamp',
    easing: Easing.out(Easing.cubic),
  });

  return (
    <div
      style={{
        transform: `scale(${scale}) translateY(${y}px)`,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Img
        src={recipe.photo}
        style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 40%, rgba(0,0,0,0.78) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 18,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontFamily: fontFamily.mono,
            fontSize: 12,
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
              fontSize: 30,
              color: tokens.cream,
              letterSpacing: -0.5,
              lineHeight: 1,
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            }}
          >
            {recipe.title}
          </div>
          <div
            style={{
              marginTop: 8,
              background: '#ffffffc0',
              padding: '3px 10px',
              borderRadius: 999,
              fontFamily: fontFamily.mono,
              fontSize: 12,
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
