// Scène 08 · bibliothèque · grille de recettes qui apparaît en cascade
import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { tokens } from '../tokens';
import { fontFamily } from '../fonts';

const RECIPES = [
  { title: 'Carbonara', tone: tokens.creamSoft, kcal: 685, author: '@nonnaroma' },
  { title: 'Riz gluant mangue', tone: tokens.saffronSoft, kcal: 420, author: '@thaichef' },
  { title: 'Shakshuka', tone: `${tokens.tomato}40`, kcal: 310, author: '@mediterranea' },
  { title: 'Cookies chocolat', tone: `${tokens.espresso}30`, kcal: 215, author: '@bakehouse' },
  { title: 'Ramen tonkotsu', tone: `${tokens.plum}30`, kcal: 760, author: 'Ramen Club' },
  { title: 'Salade feta', tone: `${tokens.olive}30`, kcal: 390, author: 'greenblog.fr' },
  { title: 'Tacos al pastor', tone: `${tokens.saffron}40`, kcal: 480, author: '@tacomaria' },
  { title: 'Galette bretonne', tone: tokens.cream, kcal: 340, author: 'Grand-mère' },
];

export const Scene08Library: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOp = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' });

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

      {/* grid */}
      <div
        style={{
          marginTop: 50,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 20,
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

  const delay = 20 + index * 6;
  const scale = spring({ frame: frame - delay, fps, config: { damping: 12 }, durationInFrames: 30 });
  const y = interpolate(frame, [delay, delay + 20], [40, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  return (
    <div
      style={{
        transform: `scale(${scale}) translateY(${y}px)`,
        background: recipe.tone,
        borderRadius: 28,
        padding: 32,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 220,
        position: 'relative',
      }}
    >
      <div
        style={{
          fontFamily: fontFamily.mono,
          fontSize: 16,
          letterSpacing: 2,
          color: tokens.inkMuted,
          textTransform: 'uppercase',
        }}
      >
        {recipe.author}
      </div>
      <div
        style={{
          fontFamily: fontFamily.serifItalic,
          fontSize: 42,
          color: tokens.ink,
          letterSpacing: -0.5,
          lineHeight: 1,
        }}
      >
        {recipe.title}
      </div>
      <div
        style={{
          alignSelf: 'flex-start',
          background: '#ffffff80',
          padding: '6px 14px',
          borderRadius: 999,
          fontFamily: fontFamily.mono,
          fontSize: 16,
          color: tokens.espresso,
          letterSpacing: 1,
        }}
      >
        {recipe.kcal} KCAL
      </div>
    </div>
  );
}
